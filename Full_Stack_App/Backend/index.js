const express=require("express");
const {userRouter}=require("./routes/user.route")
const {connection}=require("./config/db")
require("dotenv").config();
const {taskRouter}=require("./routes/task.route");

const cors=require("cors")

app=express();

app.use(express.json())

app.use(cors({
    origin:"*"
}))

// app.get("/",(req,res)=>{
//     res.send("Welcome to home page")
// })
app.use("/",userRouter)
app.use("/",taskRouter)



app.listen(process.env.port,async()=>{
    try{
await connection;
console.log(`port is running on ${process.env.port}`)
    }
    catch(err){
        console.log(err)
    }
    
})