
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  // return knex("Users")
  // .del()
  //   .then(async () => {
      // Inserts seed entries
      return knex("Users").insert([
        { username: "admin", password: "admin", email: "yaseendavids477@gmail.com" },
      ]);
    // });
};