export const loggerController = async (req,res) => {
    req.logger.http("Prueba de log level http --> en Endpoint"); 
    res.send("Prueba de logger!");
}