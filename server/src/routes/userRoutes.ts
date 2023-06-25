import { Router } from 'express';
import controller from '../controllers/userController';
import middleware from '../middleware/authMiddleware';
const router = Router();

router.post('/register', controller.createUser);
router.get('/current', middleware.isAuthenticated, controller.getCurrentUser);

export { router as userRoutes };
