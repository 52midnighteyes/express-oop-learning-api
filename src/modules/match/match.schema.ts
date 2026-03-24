import * as z from "zod";
import { matchTypes } from "../../enum/matchType.enum.js";
import { matchStatuses } from "../../enum/matchStatus.enum.js";

export const getAllMatchesSchema = z.object({
  search: z.string().trim().optional(),
  matchType: z.enum(matchTypes).optional(),
  status: z.enum(matchStatuses).optional(),
  season: z.string().trim().default("2025/2026"),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(10),
  sortBy: z.enum(["createdAt", "matchDate"]).default("matchDate"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});
