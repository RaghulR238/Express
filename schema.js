import mongoose from "mongoose";

const User=mongoose.Schema({   //mongoose.Schema is a method used to create a schema
    name:                      //defining inputs or output credentials
    {
        type:String
    },
    Id:{

        type:Number,
    }
},{
        timestamps:true   //table created time and date will be stored
    });
//special export of nodeJS
//collection in db will be created as user
//.model is a default function used to inialize schema  with name "User"
export default mongoose.model("User",User);  
