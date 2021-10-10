"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'GRAB XOLA FROM HERE!'
        }, null, 2)
    };
};
exports.handler = handler;
