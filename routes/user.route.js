const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Foydalanuvchilar bilan ishlash
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags: [User]
 *     summary: Yangi foydalanuvchi yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 formt: email
 *               password:
 *                 type: string
 *               customer_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Foydalanuvchi yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server error
 */
router.post("/users", userController.createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags: [User]
 *     summary: Barcha foydalanuvchilarni olish
 *     responses:
 *       200:
 *         description: Foydalanuvchilar ro'yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/users", userController.getUsers);

/**
 * @swagger
 * /api/users/search:
 *   get:
 *     tags: [User]
 *     summary: Foydalanuvchini ism yoki email orqali qidirish
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Ism yoki email orqali qidiruv
 *     responses:
 *       200:
 *         description: Mos keluvchi foydalanuvchilar
 *       400:
 *         description: Qidiruv so'rovi kiritilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/users/search", userController.searchUser);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags: [User]
 *     summary: ID orqali foydalanuvchini olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Foydalanuvchi ID raqami
 *     responses:
 *       200:
 *         description: Foydalanuvchi topildi
 *       404:
 *         description: Foydalanuvchi topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/users/:id", userController.getUserById);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     tags: [User]
 *     summary: Foydalanuvchini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Foydalanuvchi yangilandi
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/users/:id", userController.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags: [User]
 *     summary: ID orqali foydalanuvchini o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Foydalanuvchi o'chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
