module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            database: 'ddd-node-crud',
            user: 'postgres',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};