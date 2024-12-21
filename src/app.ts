/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import cors from 'cors';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

// "Not Found" Middleware (Handles unmatched routes)

const getController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', getController);
app.use('/api/v1');
app.use(globalErrorHandler as unknown as RequestHandler);

app.use(notFound as RequestHandler);
// global errohandler

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(globalErrorHandler as ErrorRequestHandler);

export default app;
