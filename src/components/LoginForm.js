import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useAuth } from './AuthContext';

function LoginForm() {
    const { login } = useAuth();
      const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Make a POST request to the login API
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const userData = await response.json();
      login(userData);
    } else {
      // Handle login error
    }
  };

  return (
    <div>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}

export default LoginForm;
