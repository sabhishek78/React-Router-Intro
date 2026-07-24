import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/contact">Contact</Link>{" | "}
        <Link to="/gallery">Gallery</Link>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}