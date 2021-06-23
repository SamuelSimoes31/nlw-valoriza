import { Router } from "express";
import {CreateUserController} from "./controllers/CreateUserController"

const router = Router();

const createUseController = new CreateUserController();

router.post("/users",createUseController.handle);

export {router}