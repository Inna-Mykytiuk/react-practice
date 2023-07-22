import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'pages/Home';
import Cards from 'pages/Cards';
// import { lazy } from 'react';

// const Layout = lazy(() => import ('./Layout/Layout'));
// const Home = lazy(() => import ('../pages/Home'));
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
