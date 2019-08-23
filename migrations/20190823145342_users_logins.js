exports.up = (knex) => {
  return knex.schema
    .createTable("Users", (table) => {
      table.increments("id").primary();
      table.string("username").unique().notNullable();
      table.string("email").unique().notNullable();
      table.string("password").notNullable();
    })
};

exports.down = (knex) => {
  // return knex.schema
  //   .dropTable("Users");
};
