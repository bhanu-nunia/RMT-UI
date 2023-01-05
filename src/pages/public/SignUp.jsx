import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { http } from "../../config";

export default function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signup = async (e) => {
    try {
      e.preventDefault();
      const data = await http.post("/signup", user);
      alert("User registered successfully");
      navigate("/login");
    } catch (error) {
      alert(error.msg);
    }
  };
  return (
    <main className="w-50 mt-5 mx-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser((pre) => ({ ...pre, name: e.target.value }))}
          />
          <label htmlFor="floatingName">Name</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser((pre) => ({ ...pre, email: e.target.value }))}
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser((pre) => ({ ...pre, password: e.target.value }))}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary mb-2" type="submit" onClick={signup}>
          Sign up
        </button>

        <p className="text-center">OR</p>
        <Link to="/login" className="w-100 btn btn-lg btn-secondary">
          Login
        </Link>
      </form>
    </main>
  );
}
