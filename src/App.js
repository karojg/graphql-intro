import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { LocationsContainer } from "./containers/LocationsContainer";

function App() {
  const client = new ApolloClient({
    uri: "https://flyby-gateway.herokuapp.com/",
    cache: new InMemoryCache(),
    credentials: "same-origin",
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <h1>Intro to GraphQL</h1>
        <LocationsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
