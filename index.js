const express =require('express')
const router =require('./Router/Router')
 const server =express()

 const cors =require('cors')
 require('dotenv').config()
 require('./DB/model')
 server.use(cors())
 server.use(express.json())
 server.use(router)
 const PORT =process.env.PORT ||3000

 server.listen(PORT,()=>{
    console.log(`server stating port ${PORT}`);
 })

 