import winston, { transports } from "winston";
import config from "./config.js";

//Custom logger options:
const customLevelsOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5
    },
    colors: {
        fatal: 'red',
        error: 'orange',
        warning: 'yellow',
        info: 'blue',
        http: 'green',
        debug: 'white'
    }
};

//Custom Logger:
const devLogger = winston.createLogger({
    //Levels:
    levels: customLevelsOptions.levels,
    transports: [
        new winston.transports.Console(
            {
                level: "debug",
                format: winston.format.combine(
                    winston.format.colorize({ colors: customLevelsOptions.colors }),
                    winston.format.simple()
                )
            }
        ),
        new winston.transports.File(
            {
                filename: './errors.log',
                level: 'warning', //Cambiamos el logger level name.
                format: winston.format.simple()
            }
        )
    ]
});

//Creating our logger:
const prodLogger = winston.createLogger({
    levels: customLevelsOptions.levels,
    //Declare transports:
    transports: [
        new winston.transports.Console({ level: "info" }),
        new winston.transports.File({ filename: './errors.log', level: 'warning' })
    ]
});

//Declare a middleware:
export const addLogger = (req, res, next) => {
    if (config.environment === 'production') {
        req.logger = prodLogger;
        req.logger.warning("Prueba de log level warn!");
        req.logger.http(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
    } else {
        req.logger = devLogger;
        req.logger.warning("Prueba de log level warning!");
        req.logger.info(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
    }
    next();
};