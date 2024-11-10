import mongoose from "mongoose";
const StudentSchema= new mongoose.Schema({
    'rollno':{type:String,require:true},
    'name':{type:String,require:true},
    'email':{type:String,require:true},
    'phone':{type:String,require:true}

});

const StudentModel=new mongoose.model('crud',StudentSchema);
export default StudentModel;