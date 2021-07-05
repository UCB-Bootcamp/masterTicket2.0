const { Schema, Types, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /.+\@.+\..+/

        },
        password: {
            type: String,
            required: true,
            minLength: 4,
        },
        posts: [
            {
                type: Types.ObjectId,
                ref: 'Post'
            }
        ],
        friends: [
            {
                type: Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);



// THIS IS IN CASE WE WANT TO COUNT POSTS
// UserSchema.virtual('postCount').get(function() {
//     return this.post.length;
// });

// Create the User model using the UserSchema
const User = model('User', UserSchema);

// Export the model
module.exports = User;