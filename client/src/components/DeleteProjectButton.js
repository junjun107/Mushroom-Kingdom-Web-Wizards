import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { GET_PROJECTS } from "../queries/projectQuery";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutation";

export default function DeleteProjectButton({ projectId }) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <button className="btn btn-danger ms-auto mt-3" onClick={deleteProject}>
      <div className="d-flex align-items-center ">
        <FiTrash2 className="icon me-1" />
        <div> Delete Project</div>
      </div>
    </button>
  );
}
