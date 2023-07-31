import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LoadingIndicator } from '../components/Layout/LoadingDots';
import { AuthProvider } from './auth/auth';
import PrivateRoute from './auth/RequireAuth';
import { useState } from 'react';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('pages/Home'));
const Cards = lazy(() => import('pages/Cards'));
const About = lazy(() => import('pages/About'));
const Contacts = lazy(() => import('./Contacts/Contacts'));
const Login = lazy(() => import('./auth/login/LogIn'));
const Register = lazy(() => import('./auth/register/Register'));
const Profile = lazy(() => import('./Profile/Profile'));
const Todo = lazy(() => import('pages/Todo'));
const TodoForm = lazy(() => import('./Todo/TodoForm'));
const TodoTable = lazy(() => import('./Todo/TodoTable'));

const App = () => {
  const [todoId, setTodoId] = useState(null);
  return (
    <AuthProvider>
      <Suspense fallback={<LoadingIndicator />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="cards"
              element={
                <PrivateRoute>
                  <Cards />
                </PrivateRoute>
              }
            />
            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />

            <Route path="todo" element={<Todo />}>
              <Route index element={<TodoTable setTodoId={setTodoId}/>}/>
              <Route path='table' element={<TodoTable setTodoId={setTodoId}/>}/>
              <Route path="form" element={<TodoForm todoId={todoId} setTodoId={setTodoId}/>} />
            </Route>
            <Route
              path="about"
              element={
                <PrivateRoute>
                  <About />
                </PrivateRoute>
              }
            >
              <Route path="contacts" element={<Contacts />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
};

export default App;
