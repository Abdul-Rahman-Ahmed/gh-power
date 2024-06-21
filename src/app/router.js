import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/home";
import H2 from "../pages/h2/h2";
import Instituations from "../pages/instituations/instituations";
import Conferences from "../pages/conferences/conferences";
import Projects from "../pages/projects/Projects";
import Info from "../pages/infoRes/info";
import Contact from "../pages/contact/contact";
import About from "../pages/about/About";
import Conference from "../pages/conferences/conference";
import Project from "../pages/projects/project";
import Instituation from "../pages/instituations/instituation";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "ar/h2-about",
    element: <H2 />,
  },
  {
    path: "/ar/organizations",
    element: <Instituations />,
  },
  {
    path: "/ar/conferences",
    element: <Conferences />,
  },
  {
    path: "/ar/projects",
    element: <Projects />,
  },
  {
    path: "/ar/information-resources",
    element: <Info />,
  },
  {
    path: "ar/contact",
    element: <Contact />,
  },
  {
    path: "ar/about-us",
    element: <About />,
  },
  {
    path: "/:lang/conferences/:conferencename",
    element: <Conference />,
  },
  {
    path: "/ar/organizations/:instituationname",
    element: <Instituation />,
  },
  {
    path: "/ar/projects/:projectname",
    element: <Project />,
  },
]);
const Router = () => {
  return <RouterProvider router={routers} />;
};

export default Router;
