import BaseError from "./Base.error";
import { StatusCodes } from '../../node_modules/http-status-codes/build/es/status-codes';


class BadRequest extends BaseError{
    constructor(propertyName ,details){
        super("bad request",StatusCodes.BAD_REQUEST ,
            `Invalid Structure for ${propertyName} provided`,
            details
        )
    }
}
export default BadRequest