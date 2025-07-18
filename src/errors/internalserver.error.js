import BaseError from "./Base.error";
import { StatusCodes } from '../../node_modules/http-status-codes/build/es/status-codes';


class InternalServer extends BaseError{
    constructor( details){
        super("Internal server error",StatusCodes.INTERNAL_SERVER_ERROR ,
            `Something went wrong`,
            details
        )
    }
}
export default InternalServer