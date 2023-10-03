export default function ProjectCard({ project }) {
  const { id, name, status } = project;

  const getProjectStatus = (status) => {
    if (status === "Not Started") {
      return "bg-primary";
    } else if (status === "In Progress") {
      return "bg-secondary";
    } else if (status === "Completed") {
      return "bg-success";
    }
  };
  const statusClassName = getProjectStatus(status);

  return (
    <div className="col-md-6 ">
      <div className="card mb-3 bg-body-tertiary rounded-3 border border-white">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{name}</h5>
            <a
              className="btn btn-dark
            rounded-2
            "
              href={`/projects/${id}`}
            >
              View
            </a>
          </div>

          <p className="small">
            Status: <span className={`badge ${statusClassName}`}>{status}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
