import NotImplementd from "../errors/notimplemented.error.js"

function addProblem(req,res,next){
    try {
        throw new NotImplementd('Add Problem')
    } catch (error) {
        next(error)
    }
}
function getProblem(req,res){

}
function getProblems(req,res){
    
}
function deleteProblems(req,res){

}
function updateProblems(req,res){

}
export{addProblem,getProblem,getProblems,deleteProblems,updateProblems }