import type { Prisma } from "../../../generated/prisma/client.js";
import type { IMatch } from "../../data/matchData.data.js";
import type { IGetAllMatchesQuery } from "./match.interface.js";
import { matchRepo } from "./match.repository.js";

class MatchService {
  //   //its a service for creating match data in bulk, will be removed after use
  //   public CreateManyMatch = async (params: IMatch[]) => {
  //     try {
  //       const data = await matchRepo.createManyMatch(params);
  //       return data;
  //     } catch (error) {
  //       throw error;
  //     }
  //   };

  public getAllMatch = async (params: IGetAllMatchesQuery) => {
    try {
      const {
        search,
        matchType,
        status,
        season,
        page,
        limit,
        sortBy,
        sortOrder,
      } = params;
      const skip = (page - 1) * limit;
      const where: Prisma.MatchWhereInput = {
        ...(season && { season }),
        ...(matchType && { matchType }),
        ...(status && { status }),
        ...(search && {
          OR: [
            { opponent: { contains: search, mode: "insensitive" as const } },
            { location: { contains: search, mode: "insensitive" as const } },
          ],
        }),
      };

      const orderBy: Prisma.MatchOrderByWithRelationInput = {
        [sortBy]: sortOrder,
      };

      const filter = {
        where,
        skip,
        take: limit,
        orderBy,
      };

      const [data, count] = await Promise.all([
        matchRepo.getAllMatch(filter),
        matchRepo.countMatches(where),
      ]);

      const totalPages = Math.ceil(count / limit);

      const meta = {
        totalItems: count,
        totalPages,
        currentPage: page,
        itemsPerPage: limit,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      };

      return { data, meta };
    } catch (error) {
      console.error("error occurred while fetching all matches:", error);
      throw error;
    }
  };
}

export const matchService = new MatchService();
