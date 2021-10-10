"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_wrapper_1 = require("./aws-wrapper");
exports.handler = aws_wrapper_1.apolloServer.createHandler();
