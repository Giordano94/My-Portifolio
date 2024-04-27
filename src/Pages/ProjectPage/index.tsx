import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../../Components/Header';
import Details from '../../Components/ProjectDetails';
import Footer from '../../Components/Footer';
import { projectsData } from '../../Data/projects';

const ProjectDetailsPage: FC = () => {
  const { id } = useParams();

  const projectId = id;

  const getProjectById = (id: number) => {
    return projectsData.find((project) => project.id === id);
  };

  const project = getProjectById(Number(projectId));

  return (
    <div>
      <Header />
      <Details project={project} />
      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;
