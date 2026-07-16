import bcrypt from "bcrypt";
import env from "../config/env.js";

const hashPassword = async (password) => {
  return bcrypt.hash(password, env.bcrypt.saltRounds);
};

const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

export default {
  hashPassword,
  comparePassword,
};