
const request = require('request');
function allPostApi  () {
   return new Promise((resolve,reject)=>{
       let options={
           method:'GET',
           url:'https://jsonplaceholder.typicode.com/posts'
       }
       request(options,(err,res,body)=>{
           if(err){
            reject(err)
            // res.status(400).send(error.massege)
           }
           else{
               resolve(body)
            // res.status(200).json(body)
           }
       })
   })
}
const getAllPostApi=(req,res)=>{
    allPostApi().then(data=>{
        res.status(200).json(JSON.parse(data) )
    })
    .catch(err=>{
        res.status(400).send(error.massege)
    })
}
module.exports = { getAllPostApi }