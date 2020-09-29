const { ApolloServer, PubSub } = require('apollo-server');


const connectDb = require('./config/db')
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const MONGO_URI = process.env.MONGO_URI;
const pubsub = new PubSub();


connectDb()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => { 
        return {req, pubsub} 
    }
  })

server.listen({port: process.env.PORT || 5000}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});