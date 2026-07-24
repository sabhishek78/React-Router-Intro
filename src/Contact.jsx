import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/contact">Contact</Link>
      </nav>

      <h1>📞 Contact Page</h1>
    </>
  );
}