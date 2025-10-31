import { Sequelize } from "sequelize";
import path from "path";
import UserModel from "./user/user.model";

const env = process.env.NODE_ENV || "development";

interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: any;
}

const configPath = path.resolve(__dirname, "../../config/config.json");
const configs = require(configPath);
const config: DBConfig = configs[env];

// Simple Sequelize connection
export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// Initialize models
UserModel(sequelize);

// Test connection
export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;