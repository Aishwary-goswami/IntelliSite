import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    role:{
        type:String,
        enum:["user","ai"],
        required:true
    },
    content:{
        type:String,
        required:true
    }
},{timestamps:true})


const websiteSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    },
    title:{
        type:String ,
        default:"Untitled Web"
    },
    latestCode:{
        type:String,
        required:true
    },
    conversation:[messagesSchema],
    deployed:{type:Boolean , default:false},
    deployedUrl:{type:String},
    slug:{type:String , unique:true , sparse:true}
},{timestamps:true})

export const Website = mongoose.model("website" , websiteSchema)