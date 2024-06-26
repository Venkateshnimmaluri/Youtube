import mongoose from "mongoose";


const videoFileSchema = new mongoose.Schema({
        videoTitle:{
            type : String,
            require : true,
        } ,
        fileName:{
            type : String,
            require : true,
        } ,
        filePath:{
            type : String,
            require : true,
        },
        fileType:{
            type : String,
            require : true,
        },
        fileSize:{
            type : String,
            require : true,

        } ,
        videoChannel :{
            type : String,
            require : true,

        } ,
        Like:{
            type:Number,
            default : 0
        },
        Views:{
            type:Number,
            default:0
        },
        Uploader :{
            type : String,
        },
    }  ,  {
        
            timestamps:true
        }
    
    );
export default mongoose.model("videoFiles",videoFileSchema);