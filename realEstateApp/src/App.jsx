import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import * as React from 'react';
// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import './App.css';
import HomePage from './pages/HomePage';
import AppLayout from './pages/AppLayout';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import ProfilePage from './pages/ProfilePage';
import { AuthProvider } from './context/AuthContext';
import SignIn from './components/SignIn';
import NewPostPage from './pages/NewPostPage';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
    btnColor: '#fece51',
  },
};

const theme = extendTheme({ colors });

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="homePage" />,
        },
        {
          path: 'homePage',
          element: <HomePage />,
        },
        {
          path: 'listPage',
          element: <ListPage />,
        },
        {
          path: 'postDetail/:houseId',
          element: <DetailPage />,
        },
        {
          path: 'profile',
          element: <ProfilePage />,
        },
        {
          path: 'signIn',
          element: <SignIn />,
        },
        {
          path: 'newPost',
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  // createRoot(document.getElementById("root")).render(
  //   <RouterProvider router={router} />
  // );
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </ChakraProvider>
  );

  // THIS FOR MY PRACTICE PURPOSE
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<AppLayout />}>
  //         {/* <Route index element={<Navigate replace to="homePage" />} /> */}
  //         <Route path="homePage" element={<HomePage />} />
  //         <Route path="list" element={<p>list Page</p>} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
