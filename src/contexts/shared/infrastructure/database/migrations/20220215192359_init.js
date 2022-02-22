exports.up = function(knex) {
    return knex.schema
        .createTable('group', (table) => {
            table.string('id').notNullable().primary();
            table.string('name').notNullable();
            table.string('description').notNullable();
            table.string('ownerId').notNullable();
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
        }).createTable('link', (table) => {
            table.string('id').notNullable().primary();
            table.string('title').notNullable();
            table.string('description').notNullable();
            table.string('url').notNullable();
            table.string('groupId').notNullable();
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
        }).createTable('group-account', (table) => {
            table.increments('id');
            table.string('accountId').notNullable();
            table.string('groupId').notNullable();
            table.boolean('editor').notNullable();
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
        });
};

exports.down = function(knex) {
    knex.schema.dropTable('group');
    knex.schema.dropTable('link');
    knex.schema.dropTable('group-account');
};

