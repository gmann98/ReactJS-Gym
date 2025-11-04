import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ejemplo simple de validación local
    if (user === 'admin' && password === '1234') {
      navigate('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh"
      gap={2}
    >
      <Typography variant="h4" gutterBottom>
        Iniciar Sesión
      </Typography>
      <TextField 
        label="Usuario" 
        variant="outlined" 
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <TextField 
        label="Contraseña" 
        type="password" 
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleLogin}
      >
        Entrar
      </Button>
    </Box>
  );
};

export default Login;
