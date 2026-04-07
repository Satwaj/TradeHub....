import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import './AuthPage.css';

const RegisterPage = () => {
  const { register, authError, clearError } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState('');

  const handleChange = (e) => {
    clearError();
    setLocalError('');
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password.length < 6) {
      setLocalError('Password must be at least 6 characters.');
      return;
    }
    if (form.password !== form.confirm) {
      setLocalError('Passwords do not match.');
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    const ok = register({ name: form.name, email: form.email, password: form.password });
    setLoading(false);
    if (ok) navigate('/');
  };

  const error = localError || authError;

  return (
    <div className="auth-page">
      <div className="auth-page__orb auth-page__orb--1" />
      <div className="auth-page__orb auth-page__orb--2" />

      <div className="auth-page__card">
        <Link to="/" className="auth-page__logo">
          <img src="/logo.png" alt="TradeHub" />
          <span>Trade<strong>Hub</strong></span>
        </Link>

        <h1 className="auth-page__title">Create Account</h1>
        <p className="auth-page__subtitle">Join Nashik's No.1 Trading Institute</p>

        {error && (
          <div className="auth-page__error" role="alert">
            ⚠️ {error}
          </div>
        )}

        <form className="auth-page__form" onSubmit={handleSubmit} noValidate>
          <div className="auth-page__field">
            <label htmlFor="reg-name">Full Name</label>
            <input
              id="reg-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              autoComplete="name"
            />
          </div>

          <div className="auth-page__field">
            <label htmlFor="reg-email">Email Address</label>
            <input
              id="reg-email"
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
            <label htmlFor="reg-password">Password</label>
            <div className="auth-page__input-wrap">
              <input
                id="reg-password"
                type={showPass ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Min. 6 characters"
                required
                autoComplete="new-password"
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

          <div className="auth-page__field">
            <label htmlFor="reg-confirm">Confirm Password</label>
            <input
              id="reg-confirm"
              type={showPass ? 'text' : 'password'}
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              placeholder="Re-enter password"
              required
              autoComplete="new-password"
            />
          </div>

          <Button
            variant="accent"
            size="lg"
            type="submit"
            className="auth-page__submit"
            disabled={loading}
          >
            {loading ? (
              <span className="auth-page__spinner" />
            ) : (
              <><UserPlus size={16} /> Create Account</>
            )}
          </Button>
        </form>

        <p className="auth-page__footer-text">
          Already have an account?{' '}
          <Link to="/login" className="auth-page__link">
            Sign in →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
