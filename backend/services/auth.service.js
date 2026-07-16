import crypto from "crypto";
import bcrypt from "bcrypt";

import pool from "../config/database.js";
import env from "../config/env.js";

import authRepository from "../repositories/auth.repository.js";

import ApiError from "../utils/ApiError.js";

import HTTP_STATUS from "../constants/httpStatus.js";

class AuthService {
  async register(payload) {
    const connection = await pool.getConnection();

    try {
      // Start Transaction
      await connection.beginTransaction();

      const {
        firstName,
        lastName,
        email,
        password,
        phone,
      } = payload;

      // Check duplicate email
      const existingUser = await authRepository.findUserByEmail(email);

      if (existingUser) {
        throw new ApiError(
          HTTP_STATUS.CONFLICT,
          "Email already exists."
        );
      }

      // Get Student role
      const role = await authRepository.findRoleByName(
        "Student",
        connection
      );

      if (!role) {
        throw new ApiError(
          HTTP_STATUS.NOT_FOUND,
          "Default role not found."
        );
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(
        password,
        env.bcrypt.saltRounds
      );

      // Generate UUID
      const userId = crypto.randomUUID();

      // Create user
      await authRepository.createUser(
        {
          id: userId,
          firstName,
          lastName,
          email,
          password: hashedPassword,
          phone,
          status: "ACTIVE",
          isVerified: 0,
        },
        connection
      );

      // Assign role
      await authRepository.assignRole(
        userId,
        role.id,
        connection
      );

      await connection.commit();

      return {
        id: userId,
        firstName,
        lastName,
        email,
        phone,
        role: role.name,
      };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }
}

export default new AuthService();