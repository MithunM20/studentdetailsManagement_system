// import StudentModel from "../models/studentSchema.js"

// const readController=async(req,res)=>{
//     try{
//         records = await StudentModel.find({})
//         if(records){
//             res.render('read.ejs',{'records':records})
//         }else{
//             res.render('read')
//         }
//     }catch(error){
//         console.log(error.message)
//     }

// }

// export {readController}

import StudentModel from "../models/studentSchema.js";

const readController = async (req, res) => {
    try {
        const records = await StudentModel.find({});
        res.render('read', { records: records || [] }); // Send records or empty array
    } catch (error) {
        console.error(error.message);
        res.render('read', { records: [] }); // Render with empty array on error
    }
};

export { readController };
