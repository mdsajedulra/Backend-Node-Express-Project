import Joi from 'joi';

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
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required(),
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
export default studentValidationSchema;
