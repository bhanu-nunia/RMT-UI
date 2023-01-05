import "./App.css";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/publicRoutes";
import { privateRoutes } from "./routes/privateRoutes";
import { useState } from "react";
import { adminRoutes } from "./routes/adminRoutes";
import Navbar from "./components/Navbar";

function App() {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") ? true : false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("authToken") ? true : false);

  return (
    <div className="App">
      <Router>
        {isLoggedIn && <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />}
        <Routes>
          {isLoggedIn &&
            isAdmin &&
            adminRoutes.map(({ path, component: Component }, idx) => (
              <Route key={idx} path={path} element={<Component />} />
            ))}

          {isLoggedIn && (
            <>
              {privateRoutes.map(({ path, component: Component }, idx) => (
                <Route key={idx} path={path} element={<Component />} />
              ))}
              <Route path="*" element={<Navigate to="/dashboard" replace={true} />} />
            </>
          )}

          {isLoggedIn ? (
            <Route path="*" element={<Navigate to="/dashboard" replace={true} />} />
          ) : (
            publicRoutes.map(({ path, component: Component }, idx) => (
              <Route
                key={idx}
                path={path}
                element={<Component setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />}
              />
            ))
          )}

          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
