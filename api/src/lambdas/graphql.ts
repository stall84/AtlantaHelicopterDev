import { apolloServer } from "./aws-wrapper";

export const handler = apolloServer.createHandler();

