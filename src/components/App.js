import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import TodoList from './TodoList';
import { AuthProvider } from './AuthContext';

function App() {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthProvider> 
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Todo App</Typography>
              <div style={{ marginLeft: 'auto' }}>
                {user ? (
                  <>
                    <Button color="inherit" component={Link} to="/todos">
                      Todo List
                    </Button>
                    <Button color="inherit" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button color="inherit" component={Link} to="/login">
                      Login
                    </Button>
                    <Button color="inherit" component={Link} to="/signup">
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/signup">
              <SignupForm />
            </Route>
            <Route path="/todos">
              {user ? (
                <TodoList />
              ) : (
                <div>
                  <h2>Please login to view your to-do list.</h2>
                  <Button color="primary" component={Link} to="/login">
                    Login
                  </Button>
                </div>
              )}
            </Route>
            <Route path="/">
              <div>
                <h2>Welcome to the Todo App</h2>
                <p>Use the navigation above to get started.</p>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider> 
  );
}

export default App;
