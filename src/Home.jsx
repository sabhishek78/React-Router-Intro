import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/contact">Contact</Link>
      </nav>

      <h1>🏠 Home Page</h1>
    </>
  );
}