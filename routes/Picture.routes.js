import { Router } from "express";
import {uplodePic} from '../controllers/Picture.controllers.js'

const route=Router();

route.post('/upload/:id', uplodePic);



export default route;