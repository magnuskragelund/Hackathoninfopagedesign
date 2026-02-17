import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { CaseDetail } from './components/CaseDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/case/:id',
    Component: CaseDetail,
  },
]);
