import { matchStatus } from "../../generated/prisma/enums.js";

export const matchStatuses: matchStatus[] = [
  "SCHEDULED",
  "ONGOING",
  "COMPLETED",
  "CANCELED",
  "POSTPONED",
];
