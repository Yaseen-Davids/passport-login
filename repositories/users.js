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
  CreateUser: function(person){
    try {
      bcrypt.genSalt(10, function(err, salt){
        if (err){
          console.log(err);
          return;
        }
        bcrypt.hash(person.password, salt, async function(err, hash){
          if (err){
            console.log(err);
            return;
          }
          try {
            await knex("Users").insert({
              username: person.username,
              email: person.email,
              password: hash,
            });
          }
          catch (e){
            console.log(e);
            return;
          }
        });
      })
    }
    catch (e) {
      console.log(e);
      return;
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