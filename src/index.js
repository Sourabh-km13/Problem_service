import express from 'express'
import { PORT } from './config/index.js'
import apirouter from './routes/index.js'

import errorHandler from './utils/ErrorHandler.js'

const app = express()

app.get('/ping',(req,res)=>{
    return res.json({
        "msg":"pong"
    })
})
app.use('/api',apirouter)

//last middleware if any error comes
app.use(errorHandler)
app.listen(3000,()=>{
    console.log('server running on port 3000')
    
    
})