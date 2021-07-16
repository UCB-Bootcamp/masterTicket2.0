const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PostSchema = new Schema(
    {
        eventTitle: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 208
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        venue: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        band: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        eventDescription: {
            type: String,
            required: true
        },
        featuredEvent: {    
            type: Boolean, 
            default: false,
            required: false
        },
        date: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        attending: [
            {
                type: Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// PostSchema.virtual('attendCount').get(function() {
//     return this.attend.length
// });

const Post = model('Post', PostSchema);

module.exports = Post;