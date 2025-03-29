import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import { createTheme, ThemeProvider } from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';
import Logo from '../src/assets/GYM.png'
import Img from '../src/assets/BG.png'



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
      dark: '#460083',
      contrastText: '#8800FF',
    }
  },

});

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div class='formulario'>
      
      <div class='img-lateral'>
        <img src={Img}/>
      </div>
        
      <div class='body-form'>
        <div class='logo'>
          <img src={Logo}/>
        </div>

        <ThemeProvider theme={theme}>

          <div class='login'>

            <div class="form-login">
              <h3>Login</h3>
              <Login />
            </div>

            <div class='botao'>
              <Button variant="contained" className='botao' color='button'>Entrar</Button>
            </div>

          </div>

        </ThemeProvider>

      </div>

    </div>
    </>
  )
}

export default App
