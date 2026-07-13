import pool from "./database.js";
import logger from "./logger.js";

const connectDB = async () => {
    try {
        const connection = await pool.getConnection();

        logger.info("MySQL Connected");

        connection.release();
    } catch (error) {
        logger.error(error);

        process.exit(1);
    }
};

export default connectDB;