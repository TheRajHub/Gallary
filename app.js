import express from 'express';
import cors from 'cors';
import UserRoutes from './routes/User.routes.js'
import PictureRoutes from './routes/Picture.routes.js'
import multer from 'multer';

const app=express();
const storage = multer.memoryStorage(); // Store file in memory (change as needed)
const upload = multer({ storage });

//common middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/rajApi/User',UserRoutes)
app.use('/rajApi/Picture',upload.single("picture"),PictureRoutes)


export {app};