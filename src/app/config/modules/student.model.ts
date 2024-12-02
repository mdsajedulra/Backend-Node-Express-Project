import { model, Schema } from 'mongoose';


import {
  Guardian,
  localGuardian,
  Student,
  UserName,
} from './student/student.interface';



// UserName Schema with validations
const userNameSchema = new Schema<UserName>({
  firstname: {
    type: String,
    required: [true, 'First name is required'], // Custom message
    // minlength: [2, 'First name should be at least 2 characters long'],
    // maxlength: [50, 'First name should not exceed 50 characters'],
  },
  middleName: {
    type: String,
    // maxlength: [50, 'Middle name should not exceed 50 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'], // Custom message
    // minlength: [2, 'Last name should be at least 2 characters long'],
    // maxlength: [50, 'Last name should not exceed 50 characters'],
  },
});

// Guardian Schema with validations
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
    // minlength: [2, 'Father name should be at least 2 characters long'],
    // maxlength: [50, 'Father name should not exceed 50 characters'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father contact number is required'],
    // match: [/^\+?\d{10,15}$/, 'Please provide a valid contact number'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother contact number is required'],
    // match: [/^\+?\d{10,15}$/, 'Please provide a valid contact number'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
    // minlength: [3, 'Mother occupation should be at least 3 characters long'],
    // maxlength: [100, 'Mother occupation should not exceed 100 characters'],
  },
});

// Local Guardian Schema with validations
const localGuardianSchema = new Schema<localGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required'],
    // minlength: [2, 'Local guardian name should be at least 2 characters long'],
    // maxlength: [50, 'Local guardian name should not exceed 50 characters'],
  },
  ocupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
    // minlength: [3, 'Local guardian occupation should be at least 3 characters long'],
    // maxlength: [100, 'Local guardian occupation should not exceed 100 characters'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number is required'],
    // match: [/^\+?\d{10,15}$/, 'Please provide a valid contact number'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
    // minlength: [10, 'Local guardian address should be at least 10 characters long'],
    // maxlength: [200, 'Local guardian address should not exceed 200 characters'],
  },
});

// Student Schema with validations
const studentSchema = new Schema<Student>({
  id: { 
    type: String, 
    required: [true, 'Student ID is required'],
    // unique: true, // Ensure that the ID is unique
    // minlength: [5, 'Student ID should be at least 5 characters long'],
    // maxlength: [20, 'Student ID should not exceed 20 characters'],
  },
  name: userNameSchema,
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: 'Gender must be either "male" or "female"',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { 
    type: String,
   


    // match: [/^\d{4}-\d{2}-\d{2}$/, 'Please provide a valid date of birth (YYYY-MM-DD)'],
  },
  email: { 
    type: String,
    required: [true, 'Email is required'],
    
  },
  contactNo: { 
    type: String,
    required: [true, 'Contact number is required'],
  
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: 'Blood group must be one of the following: A+, A-, B+, B-, AB+, AB-, O+, O-',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
    // minlength: [10, 'Present address should be at least 10 characters long'],
    // maxlength: [200, 'Present address should not exceed 200 characters'],
  },
  parmanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
    // minlength: [10, 'Permanent address should be at least 10 characters long'],
    // maxlength: [200, 'Permanent address should not exceed 200 characters'],
  },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: {
    type: String,
    // match: [/^https?:\/\/.+\.(jpg|jpeg|png|gif|bmp|webp)$/i, 'Please provide a valid image URL'],
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: 'Status must be either "active" or "blocked"',
    },
    default: 'active',
  },
});


// Create Model
export const StudentModel = model<Student>('Student', studentSchema);
