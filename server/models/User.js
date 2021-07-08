const { Schema, model, Types } = require('mongoose');
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
        attending: [
            {
                type: Types.ObjectId,
                ref: 'Post'
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

UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Create the User model using the UserSchema
const User = model('User', UserSchema);

// Export the model
module.exports = User;