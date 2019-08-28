const knex = require("../knex");
const bcrypt = require('bcryptjs');

module.exports = {
  GetUsers: async () => {
    try {
      const users = await knex("Users").select({
        id: "id",
        username: "username",
        email: "email"
      });
      return users;
    }
    catch (e) {
      return e;
    }
  },
  GetUserByUsername: async (username) => {
    try {
      const user = await knex("Users").first("*").where("username", username);
      return user;
    }
    catch (e) {
      return e;
    }
  },
  UserById : async (id) => {
    try {
      const user = await knex("Users").first("*").where("id", id);
      return user;
    }
    catch (e) {
      return e;
    }
  },
  CreateUser: (person) => {
    try {
      bcrypt.genSalt(10, (err, salt) => {
        if (err){
          return err;
        }
        bcrypt.hash(person.password, salt, async (err, hash) => {
          if (err){
            return err;
          }
          try {
            await knex("Users").insert({
              username: person.username,
              email: person.email,
              password: hash,
            });
          }
          catch (e){
            return e;
          }
        });
      })
    }
    catch (e) {
      return e;
    }
  },
  DeleteUser: async (id) => {
    try {
      return await knex("Users").select("*").where("id", id).del();
    }
    catch (e) {
      return e;
    }
  },
}