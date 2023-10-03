import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQuery";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      <h4>Projects</h4>
      {data.projects.length > 0 ? (
        <div className="row ">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects found</p>
      )}
    </>
  );
}
