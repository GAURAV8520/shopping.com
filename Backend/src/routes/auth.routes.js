import express from 'express'
import {  SiginUp } from '../controllers/auth.controller.js';


const router = express.Router();


//router.post("/login",login);

router.post('/signup',SiginUp)


export default router;