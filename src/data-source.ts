// src/data-source.ts
import "reflect-metadata"; // Crucial for TypeORM entities/decorators
import { DataSource, DataSourceOptions } from "typeorm";
import * as path from "path";
import * as dotenv from "dotenv"; // If you're using .env files for config

dotenv.config(); // Load environment variables from .env

export const dataSourceOptions: DataSourceOptions = {
  type: (process.env.DB_TYPE || "sqlite") as any, // Cast to any because TypeORM types are strict
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USERNAME || "user",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "database.sqlite", // For sqlite, this is the file path

  // Point to your entities (compiled .js files in dist for build)
  entities: [path.join(__dirname, "/**/*.entity{.ts,.js}")],

  // Point to your migration files (compiled .js files in dist for build)
  migrations: [path.join(__dirname, "/database/migrations/*.{ts,.js}")],

  synchronize: false, // Ensure this is false here too!
  logging: true,
};

const AppDataSource = new DataSource(dataSourceOptions);

export default AppDataSource;
