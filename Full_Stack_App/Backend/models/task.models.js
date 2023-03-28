const mongoose=require("mongoose");


const modelSchema=mongoose.Schema({
    assignee:String,
    task_type:String,
    description:String,
    status:String
})

Taskmodel=mongoose.model("task",modelSchema)


module.exports={Taskmodel}
