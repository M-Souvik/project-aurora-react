import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import HolographicBackground from './HolographicBackground';
import './FuturisticAuth.css';

export const FuturisticAuth= () => {
  const [isLogin, setIsLogin] = useState(true);

  const formAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    reset: true,
    config: config.wobbly,
  });

  const switchAnimation = useSpring({
    left: isLogin ? '0%' : '50%',
    config: config.gentle,
  });

  return (
    <div className="futuristic-auth">
      <HolographicBackground />
      <animated.div style={formAnimation} className="auth-container">
        <h1 className="title">Event Horizon</h1>
        <div className="form-switch">
          <animated.div style={switchAnimation} className="switch-background" />
          <button
            className={`switch-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`switch-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </animated.div>
    </div>
  );
};


