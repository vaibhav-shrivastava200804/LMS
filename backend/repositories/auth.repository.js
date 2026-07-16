import pool from "../config/database.js";

class AuthRepository {
  /**
   * Find user by email
   * @param {string} email
   * @returns {Promise<Object|null>}
   */

  async findUserByEmail(email) {
    const sql = `
      SELECT
        id,
        first_name,
        last_name,
        email,
        password,
        phone,
        status,
        is_verified,
        created_at,
        updated_at,
        deleted_at
      FROM users
      WHERE email = ?
        AND deleted_at IS NULL
      LIMIT 1
    `;

    const [rows] = await pool.execute(sql, [email]);
    return rows.length ? rows[0] : null;
  }
  /**
   * Find role by name
   * @param {string} roleName
   * @param {object} connection
   * @returns {Promise<Object|null>}
   */

  async findRoleByName(roleName, connection) {
    const sql = `
      SELECT
        id,
        name
      FROM roles
      WHERE name = ?
      LIMIT 1
    `;

    const [rows] = await connection.execute(sql, [roleName]);

    return rows.length ? rows[0] : null;
  }

  /**
   * Create user
   * @param {object} user
   * @param {object} connection
   * @returns {Promise<void>}
   */

  async createUser(user, connection) {
    const sql = `
      INSERT INTO users
      (
        id,
        first_name,
        last_name,
        email,
        password,
        phone,
        status,
        is_verified
      )
      VALUES
      (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await connection.execute(sql, [
      user.id,
      user.firstName,
      user.lastName,
      user.email,
      user.password,
      user.phone,
      user.status,
      user.isVerified,
    ]);
  }

  /**
   * Assign role to user
   * @param {string} userId
   * @param {number} roleId
   * @param {object} connection
   * @returns {Promise<void>}
   */
  async assignRole(userId, roleId, connection) {
    const sql = `
      INSERT INTO user_roles
      (
        user_id,
        role_id
      )
      VALUES
      (?, ?)
    `;

    await connection.execute(sql, [
      userId,
      roleId,
    ]);
  }

  /**
   * Get MySQL connection
   * @returns {Promise<object>}
   */
  async getConnection() {
    return await pool.getConnection();
  }
}
export default new AuthRepository();