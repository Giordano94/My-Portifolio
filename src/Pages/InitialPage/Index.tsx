import { FC, useMemo } from 'react';
import { Container, H1 } from './style';
import { Header } from '../../Components/Header';
import { ProjectCard } from '../../Components/ProjectCard';
import { projectsData } from '../../Data/projects';
import Footer from '../../Components/Footer';
import AboutMe from '../../Components/AboutMe';
import IntroductionText from '../../Components/IntroductionText';

export const Home: FC = () => {
  const renderProjectCards = useMemo(() => {
    return projectsData.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ));
  }, []);

  return (
    <Container>
      <Header />
      <IntroductionText />
      <AboutMe />
      <div>{renderProjectCards}</div>
      <Footer />
    </Container>
  );
};
