import { useState } from 'react';
import './App.css';
import Login from './components/login';
import { createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import Logo from '../src/assets/GYM.png';
import Img from '../src/assets/BG.png';
import Register from './Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterAcco from './RegisterAcco.jsx'
import { Link } from "react-router-dom";



const theme = createTheme({
  palette: {
    primary: {
      main: '#8800FF',  
      light: '#AA4AFF',
      dark: '#480087',
      contrastText: '#242105',
    },
    button: {
      main: '#ffffff',
      light: '#8800FF',
      dark: '#C37FFF',
      contrastText: '#8800FF',
    }
  },
})

function Home() {
  return (
    <div className='tela'>
      
      <div className="gradient"></div>
      
      <div className='formulario'>
        <div className='img-lateral'>
          <img src={Img} />
        </div>

        <div className='body-form'>
          <div className='logo'>
            <img src={Logo} />
          </div>
          
          <ThemeProvider theme={theme}>
            <div class='login'>
              <div class='title-log'>
                <h3>Entrar</h3>
              </div>
              <div className="form-login">
                <Login />
              </div>
              <Link to="/register">Não tem conta? Cadastre-se!</Link>
              <div className='botao'>
                <Button variant="contained" className='botao' color='button'>Entrar</Button>
              </div>
            </div>
          </ThemeProvider>
        </div>

      </div>

    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerAcco" element={<RegisterAcco />} />
      </Routes>
    </Router>
  );
}

export default App;
