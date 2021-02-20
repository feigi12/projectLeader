const mongoose = require('mongoose');
const schema = mongoose.Schema
const postSchema = new schema({
    title: {
        type: String,
      default:""
    },
    body: {
        type: String,
        require: true
    },
    user:
        {type:mongoose.Schema.Types.ObjectId, ref:'User'}
})
module.exports = mongoose.model('Post', postSchema)