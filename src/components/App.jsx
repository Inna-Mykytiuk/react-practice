import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LoadingIndicator } from '../components/Layout/LoadingDots';
import PrivatRoute from 'utils/route/privatRoute';
import AuthRoot from './auth/AuthRoot';

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
        <Route element={<PrivatRoute/>}>
          <Route index element={<Home />} />
        </Route>

          <Route path="login"element={<AuthRoot />} />
          <Route path="register"element={<AuthRoot/>} />
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

