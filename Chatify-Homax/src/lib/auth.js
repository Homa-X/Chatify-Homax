// Simple localStorage-based auth for G grade (no backend).
const KEY = "hkh_user";

export function register({ name, email, password }) {
  if (!name || !email || !password) throw new Error("All fields are required");
  const existing = JSON.parse(localStorage.getItem(KEY) || "null");
  if (existing && existing.email === email) throw new Error("User already exists");
  const user = { name, email, password }; // NOTE: plain for demo only
  localStorage.setItem(KEY, JSON.stringify(user));
  return user;
}

export function login({ email, password }) {
  const saved = JSON.parse(localStorage.getItem(KEY) || "null");
  if (!saved || saved.email !== email || saved.password !== password) {
    throw new Error("Invalid credentials");
  }
  sessionStorage.setItem("hkh_session", "1");
  return saved;
}

export function getUser() {
  const ok = sessionStorage.getItem("hkh_session") === "1";
  if (!ok) return null;
  return JSON.parse(localStorage.getItem(KEY) || "null");
}

export function logout() {
  sessionStorage.removeItem("hkh_session");
}
