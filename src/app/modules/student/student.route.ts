import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// router.post('/create-student', StudentControllers.createStudent);

router.get('/getstudent', StudentControllers.getAllStudents);
router.get('/single-student', StudentControllers.getSingleData);

export const StudentRoutes = router;
