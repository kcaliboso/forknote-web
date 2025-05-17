import { isRouteErrorResponse, Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex h-dvh w-full items-center justify-center">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">404 - Error</h1>
          <p>The page doesn&apos;t exist.</p>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
