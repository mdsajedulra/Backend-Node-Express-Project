import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import Joi from 'joi';

const createStudent = async (req: Request, res: Response) => {
  try {

// Joi schema 


      const studentValidationSchema = Joi.object({
        id: Joi.string().min(5).max(20).required(),
        name: Joi.object({
          firstname: Joi.string().min(2).max(50).required(),
          middleName: Joi.string().max(50).allow(null, ''),
          lastName: Joi.string().min(2).max(50).required(),
        }).required(),
        gender: Joi.string().valid('male', 'female').required(),
        dateOfBirth: Joi.date().iso().required(),
        email: Joi.string().email().required(),
        contactNo: Joi.string()
          .pattern(/^\+?\d{10,15}$/)
          .required(),
        bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').required(),
        presentAddress: Joi.string().min(10).max(200).required(),
        parmanentAddress: Joi.string().min(10).max(200).required(),
        guardian: Joi.object({
          fatherName: Joi.string().required(),
          fatherContactNo: Joi.string()
            .pattern(/^\+?\d{10,15}$/)
            .required(),
          motherContactNo: Joi.string()
            .pattern(/^\+?\d{10,15}$/)
            .required(),
          motherOccupation: Joi.string().min(3).max(100).required(),
        }).required(),
        localGuardian: Joi.object({
          name: Joi.string().min(2).max(50).required(),
          ocupation: Joi.string().min(3).max(100).required(),
          contactNo: Joi.string()
            .pattern(/^\+?\d{10,15}$/)
            .required(),
          address: Joi.string().min(10).max(200).required(),
        }).required(),
        profileImg: Joi.string().uri().optional(),
        isActive: Joi.string().valid('active', 'blocked').default('active'),
      });          

    const { student: studentData } = req.body;
   const {error, value} = studentValidationSchema.validate(studentData);
            if(error){
              res.status(500).json({
                success: false               ,
                message: 'something went wrong',
                error: error,
            })
  
  //  console.log(error, value)
    const result = await StudentServices.createStudentIntoDB(value);


    res.status(200).json({
      success: true,
      message: 'Student is create Successfully',
      data: result,
    });
  } }catch (error) {
    // const {message:string} =error;
    res.status(500).json({
      success: false               ,
      message: 'something went wrong',
      data: error,
    });
  }
}


const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'student are retirved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleData = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getSingleFromDB();

    res.status(200).json({
      success: true,
      message: 'one studetn data retirved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleData,
};