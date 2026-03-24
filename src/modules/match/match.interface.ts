import type { Prisma } from "../../../generated/prisma/client.js";
import { MatchType, matchStatus } from "../../../generated/prisma/enums.js";

export interface IGetAllMatchesQuery {
  search?: string;
  matchType?: MatchType;
  status?: matchStatus;
  season?: string;
  page: number;
  limit: number;
  sortBy: "date" | "season";
  sortOrder: "asc" | "desc";
}

export interface IGetAllMatchesQueryDbParams {
  where?: Prisma.MatchWhereInput;
  skip?: number;
  take?: number;
  orderBy?: Prisma.MatchOrderByWithRelationInput;
}
