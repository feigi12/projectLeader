
const Post = require('../model/post')
const User = require('../model/user')
const jwt = require('jsonwebtoken');
var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch')

const user = require('../model/user');

const getAllPost = async (req, res) => {
    try {
        const allPost = await Post.find().populate('user')
        res.status(200).json(allPost)
    }
    catch (error) {
        res.status(500).send("אין לך הודאות")

    }
}
const getPostById = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id).populate('user')
        res.status(200).json(post)
    }
    catch (eror) {
        res.status(500).send("לא קיים id כזה מבערכת")

    }
}
const addPost = async (req, res) => {
    let idUser
    try {
        const post = new Post(req.body)
        await post.save();
        if (localStorage.getItem("Token") === null || localStorage.getItem("Token") === undefined) {
            console.log("not user");
        }
        else {
            jwt.verify(localStorage.getItem("Token"), process.env.SEACRET_JWT, function (err, token_data) {
                if (err) {
                    return res.status(403).send('Error');
                } else {
                    idUser = token_data;
                }

            })
        }
        const user = await User.findByIdAndUpdate(idUser.id, { $push: { posts: post._id } }, { new: true }).populate('posts')
        res.status(200).json(user.posts)
    }
    catch (error) {
        res.status(500).json(error.massege)
    }

}
const addPostMy = async (req, res) => {
    try {
        const post = await Post.findById(req.body.id)
        console.log(post);
        // const {password,email}=req.user_data
        await User.findOneAndUpdate({ _id: req.params.id }, { $push: { posts: post._id } })
        res.status(200).json({ post: post })
    }

    catch (error) {
        res.status(500).json(error.massege)
    }

}
const deletePost = async (req, res) => {
    try {
        let idUser
        const post = await Post.findById(req.params.id)
        console.log(post);
            if (localStorage.getItem("Token") === null || localStorage.getItem("Token") === undefined) {
                console.log("not user");
            }
            else {
                jwt.verify(localStorage.getItem("Token"), process.env.SEACRET_JWT, function (err, token_data) {
                    if (err) {
                        return res.status(403).send('Error');
                    } else {
                        idUser = token_data;
                        console.log(idUser);
                    }

                })
            }
            // await User.findByIdAndUpdate(idUser, { $pull: { posts: req.params.id } },{new:true})
            const user = await User.findByIdAndUpdate(idUser.id, { $pull: { posts: post._id } }, { new: true }).populate('posts')
            await post.remove()
            
            res.status(200).json(user.posts)
    }
    catch {
        res.status(400).send(error.massege)
    }
}
const editPost = async (req, res) => {
    console.log("edit post"+req.body)
    try {
      await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
      jwt.verify(localStorage.getItem("Token"), process.env.SEACRET_JWT, function (err, token_data) {
        if (err) {
            return res.status(403).send('Error');
        } else {
            idUser = token_data;
        }})
     
        const user = await User.findById(idUser.id).populate('posts')
            res.status(200).json(user.posts)
            console.log("edit post and"+user.posts)
    }
    catch {
        res.status(400).send(error.massege)
    }
}
module.exports = { getAllPost, getPostById, addPost, deletePost, editPost, addPostMy }