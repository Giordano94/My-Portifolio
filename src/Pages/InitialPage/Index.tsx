import { FC, useMemo } from 'react';
import { Container, H1 } from './style';
import { Header } from '../../Components/Header';
import { ProjectCard } from '../../Components/ProjectCard';
import { projectsData } from '../../Data/projects';
import Footer from '../../Components/Footer';

export const Home: FC = () => {
  const renderProjectCards = useMemo(() => {
    return projectsData.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ));
  }, []);

  return (
    <Container>
      <Header />
      <H1>
        Hey there, my name is Giordano. I'm a frontend developer who transforms
        designs into dynamic and interactive web experiences.
      </H1>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        necessitatibus dolorum, sapiente accusamus tempore accusantium quas
        eligendi. Magni cum sunt ipsam impedit quo! Ipsa quas optio officiis nam
        cumque temporibus!
      </section>
      <div>{renderProjectCards}</div>
      <Footer />
    </Container>
  );
};
