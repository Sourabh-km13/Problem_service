import mongoose from "mongoose";

const ProblemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title of problem cannot be empty']
    },
    description:{
        type:String,
        required:[true,'description of problem cannot be empty']
    },
    difficulty:{
        type:String,
        enum:["easy","medium","hard"],
        required: [true , 'difficulty cannot be empty'],
        default:'easy'
    },
    testcases:[
        {
            input:{
                type:String,
                required:true,
            },
            output:{
                type:String,
                required:true,
            },
        }
    ],
    editorial:{
        type:String,

    }
})

const problem = mongoose.model('problem',ProblemSchema)
export default problem