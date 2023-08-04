import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {RouterProvider} from "react-router-dom";
import {router} from "./Routes/Routes";
import AuthProvider from "./Providers/AuthProvider";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import axios from "axios";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then(registration => {
        console.log("Service worker registered:", registration);
        // Optional: Subscribe to push notifications here if needed
      })
      .catch(error => {
        console.error("Service worker registration failed:", error);
      });
  });
}

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <div className="">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>
);
