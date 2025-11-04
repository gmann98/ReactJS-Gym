import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h3" gutterBottom>
        Bienvenido al Panel del Gimnasio 🏋️‍♂️
      </Typography>
      <Typography variant="h6" mb={4}>
        Aquí podrías ver tus rutinas, progreso, asistencia, etc.
      </Typography>
      <Button variant="contained" color="secondary" onClick={() => navigate('/')}>
        Cerrar Sesión
      </Button>
    </Box>
  );
};

export default Dashboard;
