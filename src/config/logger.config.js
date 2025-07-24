import winston from 'winston'
import 'winston-mongodb'
import config from './index.js'
const allowedTransports = []
allowedTransports.push(new winston.transports.Console())
allowedTransports.push(new winston.transports.MongoDB({
    level:'error',
    db:config.LOG_DB_URL,
    collection:'logs'
}))
const logger  = winston.createLogger({
    format:winston.format.combine(
        // winston.format.colorize(),
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log)=>
            `${log.timeStamp} [${log.level}]: ${log.message}`
        )
    ),
    transports:allowedTransports,
})
export default logger