import { useState } from 'react'
import './Register.css'
import RegisterForm from './components/personal/registerform.jsx'
import { createTheme, ThemeProvider } from '@mui/material'
import Logo from '../src/assets/GYM.png'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App.jsx'
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

});

function Register() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div class='formulario'>
    <div className="gradient"></div>
      
      
        
      <div class='body-form'>
        <div class='logo'>
          <img src={Logo}/>
        </div>

        <div class="reg-body-form">
          <div class="title">
            <h3>Registre-se</h3>
          </div>
          
          <div>
            <ThemeProvider theme={theme}>
              <div class="reg-form">
                <RegisterForm />
                  <div class="link">
                    <Link to="/">Já tenho conta!</Link>
                  </div>
              </div>
            </ThemeProvider>
          </div>

          <div className='botao'>
            <Link to="/registerAcco">Próximo</Link>
          </div>
          
        </div>

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
        <Route path="/registerAcco" element={<RegisterAcco />} />
      </Routes>
    </Router>
  );
}

export default Register
