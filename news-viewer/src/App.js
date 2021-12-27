import React from 'react';
import { useRoutes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <NewsPage /> },
    { path: '/:category', element: <NewsPage /> },
  ]);
  return routes;
};

export default App;