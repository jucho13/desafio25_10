import express from 'express';

//import Routers
import mockingProductsRouter from './routers/mockingProducts.router.js';

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Declare routers:
app.use("/mockingProducts", mockingProductsRouter);

const SERVER_PORT = 8080;

app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
})
