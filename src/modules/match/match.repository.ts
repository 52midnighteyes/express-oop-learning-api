import type { Prisma } from "../../../generated/prisma/client.js";
import type { IMatch } from "../../data/matchData.data.js";
import { prisma as db } from "../../libs/prisma/prisma.lib.js";
import type { TPrisma } from "../../libs/prisma/prisma.types.js";
import type { IGetAllMatchesQueryDbParams } from "./match.interface.js";

class MatchRepository {
  prisma: TPrisma;
  constructor() {
    this.prisma = db;
  }
  //createmanymatch is a development function to create match data in bulk, will be removed after use
  public createManyMatch = async (params: IMatch[]) => {
    try {
      const data = await this.prisma.match.createMany({
        data: params,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  public getAllMatch = async (params: IGetAllMatchesQueryDbParams) => {
    return await this.prisma.match.findMany({
      ...params,
    });
  };

  public countMatches = async (where: Prisma.MatchWhereInput) => {
    return await this.prisma.match.count({
      where,
    });
  };
}

export const matchRepo = new MatchRepository();
