import { Router } from "express";
import {newUser,updateUser} from '../controllers/User.controllers.js'

const route=Router();

route.post('/new', newUser);
route.patch('/update/:id',updateUser);


export default route;