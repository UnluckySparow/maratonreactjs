import ApolloClient from "apollo-boost";
const client  = new ApolloClient ({
    uri:"https://cute-toad-90.hasura.app/v1/graphql"
})
export default client;