Make sure you have Postgresql installed and is running.
<br>
Change connection string in `knexfile.js` to your Postgresql logins.
<br>
Create database `UsersLogin` in Postgresql and run migrations (running seeds is not necessary).
<br>
<br>
`npm install`
<br>
<br>
Run migrations:
<br>
`knex migrate:latest`
<br>
`knex migrate:rollback`
<br>
<br>
Run:
`nodemon` to start server on port 3000 or change it in `/bin/www`
<br>
<br>
Login page: `localhost:3000/users/login`
<br>
Register page: `localhost:3000/users/register`
<br>
Home/Index page: `localhost:3000/`
<br>
Admin page: `localhost:3000/admin`
