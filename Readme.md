# Garden Store Node Application

## Cloning the file
- run `npm install`
- make an .env file that has these values:
    
    **PORT** = 3000
    
    **PGUSER** = postgres

    **PGPASSWORD** = actual postgres password

    **PGDATABASE** = gardenapp

    **JWT_SECRET** = bananasorwhateveryouwant

- create a database in your **pgadmin** called gardenapp
- run `npm i -g sequelize-cli` in your terminal
- run `sequelize db:seeder:all` in your terminal
- run `npm run dev` to start the server