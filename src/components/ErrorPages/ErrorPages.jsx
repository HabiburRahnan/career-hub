import { Link } from "react-router-dom";

const ErrorPages = () => {
  return (
    <div>
      <h1>
        Unexpected Application Error! <br /> 404 Not Found <br /> 💿 Hey
        developer 👋
      </h1>
      <p>
        You can provide a way better UX than this when your app throws errors by
        providing your own ErrorBoundary or errorElement prop on your route.
      </p>

      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default ErrorPages;
