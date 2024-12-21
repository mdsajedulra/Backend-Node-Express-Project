import { NextFunction, Request, Response } from 'express';
import { userService } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, studentData } = req.body;
    const result = await userService.createStudentIntoDB(password, studentData);
    console.log(result);
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createStudent,
};
