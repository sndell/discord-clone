import { Router } from 'express';
import controller from '../controllers/authController';
import middleware from '../middleware/authMiddleware';
const router = Router();

router.post('/login', controller.login);
router.post(
  '/logout',
  middleware.isAuthenticated,
  middleware.isValidRefreshToken,
  controller.logout
);
router.post(
  '/refresh-token',
  middleware.isValidRefreshToken,
  controller.refreshToken
);
router.post('/verify-email/:verificationToken', controller.verifyEmail);

export { router as authRoutes };
