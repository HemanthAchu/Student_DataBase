const express =require('express')
 const router =new express.Router()
const usersControl=require('../Control/userControl')


 router.post('/register',usersControl.register)
 router.get('/register',usersControl.getData)
 router.delete('/delete/:id',usersControl.deteteData)
 module.exports=router