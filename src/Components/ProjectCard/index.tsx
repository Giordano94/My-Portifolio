import { FC } from 'react';
import type { ProjectCardProps } from '../../types';
import { Link } from 'react-router-dom';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`projects/${project.id}`}>
      <Card>
        <CardActionArea>
          <CardMedia image={project.image} />
          <CardContent>
            <Typography component="h1">{project.title}</Typography>
            <Typography component="div">{project.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
