import { gql } from "@apollo/client";

//query
const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;
export { GET_CLIENTS };
