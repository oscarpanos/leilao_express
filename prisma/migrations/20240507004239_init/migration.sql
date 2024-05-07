-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "origin_id" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "evaluation_price" DECIMAL(10,2) NOT NULL,
    "discount" DECIMAL(10,2) NOT NULL,
    "description" TEXT NOT NULL,
    "modality" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Property_origin_id_key" ON "Property"("origin_id");
