import { GET_PROJECT } from "../../queries/projectQuery";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Spinner from "../Spinner";
import ClientInfo from "../ClientInfo";
import { FiArrowLeft } from "react-icons/fi";
import DeleteProjectButton from "../DeleteProjectButton";
import EditProjectForm from "../EditProjectForm";

export default function Project() {
  const { id } = useParams();

  const getProjectStatus = (status) => {
    if (status === "Not Started") {
      return "bg-primary";
    } else if (status === "In Progress") {
      return "bg-secondary";
    } else if (status === "Completed") {
      return "bg-success";
    }
  };

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id: id },
  });

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong</div>;

  if (!data || !data.project) {
    // Handle the case where data or data.project is undefined or null
    return <div>Data not available</div>;
  }
  const statusClassName = getProjectStatus(data.project.status);

  return (
    <>
      {/* {!loading && !error && data && ( */}
      {!loading && !error && data && (
        <div className="max-auto w-75 card p-5 bg-success-subtle">
          <Link to="/" className="btn btn-dark btn-sm w-25 d-inline mb-5">
            <FiArrowLeft /> Back
          </Link>

          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className="mt-3">Project Status</h5>

          <div className="d-grid gap-2 col-6">
            <p className={`badge ${statusClassName}`}>{data.project.status}</p>
          </div>

          <ClientInfo client={data.project.client} />
          <DeleteProjectButton projectId={data.project.id} />
          <EditProjectForm project={data.project} />
        </div>
      )}
    </>
  );
}
