const router = require('express').Router();
const { User, Post, Attend } =  require('../../models');
const { sequelize } = require('../../models/User');
const fetch = require('node-fetch');

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'event_title',
            'venue',
            'city',
            'band',
            'genre',
            'event_description',
            'featured_event',
            'created_at'
        ],
        include: [
            {
              model: User,
              attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
         res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// get a single post
router.get('/:id', (req, res) => {
    Post.findOne({
        attributes: [
            'id',
            'event_title',
            'venue',
            'city',
            'band',
            'genre',
            'event_description',
            'featured_event',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE post.id = attend.post_id)'), 'attend_count']
        ],
        where: { 
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          res.json(dbPostData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

// add a post
router.post('/', async (req, res) => {
    const ticketmasterApiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?&apikey=${process.env.TICKETMASTER_API_KEY}&keyword=${req.body.event_title}`;
    console.log(ticketmasterApiUrl);
    const response = await fetch(ticketmasterApiUrl);
    const data = await response.json();
    console.log(data);
	const eventImage = data._embedded.events[0].images[1].url;
    
    Post.create({
        event_title: req.body.event_title,
        venue: req.body.venue,
        city: req.body.city,
        band: req.body.band,
        genre: req.body.genre,
        event_description: req.body.event_description,
        featured_event: req.body.featured_event,
        date: req.body.date,
        user_id: req.session.user_id,
        image: eventImage
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// attending an event
router.put('/attend', (req, res) => {
    // make sure the session exists first
    if (req.session) {
      Post.attend({ ...req.body, user_id: req.session.user_id }, { Attend, User })
        .then(updatedAttendData => res.json(updatedAttendData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    }
  });

// update a post
router.put('/:id', (req, res) => {
    Post.update(
        {
            event_title: req.body.event_title,
            venue: req.body.venue,
            city: req.body.city,
            band: req.body.band,
            genre: req.body.genre,
            event_description: req.body.event_description,
            featured_event: req.body.featured_event,
            date: req.body.date,
            user_id: req.session.user_id
        },
        {
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No Post found at that id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => res.status(500).json(err));
});

// delete a post
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No Post found at that id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => res.status(500).json(err));
});


module.exports = router;