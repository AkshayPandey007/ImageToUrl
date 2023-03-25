const express = require("express")
const cors = require("cors")
require("dotenv").config()
const {userController} = require("./Routes/user.route")

const {connection} = require("./config/db")
const app = express()


app.use(cors())
app.use(express.json())


app.get("/" , (req,res)=>{
  res.send("Welcome to home Page Pandey BOI")
})

app.use("/user" ,userController)

 app.listen(process.env.PORT , async()=>{
  try{
    await connection
    console.log("connected to DB successfully")
  }
  catch(err){
    console.log("connecting DB error")
    console.log(err)
  }
  console.log(`Listening on port ${process.env.PORT}`)
})
