import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "../src/components/Pages/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/Pages/NotFound";
import Project from "./components/Pages/Project";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="bg-success-subtle">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
