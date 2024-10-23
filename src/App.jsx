import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import HomePage from "./pages/HomePage";
  import Loading from "./components/UI/Loading";
  import AboutPage from "./pages/AboutPage";
  import RootLayout from "./layouts/RootLayout"; // Import the RootLayout
  import { AuthContextProvider } from "./context/AuthContext";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);
  
  const App = () => {
    return (
      <AuthContextProvider>
      <RouterProvider
        router={router}
        fallbackElement={<Loading />
        }        
        />
      </AuthContextProvider>
    );
  };
  
  export default App;
  