
const User = require('../model/user');
const Post = require('../model/post')
var nodemailer = require('nodemailer');
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch')
dotenv.config();
function sendMail(mailUser) {
    console.log(mailUser);
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'f6496554@gmail.com',
                pass: '206779373'
            }
        });

        var mailOptions = {
            from: 'f6496554@gmail.com',
            to: mailUser,
            subject: 'ברוכים הבאים',
            text: ' אנו שמחים שהצטרפת הרבה הצלחה '
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject(error);
            } else {
                console.log(info.response);
                resolve('Email sent: ' + info.response);
            }
        });
    })
}
const getAllUser = async (req, res) => {
    try {
        const allUser = await User.find().populate('posts')
        res.status(200).json(allUser)
    }
    catch (error) {
        res.status(500).send("אין משתמשים במערכת")

    }
}
const login = async (req, res) => {
    try {
        const { password, email } = req.body
        const user = await User.findOne({ password: password, email: email }).populate('posts')
        // if (user == null) {
        //     res.status(200).json()
        // }
        // else {
            res.status(200).json(user)
            console.log(user);
            let token = jwt.sign({ password: req.body.password, id: user._id }, process.env.SEACRET_JWT)
            localStorage.setItem('Token', token)
        // }
    }
    catch (eror) {
        res.status(500).send("לא קיים כזה user")
    }
}
const getUserById = async (req, res) => {
    try {

        const user = await User.findById(req.params.id).populate('posts')
        res.status(200).json(user)
    }
    catch (eror) {
        res.status(500).send("לא קיים id כזה מבערכת")

    }
}

const addUser = async (req, res) => {
    try {
        const user = new User(req.body)
        console.log(user);
        await user.save()
     await sendMail(req.body.email)
        res.status(200).json(user)
        let token = jwt.sign({ password: req.body.password, id: user._id }, process.env.SEACRET_JWT)
        localStorage.setItem('Token', token)
    }
    catch (error) {
        res.status(500).json(error.massege)
    }
}
const deleteUser = async (req, res) => {
    try {

        await User.findByIdAndDelete(req.params.id).then(
            res.status(200).send('the User is deleted')
        )
    }
    catch {
        res.status(400).send(error.massege)
    }
}
const editUser = async (req, res) => {
    console.log(req.body)
    try {
        await User.findByIdAndUpdate(req.params.id, req.body).then(
            res.status(200).send('the User is update')

        )
    }
    catch {
        res.status(400).send(error.massege)
    }
}
module.exports = { getAllUser, getUserById, addUser, deleteUser, editUser, login }