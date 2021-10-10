"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloInstance = void 0;
const apollo_server_lambda_1 = require("apollo-server-lambda");
const typeDefs = apollo_server_lambda_1.gql `
    type Query {
        hello: String
    }
`;
const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    },
};
const ApolloInstance = () => {
    console.log('Graphql server starting... ');
    return new apollo_server_lambda_1.ApolloServer({
        typeDefs,
        resolvers,
    });
};
exports.ApolloInstance = ApolloInstance;
