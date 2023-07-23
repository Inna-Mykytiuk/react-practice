import { Routes, Route, Navigate } from 'react-router-dom';
// import Layout from './Layout/Layout';
// import Home from 'pages/Home';
// import Cards from 'pages/Cards';
// import About from '../pages/About';
// import Contacts from './Contacts/Contacts';
import { lazy, Suspense } from 'react';
import { LoadingIndicator } from '../components/Layout/LoadingDots';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('pages/Home'));
const Cards = lazy(() => import('pages/Cards'));
const About = lazy(() => import('pages/About'));
const Contacts  = lazy(() => import('./Contacts/Contacts'));

const App = () => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path="about" element={<About />}>
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;


// import { lazy } from 'react';

// const Layout = lazy(() => import ('./Layout/Layout'));
// const Home = lazy(() => import ('../pages/Home'));
