import express from 'express'
import { problemService } from '../../controllers/index.js'

const problemRouter = express.Router()

problemRouter.get('/ping',(req,res)=>{
    
    
    return res.json({"problemRouter":"hello from Problem Router"})
})
problemRouter.get('/:id',problemService.getProblem)
problemRouter.get('/',problemService.getProblems)
problemRouter.post('/',problemService.addProblem)
problemRouter.delete('/:id',problemService.deleteProblem)
problemRouter.put('/:id',problemService.updateProblem)
export default problemRouter