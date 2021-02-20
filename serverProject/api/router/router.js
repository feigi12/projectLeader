const router=require('express').Router()
const{getAllUser,getUserById,login,addUser,deleteUser,editUser}=require('../controll/user')
const {getAllPost,getPostById,addPost,deletePost,editPost,addPostMy}=require('../controll/post')
const{getAllPostApi}=require('../controll/allPostApi')

// routers of user
router.get('/getAllUser',getAllUser);
router.post('/login',login);
router.get('/getUserById/:id',getUserById);
router.post('/addUser',addUser);
router.delete('/deleteUser/:id',deleteUser);
router.post('/editUser/:id',editUser);

// router of Post
router.get('/getAllPost',getAllPost);
router.get('/getPostById/:id',getPostById);
router.post('/addPost',addPost);
router.post('/addPostMy',addPostMy);
router.delete('/deletePost/:id',deletePost);
router.post('/editPost/:id',editPost);

// router of AllPostApi
router.get('/getAllPostApi',getAllPostApi);
module.exports=router
