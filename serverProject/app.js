const express = require('express');
const app = express()
const mongoose = require('mongoose');
const router = require('./api/router/router')
var bodyParser = require('body-parser')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch')

dotenv.config();

const conectionParams = {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
//חיבור לmongo atlas

// mongoose.connect(process.env.DB_CONECT, conectionParams).
//     then(() => {
//         console.log('conection!!!!!!!!!!!!!!!');
//     })
//     .catch((err) => {
//         console.log(err);
//     })



mongoose.connect('mongodb://localhost:27017/leaderProject', conectionParams)
    .then(
        console.log('connected!!!!!!!!!!!!!')
    )
    .catch = (err) => {
        console.log(err);
    }

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
});

// app.use(function (req, res, next) {
//     if (localStorage.getItem("Token") !== null && localStorage.getItem("Token") !== undefined) {
//         jwt.verify(localStorage.getItem("Token"), process.env.SEACRET_JWT, function (err, token_data) {
//             if (err) {
//                 return res.status(403).send('Error');
//             } else {
//                 req.seacret = token_data;
//                 next();
//             }
//         });

//     }
//     next();
// });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', router)

app.listen(4009, () => {
    console.log("listener")
})