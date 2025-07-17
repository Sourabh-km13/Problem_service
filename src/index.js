import express from 'express'
import { PORT } from './config/index.js'
import apirouter from './routes/index.js'

const app = express()

app.get('/ping',(req,res)=>{
    return res.json({
        "msg":"pong"
    })
})
app.use('/api',apirouter)

app.listen(3000,()=>{
    console.log('server running on port 3000')
})