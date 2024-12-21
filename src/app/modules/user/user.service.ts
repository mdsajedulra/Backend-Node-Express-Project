import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const uesrData: Partial<TUser> = {};

  uesrData.password = password || process.env.DEFAULT_PASSWORD;
  uesrData.role = 'student';
  uesrData.id = '1526515';

  const newUser = await User.create(uesrData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const userService = {
  createStudentIntoDB,
};
