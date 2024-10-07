import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Create an HTTP link to the GraphQL server
const httpLink = createHttpLink({
  uri: 'https://paatee-api.onrender.com/graphql',
});

// Set up the authentication link to add the token to the headers
const authLink = setContext((_, { headers }) => {
  // Retrieve the token from localStorage (or other storage mechanism)
  const token = localStorage.getItem('accessToken'); // Replace with your actual token retrieval logic
  console.log("tokon:" ,token)

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create Apollo Client instance with the authLink and httpLink
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Combine authLink and httpLink
  cache: new InMemoryCache(),
});

export default client;
