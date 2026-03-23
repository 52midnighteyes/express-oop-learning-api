import { Router } from "express";
import { th } from "zod/locales";
import { inputValidator } from "../../middlewares/zodValidator.middleware.js";
import { getAllMatchesSchema } from "./match.schema.js";
import { matchController } from "./match.controller.js";
// import { matchController } from "./match.controller.js";

class MatchRouter {
  private router: Router;
  constructor() {
    this.router = Router();
    this.initializeRouter();
  }
  private initializeRouter() {
    // this.router.post("/", matchController.createManyMatch);
    this.router.get(
      "/",
      inputValidator.schema(getAllMatchesSchema, "query"),
      matchController.getAllMatch,
    );
  }

  public getRouter() {
    return this.router;
  }
}

export const matchRouter = new MatchRouter().getRouter();
