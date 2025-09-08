import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import { getUser, logout } from "./lib/auth";

function Nav() {
  const user = getUser();
  const navigate = useNavigate();
  return (
    <header className="nav">
      <Link className="brand" to="/">HKH-Chatify</Link>
      <nav className="links">
        {!user && (<>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>)}
        {user && (<>
          <Link to="/chat">Chat</Link>
          <Link to="/profile">Profile</Link>
          <button className="btn" onClick={() => { logout(); navigate("/login"); }}>
            Logout
          </button>
        </>)}
      </nav>
    </header>
  );
}

function Private({ children }) {
  const user = getUser();
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <div className="shell">
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/chat" replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Private><Chat /></Private>} />
          <Route path="/profile" element={<Private><Profile /></Private>} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </main>
      <footer className="footer">© 2025 HKH-Chatify</footer>
    </div>
  );
}
