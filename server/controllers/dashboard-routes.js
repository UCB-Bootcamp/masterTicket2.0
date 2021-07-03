const { Post, Attend, User } = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');

// events that user posts
router.get('/', (req, res) => {
    if(req.session.loggedIn) {
        const posts = Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'event_title',
                'user_id',
                'venue',
                'city',
                'band',
                'genre',
                'event_description',
                'featured_event',
                'date',
                [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE post.id = attend.post_id)'),
                    'attend_count'],
                'image'
            ],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        const attend_events = Attend.findAll({
            where: {
                user_id: req.session.user_id,
            },
            attributes: [
                'id',
                'post_id',
                'user_id'
            ],
            include: [
                {
                    model: Post,
                    attributes: [
                        'id',
                        'event_title',
                        'user_id',
                        'venue',
                        'city',
                        'band',
                        'genre',
                        'event_description',
                        'featured_event',
                        'date',
                        'image'
                    ]
                }
            ]
        });
        Promise
            .all([posts, attend_events])
            .then(responses => {
                const posts = responses[0].map(post => post.get({ plain: true }));
                const attend_events = responses[1].map(post => post.get({ plain: true }));

                res.render('dashboard', {
                    posts,
                    attend_events,
                    loggedIn: req.session.loggedIn
                });
            })
    }
});

module.exports = router;
