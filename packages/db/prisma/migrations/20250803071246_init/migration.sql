-- CreateEnum
CREATE TYPE "ZapRunOutboxStatus" AS ENUM ('PENDING', 'PROCESSED_OVER_KAFKA');

-- AlterTable
ALTER TABLE "ZapRunOutbox" ADD COLUMN     "status" "ZapRunOutboxStatus" NOT NULL DEFAULT 'PENDING';
