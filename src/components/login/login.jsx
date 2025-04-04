import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      alert("Preencha todos os campos!");
    } else {
      alert("Login realizado com sucesso!");
      onLogin(); // Chama a função passada pelo componente pai
    }
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '300px' } }}
      noValidate
      autoComplete="off"
    >

      <div class="form">
        <div>
          <TextField
            required
            id="outlined-required"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Senha"
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className="botao">
          <Button
            variant="contained"
            color="secundary"
            fullWidth
            onClick={handleLogin}
            sx={{ borderRadius: '20px' }}
          >
            Entrar
          </Button>
        </div>

      </div>
    </Box>
  );
}
