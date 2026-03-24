import type { Request, Response, NextFunction } from "express";
import { persijaMatches } from "../../data/matchData.data.js";
import { matchService } from "./match.service.js";
import type { IGetAllMatchesQuery } from "./match.interface.js";

export class MatchController {
  //     //its a controller for creating match data in bulk, will be removed after use
  //   public createManyMatch = async (
  //     _req: Request,
  //     res: Response,
  //     next: NextFunction,
  //   ) => {
  //     try {
  //       const payload = persijaMatches;
  //       const data = await matchService.CreateManyMatch(payload);
  //       res
  //         .status(201)
  //         .json({ message: "Match data created successfully", data });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  public getAllMatch = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const payload = req.validated!.query as IGetAllMatchesQuery;
      console.log("Payload:", payload);
      const data = await matchService.getAllMatch(payload);
      res.status(200).json({ message: "Matches retrieved successfully", data });
    } catch (error) {
      next(error);
    }
  };
}

export const matchController = new MatchController();
