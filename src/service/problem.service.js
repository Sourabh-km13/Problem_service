import { MarkdownSanitizer } from "../utils/index.js"

class ProblemService{

    constructor(problemRepository){
        this.problemRepository = problemRepository
    }
    async createProblem(problemData){
        try {
            problemData.description = MarkdownSanitizer(problemData.description)

            
            const problem = await this.problemRepository.createProblem(problemData)

            return problem
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async getAllProblems(){
        const problems = await this.problemRepository.getAllProblems()
        return problems
    }
    async getProblem(problemId){
        const problem = await this.problemRepository.getProblem(problemId)
        return problem
    }
    async deleteProblem (problemID){
        const deletedProblem = await this.problemRepository.deleteProblem(problemID)
        return deletedProblem
    }
    async updateProblems(problemData, problemId){
        const updatedProblem = await this.problemRepository.updateProblem(problemData,problemId)
        return updatedProblem
    }
}
export default ProblemService