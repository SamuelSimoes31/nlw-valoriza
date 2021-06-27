import { Router } from "express";
import {CreateUserController} from "./controllers/CreateUserController"
import {CreateTagController} from "./controllers/CreateTagController"
import { CreateComplimentController } from './controllers/CreateComplimentController';

import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { AuthenticatedUserController } from './controllers/AuthenticateUserController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserSentComplimentsController } from './controllers/ListUserSentComplimentsController';
import { ListUserReceivedComplimentsController } from './controllers/ListUserReceivedComplimentsController';
import { ListUsersController } from './controllers/ListUsersController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticatedUserController = new AuthenticatedUserController();
const createComplimentController = new CreateComplimentController();
const listUserSentComplimentsController = new ListUserSentComplimentsController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/users",createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticatedUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/users/compliments/sent", ensureAuthenticated,
    listUserSentComplimentsController.handle);
router.get("/users/compliments/received", ensureAuthenticated,
    listUserReceivedComplimentsController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);

export {router}