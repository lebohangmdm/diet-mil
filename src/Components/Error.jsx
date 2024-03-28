import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const errorMessage =
    error.status === 404
      ? "Oops! The page you're looking for couldn't be found."
      : error.message;
  return (
    <section className="pt-10 lg:pt-16">
      <div className="container px-4 mx-auto md:px-6">
        <div className="text-center space-y-2 md:space-y-6">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl text-center">
            Opps!, Something went Wrong
          </h1>
          <p className="md:text-lg">{errorMessage}</p>
        </div>
      </div>
    </section>
  );
};

export default Error;
