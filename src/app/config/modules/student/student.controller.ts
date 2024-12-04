import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.joi';

const createStudent = async (req: Request, res: Response) => {
  try {
    // Joi schema

    const { student: studentData } = req.body;
    const { error, value } = studentValidationSchema.validate(studentData);
    if (error) {
      res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: error,
      });

      //  console.log(error, value)
      const result = await StudentServices.createStudentIntoDB(value);

      res.status(200).json({
        success: true,
        message: 'Student is create Successfully',
        data: result,
      });
    }
  } catch (error) {
    // const {message:string} =error;
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: error,
    });
  }
};

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
