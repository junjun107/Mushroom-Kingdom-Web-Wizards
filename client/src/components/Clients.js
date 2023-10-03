import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQuery";

import ClientRow from "./ClientRow";
import Spinner from "./Spinner";

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <h4>Clients</h4>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
