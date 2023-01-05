import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { http } from "../config";

export default function User() {
  const navigate = useNavigate();
  const param = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const getUser = async (id) => {
    try {
      const res = await http.get("/users/" + id);
      const { name, email, isAdmin } = res.userInfo;
      setUser({
        name,
        email,
        isAdmin,
      });
    } catch (error) {
      alert(error.msg);
    }
  };

  useEffect(() => {
    if (param.id != "new") {
      getUser(param.id);
    }
  }, []);

  const submit = async (e) => {
    try {
      e.preventDefault();
      if (param.id != "new") {
        const data = await http.put("/users/" + param.id, user);
        alert("User updated successfully");
      } else {
        const data = await http.post("/users", user);
        alert("User added successfully");
      }
      navigate("/users");
    } catch (error) {
      alert(error.msg);
    }
  };
  return (
    <main className="w-50 mt-5 mx-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal">{param.id != "new" ? "Edit user info" : "Add new user"}</h1>

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

        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value={user.isAdmin}
            id="flexCheckDefault"
            checked={user.isAdmin}
            onChange={(e) => setUser((pre) => ({ ...pre, isAdmin: e.target.checked }))}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Admin
          </label>
        </div>

        <button className="w-100 btn btn-lg btn-primary mb-2" type="submit" onClick={submit}>
          Submit
        </button>
      </form>
    </main>
  );
}
