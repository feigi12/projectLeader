const mongoose = require('mongoose');
const Post=require('./post')
const schema = mongoose.Schema
const userSchema = new schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        // unique: true,
        // required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    posts: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
    ]
})
userSchema.pre('deleteMany',async function(next){
    await Post.deleteMany({_id},{$in:this.posts})
    next;
})
module.exports = mongoose.model('User', userSchema)