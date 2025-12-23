const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const userRoutes = require('./routes/user.route')
const customerRoutes = require('./routes/customer.route')
const carRoutes = require('./routes/car.route')
const setupSwagger = require('./swagger/swagger');
const cors = require("cors")
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

setupSwagger(app);

// Routes 

// userRouter 

app.use('/api', userRoutes)

// customerRouter 

app.use('/api', customerRoutes)

// carRouter 

app.use("/api/car", carRoutes)


const PORT = process.env.PORT || 7777

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
