import express, { Express } from "express";
import passport from "passport";

import { postRegister, postLogin, getProtected } from "../controllers/auth";
import {
  registerValidations,
  loginValidations,
} from "../middlewares/userValidation";

const router: Express = express.Router();

// Authentication Routes

router.post("/register", registerValidations, postRegister);

router.post("/login", loginValidations, postLogin);

router.get("/protected", passport.authenticate("jwt", { session: false }), getProtected);

export default router;
