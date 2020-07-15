// server/index.js

const Koa = require("koa");
const { ApolloServer, gql } = require("apollo-server-koa");

// 加载所有的 schema
const typeDefs = require("./schema");

// 加载所有的 resolver
const resolvers = require("./resolver");

const app = new Koa();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true, // 开启开发UI调试工具
});

server.applyMiddleware({ app });

const port = 8000;
app.listen({ port }, () =>
  console.log(
    `graphql server start at http://localhost:${port}${server.graphqlPath}`
  )
);
// 开启服务，server.graphqlPath 默认为 /graphql
