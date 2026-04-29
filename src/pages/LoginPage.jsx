import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";
import "./AuthPage.css";

const LoginPage = () => {
  const { login, authError, clearError } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    clearError();
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const ok = await login(form);
    setLoading(false);
    if (ok) navigate("/");
  };

  return (
    <div className="auth-page">
      {/* Background orbs */}
      <div className="auth-page__orb auth-page__orb--1" />
      <div className="auth-page__orb auth-page__orb--2" />

      <div className="auth-page__card">
        {/* Logo */}
        <Link to="/" className="auth-page__logo">
          <img src="/logo.png" alt="TradeHub" />
          <span>
            Trade<strong>Hub</strong>
          </span>
        </Link>

        <h1 className="auth-page__title">Welcome Back</h1>
        <p className="auth-page__subtitle">Sign in to your TradeHub account</p>

        {authError && (
          <div className="auth-page__error" role="alert">
            ⚠️ {authError}
          </div>
        )}

        <form className="auth-page__form" onSubmit={handleSubmit} noValidate>
          <div className="auth-page__field">
            <label htmlFor="login-email">Email Address</label>
            <input
              id="login-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="auth-page__field">
            <label htmlFor="login-password">Password</label>
            <div className="auth-page__input-wrap">
              <input
                id="login-password"
                type={showPass ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Your password"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="auth-page__eye"
                onClick={() => setShowPass((p) => !p)}
                aria-label="Toggle password"
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            type="submit"
            className="auth-page__submit"
            disabled={loading}
          >
            {loading ? (
              <span className="auth-page__spinner" />
            ) : (
              <>
                <LogIn size={16} /> Sign In
              </>
            )}
          </Button>
        </form>

        <p className="auth-page__footer-text">
          Don't have an account?{" "}
          <Link to="/register" className="auth-page__link">
            Create one free →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
