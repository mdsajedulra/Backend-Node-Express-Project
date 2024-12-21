/* eslint-disable no-unused-vars */
import express, {
  Application,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import cors from 'cors';
// import { StudentRoutes } from './app/config/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';

import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorhandler';

const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes

// "Not Found" Middleware (Handles unmatched routes)

app.use(notFound as RequestHandler);

const getController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', getController);
app.use(globalErrorHandler as RequestHandler);

export default app;
