/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortoPage from "./pages/porto-page";
import MaintenancePage from "./pages/maintenance-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PortoPage />,
    },
  ]);

  if (process.env.REACT_APP_IS_MAINTENANCE === "true") {
    return <MaintenancePage />;
  } else {
    return <RouterProvider router={router} />;
  }
}

export default App;
