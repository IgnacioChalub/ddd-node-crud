exports.up = function(knex) {
    return knex.schema
        .createTable('account', (table) => {
            table.string('id').notNullable().primary();
            table.string('username').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.string('firstName').notNullable();
            table.string('lastName').notNullable();
            table.timestamp('birthday');
            table.boolean('active').notNullable();
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable('account');
};

