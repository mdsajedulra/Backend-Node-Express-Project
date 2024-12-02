// import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherContactNo: string;
  motherOccupation: string;
};
export type localGuardian = {
  name: string;
  ocupation: string;
  contactNo: string;
  address: string;
};
export type UserName = {
  firstname: string;
  middleName: string;
  lastName: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | ' B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  guardian: Guardian;
  localGuardian: localGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
