import React, { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
    },
    secundary: {
      main: '#8800FF',
      light: '#AA4AFF',
      dark: '#480087',
      contrastText: '#ffffff',
    },
  },
});

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!emailValid) {
      alert('Por favor, insira um email válido!');
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas precisam ser iguais!');
      return;
    }

    // Salvar no localStorage
    const listaCadastro = JSON.parse(localStorage.getItem('listaCadastro')) || [];
    listaCadastro.push({ email, password });
    localStorage.setItem('listaCadastro', JSON.stringify(listaCadastro));

    Swal.fire({
      icon: 'success',
      title: 'Cadastrado com sucesso!',
      text: 'Sua conta foi registrada com sucesso!',
      customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        confirmButton: 'custom-swal-button',
        icon: 'custom-swal-icon'
      }
    }).then(() => {
      navigate('/');
    });
  };

  const isFormValid = email !== '' && password !== '' && confirmPassword !== '';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(/\S+@\S+\.\S+/.test(e.target.value));
  };

  return (
    <div>
      <h2>Registre-se</h2>
      <div>
        <label>Email *</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label>Senha *</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Repita a senha *</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button
        onClick={handleRegister}
        disabled={!isFormValid}
        style={{ marginTop: '16px' }}
      >
        FINALIZAR CADASTRO
      </button>
    </div>
  );
}

export default Register;