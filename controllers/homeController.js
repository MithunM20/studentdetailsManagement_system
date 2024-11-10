import StudentModel from "../models/studentSchema.js";

const homeController=async(req,res)=>{

    res.render('index');
};

//create
const createController=async(req,res)=>{
    // console.log(req.body)
    const records =await StudentModel({
        rollno:req.body.rollno,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone

    });
    if(records){
        await records.save();
        console.log("data saved..")
    }else{
        console.log("data not saved...")
    }
    res.render('index')
}

export {homeController,createController};