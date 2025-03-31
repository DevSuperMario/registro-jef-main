import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Register.css'
import RegisterForm from './components/registerform'
import Login from './components/login'
import { createTheme, ThemeProvider } from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';
import Logo from '../src/assets/GYM.png'
import Img from '../src/assets/BG.png'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App.jsx'
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

});

function Register() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div class='formulario'>
    <div className="gradient"></div>
      
      <div class='img-lateral'>
        <img src={Img}/>
      </div>
        
      <div class='body-form'>
        <div class='logo'>
          <img src={Logo}/>
        </div>

        <div class="reg-body-form">
          <div class="title">
            <h3>Registre-se</h3>
          </div>
          <ThemeProvider theme={theme}>
            <RegisterForm />
          </ThemeProvider>
        </div>

        <Link to="/">Já tem conta? Entre!</Link>
        
      </div>
      
    </div>
    </>
  )
}

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default Register
