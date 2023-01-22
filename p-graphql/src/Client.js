import ApolloClient from 'apollo-client';
 const Client = ApolloClient({
    uri :"https://cute-toad-90.hasura.app/v1/graphql"
})
export default Client;
