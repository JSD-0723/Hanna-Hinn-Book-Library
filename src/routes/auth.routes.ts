import express, { Express } from "express";

import { authenticateJWT } from "../middlewares/authentication";
import { postRegister, postLogin, getProtected } from "../controllers/auth";
import {
  registerValidations,
  loginValidations,
} from "../middlewares/userValidation";

const router: Express = express.Router();

router.post("/register", registerValidations, postRegister);

router.post("/login", loginValidations, postLogin);

router.get("/protected", authenticateJWT, getProtected);

export default router;
