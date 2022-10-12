import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Login from "./Login";

function RequiredAuth({ children }) {
  const { token } = useContext(AuthContext);
  if (token) return children;
  return <Login />;
}

export default RequiredAuth;
