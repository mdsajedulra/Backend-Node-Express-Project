/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { userService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
// import { StatusCodes } from 'http-status-codes';

const createStudent = catchAsync(async (req, res, next) => {
  const { password, studentData } = req.body;
  const result = await userService.createStudentIntoDB(password, studentData);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Student Create Succesfully',
    data: result,
  });
});

export const userController = {
  createStudent,
};
