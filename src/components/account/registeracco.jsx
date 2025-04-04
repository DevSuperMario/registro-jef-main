import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './registeracco.css';

export default function FormPropsTextFields({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  setEmailValid // <- novo prop pra atualizar validade do email
}) {
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(value);
    setEmailValid(isValid);
    setEmail(value);
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '300px' } }}
      noValidate
      autoComplete="off"
    >
      <div className="dados-conta">
        <div>
          <div className="title-sec">
            <h4>Dados da Conta</h4>
          </div>
          <TextField
            required
            label="Email"
            value={email}
            onChange={(e) => validateEmail(e.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            type="password"
            label="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            type="password"
            label="Repita a senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
    </Box>
  );
}
