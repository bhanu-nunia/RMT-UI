import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isAdmin, setIsAdmin, setIsLoggedIn }) {
  return (
    <nav className="navbar bg-dark navbar-dark navbar-expand-lg mb-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">
          Dashboard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {isAdmin && (
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/billing">
                Billing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reports">
                Reports
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="nav-link text-decoration-none btn btn-danger"
                onClick={() => {
                  localStorage.clear();
                  setIsAdmin(false);
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
