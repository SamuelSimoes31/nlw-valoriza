import { Router } from "express";
import {CreateUserController} from "./controllers/CreateUserController"
import {CreateTagController} from "./controllers/CreateTagController"
import { CreateComplimentController } from './controllers/CreateComplimentController';

import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticatedUserController } from './controllers/AuthenticateUserController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticatedUserController = new AuthenticatedUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users",createUserController.handle);
router.post("/tags",ensureAdmin, createTagController.handle);
router.post("/login", authenticatedUserController.handle);
router.post("/compliments", createComplimentController.handle);

export {router}