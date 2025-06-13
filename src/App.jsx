import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WrapperRoute from './routing/WrapperRoute';
import ErrorRoute from './routing/ErrorRoute';
import HomePage from './routing/HomePage';
import LABRoute from './routing/LABRoute';
import WorksRoute from './routing/WorksRoute';
import ServicesRoute from './routing/ServicesRoute';
import CareersRoute from './routing/CareersRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WrapperRoute />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/LAB',
        element: <LABRoute />,
      },
      {
        path: '/Works',
        element: <WorksRoute />,
      },
      {
        path: '/Services',
        element: <ServicesRoute />,
      },
      {
        path: '/Careers',
        element: <CareersRoute />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
