const mongoose=require("mongoose");
const ProfileSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
   
    job:{
        type:String,
        required:true
    },
    
    location:{
        type:String,
        required: true

    },
    phone:{
        type:Number,
        required: true
    },
    tarif:{
        type:String,
        
    },
    description:{
        type:String,
    }
});
module.exports = Profile= mongoose.model('profile', ProfileSchema);