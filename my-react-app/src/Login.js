import React, { useState } from 'react';
import { ReactDOM } from 'react-dom';
import * as Components from './LoginComponent';
import './Login.css';
import { Link, Navigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signIn, toggle] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleLogin = () => {
    // Replace 'yourUsername' and 'yourPassword' with your actual login credentials
    if (username === 'nhinhi' && password === '19111998') {
      setLoggedIn(true);
    } else {
      alert('Wrong username or password, Nhi Nhi dump dump!!!');
    }
  }

  if (loggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Components.Container>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <Components.Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Components.Button onClick={handleLogin}>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hello, Nhi Nhi!</Components.Title>
            <Components.Paragraph>
              Enjoy your special day with this website first to select a dinner location so Nhut Nhut can order ok?
            </Components.Paragraph>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default Login;
