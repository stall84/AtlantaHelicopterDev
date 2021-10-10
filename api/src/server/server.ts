import { ApolloServer, gql } from "apollo-server-lambda";

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    },
};

export const ApolloInstance = (): ApolloServer => {
    console.log('Graphql server starting... ')

    return new ApolloServer({
        typeDefs,
        resolvers,
    })
}