const express = require("express");
const router = express.Router();

const carController = require("../controllers/car.controller");

/**
 * @swagger
 * tags:
 *   name: Car
 *   description: Avtomobillar bilan ishlash
 */

/**
 * @swagger
 * /api/car:
 *   post:
 *     tags: [Car]
 *     summary: Yangi mashina yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               model:
 *                 type: string
 *               description:
 *                 type: string
 *               color:
 *                 type: string
 *               horsePower:
 *                 type: number
 *               carType:
 *                 type: string
 *               charging:
 *                 type: string
 *               weight:
 *                 type: string
 *               gasoline:
 *                 type: string
 *               yearMachine:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Mashina yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */
router.post("/", carController.createCar);

/**
 * @swagger
 * /api/car:
 *   get:
 *     tags: [Car]
 *     summary: Barcha mashinalarni olish
 *     responses:
 *       200:
 *         description: Mashinalar ro'yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/", carController.getCars);

/**
 * @swagger
 * /api/car/search:
 *   get:
 *     tags: [Car]
 *     summary: Mashina qidirish (title, model, color, gasoline...)
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Mashina malumotlarini qidirish uchun matn
 *     responses:
 *       200:
 *         description: Qidiruv natijalari
 *       400:
 *         description: Qidiruv so'rovi berilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/search", carController.searchCar);

/**
 * @swagger
 * /api/car/{id}:
 *   get:
 *     tags: [Car]
 *     summary: ID orqali mashina olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Mashina ID raqami
 *     responses:
 *       200:
 *         description: Mashina topildi
 *       404:
 *         description: Mashina topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/:id", carController.getCarById);

/**
 * @swagger
 * /api/car/{id}:
 *   put:
 *     tags: [Car]
 *     summary: Mashina ma'lumotlarini yangilash
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
 *               title:
 *                 type: string
 *               model:
 *                 type: string
 *               description:
 *                 type: string
 *               color:
 *                 type: string
 *               horsePower:
 *                 type: number
 *               carType:
 *                 type: string
 *               charging:
 *                 type: string
 *               weight:
 *                 type: string
 *               gasoline:
 *                 type: string
 *               yearMachine:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Mashina yangilandi
 *       400:
 *         description: Xato ma'lumot
 *       404:
 *         description: Mashina topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/:id", carController.updateCar);

/**
 * @swagger
 * /api/car/{id}:
 *   delete:
 *     tags: [Car]
 *     summary: ID orqali mashina o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Mashina o'chirildi
 *       404:
 *         description: Mashina topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/:id", carController.deleteCar);

module.exports = router;
