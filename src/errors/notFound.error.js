import { StatusCodes } from "http-status-codes";
import BaseError from "./Base.error.js";


class NotFound extends BaseError{
    constructor( resourceName , resourceValue){
        super("Not Found error",StatusCodes.NOT_FOUND ,
            `The requested resource name ${resourceName} with resource id ${resourceValue} not found`,
            {
                resourceValue,
                resourceName
            }
        )
    }
}
export default NotFound