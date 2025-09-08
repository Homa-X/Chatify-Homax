import { useState } from "react";
import { login } from "../lib/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      login(form);
      navigate("/chat");
    } catch (err) {
      setError(err.message || "Failed");
    }
  }

  return (
    <section className="card">
      <h1>Welcome back</h1>
      <form onSubmit={onSubmit} className="form">
        <input name="email" placeholder="Email" value={form.email} onChange={onChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} />
        {error && <p className="error">{error}</p>}
        <button className="btn primary">Log in</button>
      </form>
      <p className="muted">No account? <Link to="/register">Create one</Link></p>
    </section>
  );
}
