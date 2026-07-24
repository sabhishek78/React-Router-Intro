import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Root from "./Root";
import Gallery from "./Gallery";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="gallery" element={<Gallery />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}