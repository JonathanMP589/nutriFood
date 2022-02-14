import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isAuthenticated === "true") {
    return (
      <Route {...restOfProps} render={(props) => <Component {...props} />} />
    );
  } else {
    return <Navigate exact to="/" />;
  }
}

export default ProtectedRoute;
