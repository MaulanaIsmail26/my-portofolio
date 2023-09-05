/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortoPage from "./pages/porto-page";
import MaintenancePage from "./pages/maintenance-page";
import MessageSent from './pages/message_sent';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PortoPage />,
    },
    {
      path: "/message-sent",
      element: <MessageSent />,
    },
  ]);

  if (process.env.REACT_APP_IS_MAINTENANCE === "true") {
    return <MaintenancePage />;
  } else {
    return <RouterProvider router={router} />;
  }
}

export default App;
