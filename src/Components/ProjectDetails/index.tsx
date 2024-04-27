import { FC } from 'react';
import { ProjectProps } from '../../types';

export interface DetailsProps {
  project: ProjectProps | undefined;
}

const Details: FC<DetailsProps> = ({ project }) => {
  if (!project) {
    return <div>Projeto não encontrado.</div>;
  }
  return (
    <div>
      <h2>{project.title}</h2>
      <img src={`${project.image}`} alt="" />
      <p>{project.description}</p>
      <p>{project.link}</p>
    </div>
  );
};

export default Details;
