import { Router } from 'express';
import controller from '../controllers/userController';
const router = Router();

router.post('/register', controller.register);

export { router as userRoutes };
