# boolean-uk-api-read-with-prisma
Description
Build the the getAll and getOneById controllers and practice writing queries to get all kinds of data from the database.

Instructions
- Using the documentation: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-postgres
- Replace the DATABASE_URL and add the SHADOW_DATABASE_URL environment variable with the your database URL found:
    -- in ElephantSQL
    -- in the details section.
- Add shadowDatabaseUrl to your schema.prisma


- Build the getAll and getOneById controllers for each resource
- Build these routes and controllers for the books resource that work with the following fetch requests:
    -- /books/fiction that returns fiction books
    -- /books/fiction?topic=a-topic that returns a specific topic of fiction books
    -- /books/non-fiction that return non-fiction books
    -- /books/non-fiction?topic=a-topic that returns a specific topic of non-fiction books
    -- /books/author/name-of-author?order=recent that returns a specific authors' books ordered by publicationDate with the most recent first (use ORDER BY in your SQL query)

Build these routes and controllers for the pets resource that work with the following fetch requests:
    -- /pets/types that returns a list of pet types in the database
    -- /pets/types/a-pet-type that returns pets of a specific type ie. dog
    -- /pets/types/a-pet-type?breed=a-breed that returns pets of a specific type and breed
    -- /pets/types/a-pet-type?microchip=false that returns pets of a specific type without a microchip
    -- /pets/types/a-pet-type?microchip=false&breed=a-breed that returns pets of a specific type and breed without a microchip
    -- /pets?microchip=false that returns all pets without a microchip
Tips
- Use the Prisma documentation coupled with Support to guide you
- Practice Prisma! Do as much of the sorting and filtering as possible in Prisma rather than js array methods

Challenge 1
Create other routes that you think might be useful.
