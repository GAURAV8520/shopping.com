
import express from 'express'
import authRoutes from './routes/auth.routes.js'

const app = express();

app.use(express.json({limit:'5mb'}));  //to parse req.body
app.use(express.urlencoded({extended:true}));

app.use('/api/auth',authRoutes)


app.get('/',(req,res)=>res.send("APi running at port 800"))

export {app};