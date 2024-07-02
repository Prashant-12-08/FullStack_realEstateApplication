import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import ListPage from "./pages/ListPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Navigate to="homePage" /> },
        { path: "homePage", element: <HomePage /> },
        {
          path: "listPage",
          element: <ListPage />,
        },
      ],
    },
  ]);

  // createRoot(document.getElementById("root")).render(
  //   <RouterProvider router={router} />
  // );

  return <RouterProvider router={router}></RouterProvider>;

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
