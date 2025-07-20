import { MarkdownSanitizer } from "../utils/index.js"

class ProblemService{

    constructor(problemRepository){
        this.problemRepository = problemRepository
    }
    async createProblem(problemData){
        //sanitize markdown for description
        try {
            problemData.description = MarkdownSanitizer(problemData.description)

            console.log("problem Data",problemData);
            
            const problem = await this.problemRepository.createProblem(problemData)

            console.log("problem created",problem)
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
}
export default ProblemService