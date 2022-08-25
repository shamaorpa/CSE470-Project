import express from 'express';
const router = express.Router();
import { protect } from '../middleware/auth.js';

import {
  signup,
  login,
  auth,
} from '../controllers/userCtrl.js';

router.route('/signup').post(signup);

router.route('/login').post(login);

router.route('/auth').get(protect,auth);
export default router;
