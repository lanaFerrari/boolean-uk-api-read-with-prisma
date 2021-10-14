-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" VARCHAR(20) NOT NULL,
    "author" VARCHAR(100) NOT NULL,
    "topic" VARCHAR(25) NOT NULL,
    "publicationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(35) NOT NULL,
    "age" DECIMAL(65,30) NOT NULL,
    "type" VARCHAR(35) NOT NULL,
    "breed" VARCHAR(35) NOT NULL,
    "microchip" BOOLEAN NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);
