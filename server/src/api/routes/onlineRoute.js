import express from 'express';
const router = express.Router();
import { protect } from '../middleware/auth.js';

import {
  createOnlineEvent,
} from '../controllers/onlineCtrl.js';

router.route('/createOnlineEvent').post(protect, createOnlineEvent );

export default router;
