import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import HomePage from "./pages/HomePage";
  import Loading from "./components/UI/Loading";
  import AboutPage from "./pages/AboutPage";
  import RootLayout from "./layouts/RootLayout";
  import { AuthContextProvider } from "./context/AuthContext";
import { NoteContextProvider } from "./context/NotesContext";
  
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
      <main className="dark:bg-black min-h-screen">
        <AuthContextProvider>
          <NoteContextProvider>
            <RouterProvider
              router={router}
              fallbackElement={<Loading />
              }        
              />
            </NoteContextProvider>
          </AuthContextProvider>
      </main>
    );
  };
  
  export default App;
  