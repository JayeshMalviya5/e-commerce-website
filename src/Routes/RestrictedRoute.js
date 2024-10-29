import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const RestrictedRoutes = () => {
  return (
    <div>
      {window.localStorage.getItem("token") ? (
        <Navigate to={"/e-commerce-website/product"} />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default RestrictedRoutes;