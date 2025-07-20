import NotFound from "../errors/notFound.error.js";
import { ProblemModel } from "../models/index.js";

class ProblemRepository {
    async createProblem(problemData){
        try {
            const problem = await ProblemModel.create({
                title: problemData.title,
                description:problemData.description,

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
}
export default ProblemRepository