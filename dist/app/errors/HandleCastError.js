"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError = (err) => {
    const errorSources = [
        {
            path: err.path,
            message: err.message,
        },
    ];
    return {
        statusCode: 400,
        success: false,
        message: 'Invalid Id Provided',
        errorSources,
    };
};
exports.default = handleCastError;
