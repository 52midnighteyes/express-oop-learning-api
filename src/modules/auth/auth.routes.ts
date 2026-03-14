import { Router } from "express";
import { authController } from "./auth.controller.js";
import { inputValidator } from "../../middlewares/zodValidator.middleware.js";
import { loginSchema, registerSchema } from "./auth.schema.js";

class AuthRouter {
  private router: Router;
  constructor() {
    this.router = Router();
    this.initializeRouter();
  }

  private initializeRouter() {
    this.router.post(
      "/register",
      inputValidator.schema(registerSchema, "body"),
      authController.register,
    );

    this.router.post(
      "/login",
      inputValidator.schema(loginSchema, "body"),
      authController.login,
    );
  }

  public getRouter() {
    return this.router;
  }
}

export const authRoutes = new AuthRouter().getRouter();
