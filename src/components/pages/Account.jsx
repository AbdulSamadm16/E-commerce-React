import { useState } from "react";

export default function Account({ user, setUser, setPage }) {
  const [mode, setMode] = useState(user ? "profile" : "login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!form.email || !form.password) return alert("Please enter email and password");
    setUser({ name: "Guest", email: form.email });
    setPage("home");
  };

  const handleSignup = () => {
    if (!form.name || !form.email || !form.password) return alert("All fields are required");
    setUser({ name: form.name, email: form.email });
    setPage("home");
  };

  const handleLogout = () => {
    setUser(null);
    setForm({ name: "", email: "", password: "" });
    setMode("login");
    setPage("home");
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">👤 My Account</h2>

      {user ? (
        <div className="card p-4 shadow-sm text-center">
          <h4 className="mb-3">Welcome, {user.name}!</h4>
          <p>Email: {user.email}</p>
          <button className="btn btn-outline-danger mt-3" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : mode === "login" ? (
        <div className="card p-4 shadow-sm">
          <h4 className="mb-3">Login</h4>
          <input
            type="email"
            name="email"
            className="form-control mb-2"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <button className="btn btn-dark" onClick={handleLogin}>Login</button>
          <p className="mt-3">
            Don't have an account?{" "}
            <button className="btn btn-link p-0" onClick={() => setMode("signup")}>Sign up</button>
          </p>
        </div>
      ) : (
        <div className="card p-4 shadow-sm">
          <h4 className="mb-3">Sign Up</h4>
          <input
            type="text"
            name="name"
            className="form-control mb-2"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="form-control mb-2"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <button className="btn btn-dark" onClick={handleSignup}>Create Account</button>
          <p className="mt-3">
            Already have an account?{" "}
            <button className="btn btn-link p-0" onClick={() => setMode("login")}>Login</button>
          </p>
        </div>
      )}
    </div>
  );
}