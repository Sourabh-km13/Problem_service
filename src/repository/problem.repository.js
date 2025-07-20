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
}
export default ProblemRepository