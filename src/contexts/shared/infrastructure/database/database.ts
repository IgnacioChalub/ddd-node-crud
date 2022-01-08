import knex from "knex";
// @ts-ignore
import knexfile from "./knexfile";

const db = knex(knexfile.development);
module.exports = db;

// CREATE MIGRATION FILE: npx knex migrate:make init --migrations-directory src/contexts/shared/infrastructure/database/migrations
// MIGRATE: knex migrate:latest --knexfile src/contexts/shared/infrastructure/database/knexfile.ts
// knex migrate:down 001_migration_name.js
// knex migrate:down 001_migration_name.js