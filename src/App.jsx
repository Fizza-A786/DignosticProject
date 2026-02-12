// src/App.jsx
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./App.css";

// Import components
import Navbar from "./Component/comman/Navber";
import Footer from "./Component/comman/Footer";

// Import pages
import Industries from "./pages/Industries";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import GetFree from "./Component/comman/GetFree";
import SignIn from "./Component/comman/SignIn";



// ✅ Layout component (Navbar + Footer always visible)
const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// ✅ Define router with nested routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Industries /> },
      { path: "features", element: <About /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
      { path: "getfree", element: <GetFree /> },
      { path: "signin", element: <SignIn /> },
    ],
  },
]);

// ✅ App component provides the router
function App() {
  return <RouterProvider router={router} />;
}

export default App;