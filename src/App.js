import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ProtectedRoute from "./Routes/ProtectedRoute";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Characters from "./Components/Characters/Characters";
import NotFound from "./Routes/NotFound";
import CNavbar from "./Components/CNavbar/CNavbar";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <CNavbar />
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/characters",
      element: (
        <ProtectedRoute>
          <CNavbar />
          <Characters />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div /*className={`${theme === "dark" && "dark-theme"}`}*/>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
