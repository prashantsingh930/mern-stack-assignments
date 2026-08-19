import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import {
  Home,
  Login,
  Dashboard,
  Footer,
  Register,
  Layout,
  NotFound,
} from "./index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Register />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
