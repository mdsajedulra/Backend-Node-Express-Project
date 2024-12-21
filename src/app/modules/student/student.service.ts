import { Student } from './student.model';

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleFromDB = async () => {
  const result = await Student.findOne({ id: '12345' });
  return result;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleFromDB,
};
