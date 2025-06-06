import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import User from './components/User/User';
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'user/:userid', element: <User /> },
      { path: 'github', element: <GitHub />, loader: githubInfoLoader },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// const router = createBrowserRouter([
//   {
//      path: '/',
//      element: <Layout />,
//      children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//      ]
//   }
// ])


