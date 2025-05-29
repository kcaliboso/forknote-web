import { Button } from "@/components/ui/button";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex h-dvh w-full items-center justify-center">
        <div className="space-y-4 text-center">
          <h1 className="text-6xl font-extrabold">404 - Error</h1>
          <p className="text-2xl">The page doesn&apos;t exist.</p>
          <Button>
            <Link to="/">Back to Home</Link>
          </Button>
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
