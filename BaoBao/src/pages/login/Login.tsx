import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="logo">
                    <img src="" alt="Logo" />
                </div>
                <h1 className="login-title">Login</h1>
                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="social-login">
                    <button className="google-login">
                        <img src="google.svg" alt="Google" />
                        Login with Google
                    </button>
                    <button className="facebook-login">
                        <img src="facebook.svg" alt="Facebook" />
                        Login with Facebook
                    </button>
                </div>
                <div className="login-footer">
                    <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
                    <span>Don't have an account? </span>
                    <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
