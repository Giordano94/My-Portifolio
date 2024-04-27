export interface ProjectProps {
  id: number;
  image: string;
  title: string;
  description: React.ReactNode;
  link: string;
}

export interface ProjectCardProps {
  project: ProjectProps;
}
