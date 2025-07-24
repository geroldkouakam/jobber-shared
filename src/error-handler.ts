import { StatusCodes} from 'http-status-codes';

export interface IErrorResponse {
    
    message: string;
    statusCode: number;
    status: string;
    comingFrom: string;
    serializeErrors(): IError;
}

export interface IError {
    message: string;
    statusCode: number;
    status: string;
    comingFrom: string;
}

export abstract class CustomError extends Error{

    abstract statusCode: number;
    abstract status: string;
    abstract comingFrom: string;

    constructor(message: string) {
        super(message);
    }

    serializeErrors(): IError {
        return {
            message: this.message,
            statusCode: this.statusCode,
            status: this.status,
            comingFrom: this.comingFrom
        };
    }
}

export class BadRequestError extends CustomError {
    statusCode = StatusCodes.BAD_REQUEST;
    status = 'error';
    comingFrom = 'BadRequestError';

    constructor(message: string) {
        super(message);
    }
}

export class NotFoundError extends CustomError {
    statusCode = StatusCodes.NOT_FOUND;
    status = 'error';
    comingFrom = 'NotFoundError';

    constructor(message: string) {
        super(message);
    }
}

export class NotAuthorizedError extends CustomError {
    statusCode = StatusCodes.UNAUTHORIZED;
    status = 'error';
    comingFrom = 'NotAuthorizedError';

    constructor(message: string) {
        super(message);
    }
}

export class FileTooLargeError extends CustomError {
    statusCode = StatusCodes.REQUEST_TOO_LONG;
    status = 'error';
    comingFrom = 'fileTooLargeError';

    constructor(message: string) {
        super(message);
    }
}

export class ServerError extends CustomError {
    statusCode = StatusCodes.SERVICE_UNAVAILABLE;
    status = 'error';
    comingFrom = 'ServerError';

    constructor(message: string) {
        super(message);
    }
}

export interface ErrnoException extends Error {
    errno?: number;
    code?: string;
    path?: string;
    syscall?: string;
    stack?: string;
}
