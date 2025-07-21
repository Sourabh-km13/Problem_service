import { StatusCodes } from "http-status-codes"
import NotImplementd from "../errors/notimplemented.error.js"
import  {ProblemRepository}  from "../repository/index.js"
import {ProblemCreatorService}  from "../service/index.js"

const problemService = new ProblemCreatorService(new ProblemRepository())
async function addProblem(req,res,next){
    try {
        console.log('incoming req body',req.body)
        const newProblem = await problemService.createProblem(req.body)
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'problem created successfully',
            error:{},
            data:newProblem,
        })
    } catch (error) {
        next(error)
    }
}
async function getProblem(req,res,next){
    try {
        const problem = await problemService.getProblem(req.params.id)
        
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'successfully fetched a problem',
            error:{},
            data:problem,
        })
    } catch (error) {
        next(error)
    }
}
async function getProblems(req,res,next){

    try {
        const problems = await problemService.getAllProblems()
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"fetched all problems successfully",
            error:{},
            data:problems

        })
    } catch (error) {
        next(error)
    }
}
async function deleteProblem(req,res,next){
    try {
        console.log(req.params.id)
        const deletedProblem = await problemService.deleteProblem(req.params.id)
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"deleted one problem",
            error:{},
            data:deletedProblem
        })
    } catch (error) {
        next(error)
    }
}
function updateProblems(req,res,next){
    try {
        throw new NotImplementd('update Problems')
    } catch (error) {
        next(error)
    }
}
export{addProblem,getProblem,getProblems,deleteProblem,updateProblems }