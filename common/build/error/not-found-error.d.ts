import { CustomError } from "./custom-error";
export declare class NotFoundError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeError(): {
        message: string;
    }[];
}
