import { useState } from 'react';
import './log.css';

const Login = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="main">
            <div className="sign-up">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <p>or use your email for registration</p>
                    <input type="text" name="txt" placeholder="Name" required="" />
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="pswd" placeholder="Password" required="" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="sign-in">
                <form action="#">
                    <h1>Sign In</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <p>or use your account</p>
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="pswd" placeholder="Password" required="" />
                    <a href="#">Forget your Password</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button id="signIn" onClick={handleSignInClick}>Sign In</button>
                    </div>
                    <div className="overlay-right">
                        <h1>Hello, friend</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
