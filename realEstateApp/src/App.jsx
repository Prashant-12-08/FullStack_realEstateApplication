import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
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
import { FetchingUserIdData } from './components/FetchingUserIdData';
import Login from './pages/Login';

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
          path: 'postDetail/:postId',
          element: <DetailPage />,
          loader: FetchingUserIdData,
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
          path: 'login',
          element: <Login />,
        },
        {
          path: 'newPost',
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

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
