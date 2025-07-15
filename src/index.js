import express from 'express'
import { PORT } from './config/index.js'

const app = express()

app.get('/ping',(req,res)=>{
    return res.json({
        "msg":"pong"
    })
})

app.listen(PORT,()=>{
    console.log('server running on port 3000')
})