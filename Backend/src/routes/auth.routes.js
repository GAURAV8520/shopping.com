import express from 'express'
import {  SiginUp ,getme,login, logout} from '../controllers/auth.controller.js';
import { protect } from '../middlewares/protect.js';


const router = express.Router();

router.get('/me',protect,getme)
router.post("/login",login);
router.post('/signup',SiginUp)
router.post('/logout',logout)



export default router;