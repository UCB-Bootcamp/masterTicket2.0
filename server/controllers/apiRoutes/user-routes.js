const router = require('express').Router();
const { User, Post, Attend } = require('../../models');

// Get Users
router.get('/', (req, res) => {
	User.findAll({
		attributes: { exclude: ['password'] }
	})
		.then(dbUserData => res.json(dbUserData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

// Get one User by ID
router.get('/:id', (req, res) => {
	User.findOne({
		attributes: { exclude: ['password'] },
		where: {
			id: req.params.id
		},
		// include: [
		// 	{
		// 		model: Post,
		// 		attributes: ['id', 'title', 'post_url', 'created_at']
		// 	},
		// 	{
		// 		model: Post,
		// 		attributes: ['title'],
		// 		through: Vote,
		// 		as: 'voted_posts'
		// 	}
		// ]
	})
		.then(dbUserData => {
			if (!dbUserData) {
				res.status(404).json({ message: 'No user found with this id' });
				return;
			}
			res.json(dbUserData);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

// login
router.post('/login', (req, res) => {
	// expects {email: 'lernantino@gmail.com', password: 'password1234'}
	User.findOne({
		where: {
			email: req.body.email
		}
	}).then(dbUserData => {
		if (!dbUserData) {
			res.status(400).json({ message: 'No user with that email address!' });
			return;
		}

		const validPassword = dbUserData.checkPassword(req.body.password);
		if (!validPassword) {
			res.status(400).json({ message: 'Incorrect password!' });
			return;
		}
		req.session.save(() => {
			req.session.user_id = dbUserData.id;
			req.session.username = dbUserData.username;
			req.session.loggedIn = true;

			res.json({ user: dbUserData, message: 'You are now logged in!' });
		});
	});
});

// logout
router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// add new user
router.post('/', (req, res) => {
	User.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	})
		.then(dbUserData => {
			req.session.save(() => {
				req.session.user_id = dbUserData.id;
				req.session.username = dbUserData.username;
				req.session.loggedIn = true;

				res.json(dbUserData);
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});


// PUT /api/users/1
router.put('/:id', (req, res) => {
	User.update(req.body, {
		individualHooks: true,
		where: {
			id: req.params.id
		}
	})
		.then(dbUserData => {
			if (!dbUserData[0]) {
				res.status(404).json({ message: 'No user found with this id' });
				return;
			}
			res.json(dbUserData);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.delete('/:id', (req, res) => {
	User.destroy({
		where: {
			id: req.params.id
		}
	})
		.then(dbUserData => {
			if (!dbUserData) {
				res.status(404).json({ message: 'No user found with this id' });
				return;
			}
			res.json(dbUserData);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;