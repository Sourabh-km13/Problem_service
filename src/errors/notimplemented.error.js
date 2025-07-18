import { StatusCodes } from "http-status-codes";
import BaseError from "./Base.error.js";



class NotImplementd extends BaseError{
    constructor(methodName ){
        super("Not Implemented",StatusCodes.NOT_IMPLEMENTED ,
            `${methodName} not implemented`,
            {}
        )
    }
}
export default NotImplementd