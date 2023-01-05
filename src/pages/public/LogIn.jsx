import React, { useState } from "react";
import { Link } from "react-router-dom";
import { http } from "../../config";

export default function LogIn({ setIsAdmin, setIsLoggedIn }) {
  const [email, setEmail] = useState("amar@gmail.com");
  const [password, setPassword] = useState("12345678");

  const login = async (e) => {
    e.preventDefault();
    try {
      const data = await http.post("/login", { email, password });
      if (data.token) {
        if (data.userInfo.isAdmin) {
          setIsAdmin(true);
          localStorage.setItem("isAdmin", true);
        }
        setIsLoggedIn(true);
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.userInfo));
      }
    } catch (error) {
      alert(error.msg);
    }
  };

  return (
    <main className="w-50 mt-5 mx-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please login</h1>

        <div className="form-floating mb-2">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary mb-2" type="submit" onClick={login}>
          Login
        </button>

        <p className="text-center">OR</p>
        <Link to="/signup" className="w-100 btn btn-lg btn-secondary">
          Sign up
        </Link>
      </form>
    </main>
  );
}
