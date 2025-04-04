import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../login/login.css';


export default function RegisterForm({ nome, setNome, telefone, setTelefone, cpf, setCpf }) {
  
  const formatCPF = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .slice(0, 14);
  };

  const formatTelefone = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '300px' } }}
      noValidate
      autoComplete="off"
    >
      <div className="dados-pessoais">
        <div>
          <div className="title-sec">
            <h4>Dados pessoais</h4>
          </div>
          <TextField 
            required 
            id="nome" 
            label="Nome" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <TextField
            required
            label="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(formatTelefone(e.target.value))}
          />
        </div>

        <div>
          <TextField
            required
            label="CPF"
            value={cpf}
            onChange={(e) => setCpf(formatCPF(e.target.value))}
          />
        </div>
      </div>
    </Box>
  );
}
