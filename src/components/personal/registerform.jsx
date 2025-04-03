import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../login/login.css';

export default function FormPropsTextFields() {
  const [telefone, setTelefone] = React.useState('');
  const [cpf, setCpf] = React.useState('');

  // ✅ Função para formatar CPF (XXX.XXX.XXX-XX)
  const formatCPF = (value) => {
    return value
      .replace(/\D/g, '') // Remove tudo que não for número
      .replace(/(\d{3})(\d)/, '$1.$2') // Coloca o primeiro ponto
      .replace(/(\d{3})(\d)/, '$1.$2') // Coloca o segundo ponto
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2') // Coloca o traço
      .slice(0, 14); // Limita ao tamanho correto
  };

  // ✅ Função para formatar Telefone ((XX) XXXXX-XXXX)
  const formatTelefone = (value) => {
    return value
      .replace(/\D/g, '') // Remove tudo que não for número
      .replace(/(\d{2})(\d)/, '($1) $2') // Coloca os parênteses
      .replace(/(\d{5})(\d)/, '$1-$2') // Coloca o traço
      .slice(0, 15); // Limita ao tamanho correto
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
          <TextField required id="nome" label="Nome" />
        </div>

        {/* ✅ Campo de Telefone com formatação manual */}
        <div>
          <TextField
            required
            label="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(formatTelefone(e.target.value))}
          />
        </div>

        {/* ✅ Campo de CPF com formatação manual */}
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
