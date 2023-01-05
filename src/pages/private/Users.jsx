import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { http } from "../../config";

export default function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await http.get("/users");
      setUsers(res.userInfo);
    } catch (error) {
      alert(error.msg);
    }
  };

  const deleteUser = async (id) => {
    try {
      if (window.confirm("confirm delete?")) {
        const res = await http.delete("/users/" + id);
        getUsers();
      }
    } catch (error) {
      alert(error.msg);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="m-2">
        <Link to={`/users/new`} className="btn btn-success">
          Add User
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Admin</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => {
            return (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? "✅" : "❌"}</td>
                <td>
                  <Link to={`/users/${user._id}`} className="btn btn-sm btn-info">
                    Edit
                  </Link>
                  <button className="btn btn-sm btn-danger mx-1" onClick={() => deleteUser(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
