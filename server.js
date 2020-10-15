const { makeExecutableSchema } = require('graphql-tools');
const { graphql } = require('graphql');

const typeDefs = `

schema{
    query:Query
   
}

type Query {
    hello:String
    name:String
}
`;
//the resolver is just a function that gets called when the gql query is run, in this case if we run the query hello, we will get back "World"
const resolvers = {
  Query: {
    hello: () => 'World',
    name: () => 'Wes',
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });
const query = process.argv[2];

graphql(schema, query).then((res) => {
  console.log(JSON.stringify(res, null, 2));
});

// run this to execute in the command line =>  node server.js "query {hello, name}"
