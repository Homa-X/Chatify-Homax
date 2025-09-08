import { useState } from "react";
import { register } from "../lib/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      register(form);
      alert("Registered! Please log in.");
      navigate("/login");
    } catch (err) {
      setError(err.message || "Failed");
    }
  }

  return (
    <section className="card">
      <h1>Create account</h1>
      <form onSubmit={onSubmit} className="form">
        <input name="name" placeholder="Full name" value={form.name} onChange={onChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={onChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} />
        {error && <p className="error">{error}</p>}
        <button className="btn primary">Register</button>
      </form>
      <p className="muted">Already have an account? <Link to="/login">Log in</Link></p>
    </section>
  );
}
