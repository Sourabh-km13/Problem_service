import NotImplementd from "../errors/notimplemented.error.js"

function addProblem(req,res,next){
    try {
        throw new NotImplementd('Add Problem')
    } catch (error) {
        next(error)
    }
}
function getProblem(req,res,next){
    try {
        throw new NotImplementd('Get problem')
    } catch (error) {
        next(error)
    }
}
function getProblems(req,res,next){

    try {
        throw new NotImplementd('Get Problems')
    } catch (error) {
        next(error)
    }
}
function deleteProblems(req,res,next){
    try {
        throw new NotImplementd('Delete Problem')
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
export{addProblem,getProblem,getProblems,deleteProblems,updateProblems }