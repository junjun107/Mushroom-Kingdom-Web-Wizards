import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQuery";
import { GET_PROJECTS } from "../queries/projectQuery";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    //refetch after delete
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],

    // //update cache
    // update: (cache, { data: { deleteClient } }) => {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: { clients: clients.filter((c) => c.id!== deleteClient.id) },
    //   });
    // },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          Delete
        </button>
      </td>
    </tr>
  );
}

// update cache instead of refetching
// multiple refetching in short time might bug down app and cause issues
