import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // Make a POST request to the sign-up API
    const response = await fetch('https://dummyjson.com/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      // Handle successful sign-up
    } else {
      // Handle sign-up error
    }
  };

  return (
    <div>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <Button variant="contained" onClick={handleSignup}>
        Sign Up
      </Button>
    </div>
  );
}

export default SignupForm;
