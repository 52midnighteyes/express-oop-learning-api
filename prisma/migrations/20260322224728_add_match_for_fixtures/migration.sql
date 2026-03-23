-- CreateEnum
CREATE TYPE "matchStatus" AS ENUM ('SCHEDULED', 'ONGOING', 'COMPLETED', 'POSTPONED', 'CANCELED');

-- CreateEnum
CREATE TYPE "MatchType" AS ENUM ('HOME', 'AWAY');

-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "opponent" TEXT NOT NULL,
    "match_date" TIMESTAMP(3) NOT NULL,
    "match_type" "MatchType" NOT NULL,
    "status" "matchStatus" NOT NULL,
    "opponent_logo" TEXT NOT NULL,
    "opponent_logo_public_id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "opponent_score" INTEGER,
    "team_score" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);
