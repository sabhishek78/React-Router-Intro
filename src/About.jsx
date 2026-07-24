import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/contact">Contact</Link>
      </nav>

      <h1>📖 About Page</h1>
    </>
  );
}