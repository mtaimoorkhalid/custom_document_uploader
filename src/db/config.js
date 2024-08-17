import { Sequelize } from "sequelize";
import "dotenv/config";
const env = process.env;
const sequelize = new Sequelize(env.DB_NAME, env.USER_NAME, env.PASSWORD, {
  host: env.HOST,
  dialect: env.DIALECT,
});
export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection with database has been established successfully!!!!"
    );
  } catch (error) {
    console.error("SOMETHING WENT WRONG CONNECTING THE DATABASE: ", error);
  }
};

export default sequelize;
