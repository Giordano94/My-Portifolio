import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { Home } from './Pages/InitialPage/Index';
import ProjectDetailsPage from './Pages/ProjectPage';

const routes: RouteObject[] = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/projects/:id',
    Component: ProjectDetailsPage,
  },
];

export default createBrowserRouter(routes);
