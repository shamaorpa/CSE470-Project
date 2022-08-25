import express from 'express';
const router = express.Router();
import { protect } from '../middleware/auth.js';

import {
  createOfflineEvent ,
} from '../controllers/offlineCtrl.js';

router.route('/createOfflineEvent').post(protect, createOfflineEvent );

export default router;
