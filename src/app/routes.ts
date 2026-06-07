import { createBrowserRouter } from 'react-router';
import { Root } from './components/Root';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { PortfolioPage } from './components/PortfolioPage';
import { WorkDetailPage } from './components/WorkDetailPage';
import { ContactPage } from './components/ContactPage';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'services', Component: ServicesPage },
      { path: 'portfolio', Component: PortfolioPage },
      { path: 'portfolio/:id', Component: WorkDetailPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
]);
