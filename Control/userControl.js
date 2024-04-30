

const users = require("../Model/Model");

exports.register=async(req,res)=>{
console.log("inside control funtion");
    const {firstname,lastname,address,email,gender,mobile,password,date,course}=req.body
    console.log(firstname,lastname,address,email,gender,mobile,password,date,course);
    try{
     //check email present in db or not
 
        const newUser =new users({
            firstname,lastname,address,email,gender,mobile,password,date,course
        })
        //to store to mongodb from mongooes model
        await newUser.save()
        res.status(200).json(newUser)
     }catch(err){
    console.log(err);
    res.status(401).json(err)
    }
   }


 exports.getData =async(req,res)=>{
    try{
        const AllData =await users.find()
        res.status(200).json(AllData)

    }catch(err){
   res.status(401).json(err)
    }
 }  

 exports.deteteData=async(req,res)=>{
    const {id}=req.params
   try{
    const deletes=await users.findOneAndDelete({_id:id})
    res.status(200).json(deletes)
   }catch(err){
console.log(err);
   }
 }