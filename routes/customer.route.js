const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customer.controller");

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Mijozlar bilan ishlash
 */

/**
 * @swagger
 * /api/customer:
 *   post:
 *     tags: [Customer]
 *     summary: Yangi mijoz yaratish
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
 *                 format: email
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Mijoz yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */
router.post("/customer", customerController.createCustomer);

/**
 * @swagger
 * /api/customer:
 *   get:
 *     tags: [Customer]
 *     summary: Barcha mijozlarni olish
 *     responses:
 *       200:
 *         description: Mijozlar ro'yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/customer", customerController.getCustomers);

/**
 * @swagger
 * /api/customer/search:
 *   get:
 *     tags: [Customer]
 *     summary: Mijozni ism, email yoki telefon orqali qidirish
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Ism, email yoki telefon raqam orqali qidiruv
 *     responses:
 *       200:
 *         description: Mos keluvchi mijozlar ro'yxati
 *       400:
 *         description: Qidiruv so'rovi kiritilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/customer/search", customerController.searchCustomer);

/**
 * @swagger
 * /api/customer/{id}:
 *   get:
 *     tags: [Customer]
 *     summary: ID orqali mijozni olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Mijoz ID raqami
 *     responses:
 *       200:
 *         description: Mijoz topildi
 *       404:
 *         description: Mijoz topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/customer/:id", customerController.getCustomerById);

/**
 * @swagger
 * /api/customer/{id}:
 *   put:
 *     tags: [Customer]
 *     summary: Mijoz ma'lumotlarini yangilash
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
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Mijoz yangilandi
 *       400:
 *         description: Xato ma'lumot
 *       404:
 *         description: Mijoz topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/customer/:id", customerController.updateCustomer);

/**
 * @swagger
 * /api/customer/{id}:
 *   delete:
 *     tags: [Customer]
 *     summary: ID orqali mijozni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Mijoz o'chirildi
 *       404:
 *         description: Mijoz topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/customer/:id", customerController.deleteCustomer);

module.exports = router;
