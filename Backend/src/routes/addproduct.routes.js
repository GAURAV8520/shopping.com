import express from 'express'
import { addjob } from '../controllers/job.controller.js';

import { ishiring } from '../middlewares/ishiring.js';


const router = express.Router();


router.post('/job',ishiring,addjob);


export default router;

