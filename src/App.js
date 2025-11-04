import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Footer, Navbar } from './components';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Login from './pages/Login';          // 👈 Agregado
import Dashboard from './pages/Dashboard';  // 👈 Agregado

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
        <Route path='/login' element={<Login />} />         {/* 👈 nueva ruta */}
        <Route path='/dashboard' element={<Dashboard />} /> {/* 👈 nueva ruta */}
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
