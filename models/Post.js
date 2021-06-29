const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {
    static attend(body, models) {
        return models.Attend.create({
            user_id: body.user_id,
            post_id: body.post_id
         }).then(() => {
             return Post.findOne({
                 where: {
                     id: body.post_id
                 },
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
                    [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE post.id = attend.post_id)'),
                    'attend_events']
                ],
                include: [
                    {
                        model: models.User,
                        attributes: ['username']
                    }
                ] 
             })
         })
    }
};

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        event_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        venue: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        band: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        featured_event: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;