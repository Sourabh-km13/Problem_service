import logger from "../config/logger.config.js";
import NotFound from "../errors/notFound.error.js";
import { ProblemModel } from "../models/index.js";


class ProblemRepository {
    async createProblem(problemData){
        try {
            const problem = await ProblemModel.create({
                title: problemData.title,
                description:problemData.description,
                difficulty:problemData.difficulty,
                testcases:problemData.testCases,
            })
            return problem
        } catch (error) {
            console.log('error in creating problem',error)
        }
    }
    async getAllProblems(){
        try {
            const problems = await ProblemModel.find({})
            return problems
        } catch (error) {
            console.log('error in getting problems',error)
        }
    }
    async getProblem(id){
        try {
            const problem = await ProblemModel.findById(id)
            if(!problem){
                throw new NotFound("Problem" , id)
            }
            return problem
        } catch (error) {
            console.log('cannot get problem ',error)
            throw error
        }
    }
    async deleteProblem(id){
        try {
            const deletedProblem = await ProblemModel.deleteOne({"_id":id})
            if(deletedProblem.deletedCount==0){
                logger.error(`Problem with ${id} not found in db`)
                throw new NotFound("Problem",id)
            }
            return deletedProblem;
        } catch (error) {
            console.log('cannot delete given problem',error)
            throw error
        }
    }
    async updateProblem (problemData,problemId){
        try {
            const udpdatedProblem = await ProblemModel.updateOne(
                {"_id":problemId},
                {
                    $set:{'title':problemData.title,
                            'description':problemData.description,
                            'difficulty':problemData.difficulty,
                            'testcases':problemData.testcases,

                    }
                }
            )
            return udpdatedProblem
        } catch (error) {
            console.log('cannot update problem', error)
            throw error
        }
    }
}
export default ProblemRepository