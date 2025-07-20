import express from 'express'
import config from './config/index.js'
import apirouter from './routes/index.js'

import errorHandler from './utils/ErrorHandler.js'
import connectToDb from './config/db.config.js';
const PORT = config.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/ping',(req,res)=>{
    return res.json({
        "msg":"pong"
    })
})
app.use('/api',apirouter)

//last middleware if any error comes
app.use(errorHandler)
app.listen(PORT,async ()=>{
    console.log('server running on port 3000')
    await connectToDb()
    console.log('db connected');
    
    
})