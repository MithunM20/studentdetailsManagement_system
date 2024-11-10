import mongoose from "mongoose";
const connectDB= async()=>{
    const connect= await mongoose.connect('mongodb+srv://mithunmnair103:dRwoqnmqyp11RLty@cluster0.u4qzl.mongodb.net/student?retryWrites=true&w=majority&appName=Cluster0');
    if(connect){
        console.log('connected successfully');
    }else{
        console.log('connection failed');
    }
}

export default connectDB;