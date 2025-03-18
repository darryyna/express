const users = [
    { id: '1', name: 'Daryna', email: 'daryna@gmail.com', age: 19 },
    { id: '2', name: 'Nastia', email: 'nastia@gmail.com', age: 20 },
    { id: '3', name: 'Vitalina', email: 'vitalina@gmail.com', age: 20 }
];

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The user ID
 *         name:
 *           type: string
 *           description: The username
 *         email:
 *           type: string
 *           description: The user email
 *         age:
 *           type: number
 *           description: The user age
 *       example:
 *         id: '1'
 *         name: Daryna
 *         email: daryna@gmail.com
 *         age: 19
 */

/**
 * Get all users
 */
exports.getAll = () => {
    return users;
};

/**
 * Get user by ID
 */
exports.getById = (id) => {
    return users.find(user => user.id === id);
};