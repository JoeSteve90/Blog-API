const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema ({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true,
        
    },
    photo:{
        type: String,
        required: true,
       
    },
    photo:{
        type: String,
        required: false,
    },
    categories:{
        type: Array,
        required: false,
    },
    state:{
        enum:['draft','published'], 
    },
    
},
 {timestamps: true }
);

module.exports = mongoose.model("Post",PostSchema)