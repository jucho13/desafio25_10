import express from 'express';
import config from './config/config.js';

//import Routers
import mockingProductsRouter from './routers/mockingProducts.router.js';
import loggerRouter from './routers/logger.router.js'
import { addLogger } from './config/logger_custom.js';
const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(addLogger);
//Declare routers:
app.use("/mockingProducts", mockingProductsRouter);
app.use("/loggerTest", loggerRouter);
const SERVER_PORT = config.port;

app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
})
