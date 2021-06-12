## Scripts

### Express

`start`: Starts a development server.

### Prisma

`prisma:studio`: Starts a visual editor for the data in your database.

`prisma:migrate:dev`: Updates your database using migrations during development and creates the database if it does not exist.

`prisma:migrate:reset`: Deletes and recreates the database, or performs a 'soft reset' by removing all data, tables, indexes, and other artifacts.

`prisma:db:push`: Pushes the state of your Prisma schema file to the database without using migrations. It creates the database if the database does not exist.

`prisma:db:seed`: Runs `seed.js` file that is inside prisma folder.
