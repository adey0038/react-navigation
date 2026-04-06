import { Link } from "react-router";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
