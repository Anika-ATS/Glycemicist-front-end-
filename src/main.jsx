import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {RouterProvider} from "react-router-dom";
import {router} from "./Routes/Routes";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
