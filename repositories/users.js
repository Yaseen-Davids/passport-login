const knex = require("../knex");

module.exports = {
  GetUser: async (username) => {
    try {
      return knex("Users").select({
        username: "username",
        password: "password"
      }).where("username", username);
    }
    catch (e) {
      return e;
    }
  }
}