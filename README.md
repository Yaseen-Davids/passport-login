# Passport Login with Postgresql and Node.js
Make sure you have Postgresql installed and is running.

Change connection string in `knexfile.js` to your Postgresql logins.

Create database `UsersLogin` (can be changed to whatever you want but then you will need to change `db` to point to your database in `knexfile.js`) in Postgresql and run migrations (running seeds is not necessary).


### Install dependencies:

```
npm install
```

### Run migrations:

```
knex migrate:latest
knex migrate:rollback
```


### Run:
```
nodemon
```
to start server on port 3000 or change it in `/bin/www`



Login page: `http://localhost:3000/users/login`

Register page: `http://localhost:3000/users/register`

Home/Index page: `http://localhost:3000/`

Admin page: `http://localhost:3000/admin`
