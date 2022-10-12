import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { check_auth } from "../../Auth/actions";
import { AuthContext } from "../../contexts/AuthProvider";
import Load from "../Home/Load";
import styles from "./Login.module.css";

function Login() {
  const { token } = useContext(AuthContext);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/add";

  useEffect(() => {
    if (token == "QpwL5tke4Pnpja7X4") {
      navigate(from, { replace: true });
    }
  }, [token]);

  const handleChange = (e) => {
    let inputName = e.target.name;
    setForm({
      ...form,
      [inputName]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(check_auth(form));
  };
  if (loading) return <Load />;
  if (error) return <div>Something Went Wrong here...</div>;
  return (
    <>
      <main class="form-signin  m-auto" id={styles.form}>
        <form id={styles.signin} onSubmit={handleSubmit}>
          <img
            class="mb-6"
            src="https://image.shutterstock.com/image-vector/apartment-icon-flat-vector-illustration-600w-435853693.jpg"
            alt=""
            width="92"
            height="87"
          />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input
              type="email"
              name="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={handleChange}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              name="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={handleChange}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
      </main>
    </>
  );
}

export default Login;
