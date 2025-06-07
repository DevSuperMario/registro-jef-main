import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../login/login.css';

export default function RegisterForm({
  nome,
  setNome,
  telefone,
  setTelefone,
  cpf,
  setCpf
}) {
  const [errors, setErrors] = React.useState({
    nome: '',
    telefone: '',
    cpf: ''
  });

  const formatCPF = (value) =>
    value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .slice(0, 14);

  const formatTelefone = (value) =>
    value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);

  const handleBlur = (field) => {
    setErrors(prev => {
      const e = { ...prev };
      if (field === 'nome') {
        e.nome = nome.trim() === '' ? 'Campo obrigatório' : '';
      }
      if (field === 'telefone') {
        const digits = telefone.replace(/\D/g, '');
        e.telefone = digits.length < 10 ? 'Telefone inválido' : '';
      }
      if (field === 'cpf') {
        e.cpf = cpf.length < 14 ? 'CPF inválido' : '';
      }
      return e;
    });
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '300px' } }}
      noValidate
      autoComplete="off"
    >
      <div className="dados-pessoais">
        <div className="title-sec">
          <h4>Dados pessoais</h4>
        

        <TextField
          required
          id="nome"
          label="Nome"
          value={nome}
          onChange={e => {
            setNome(e.target.value);
            if (errors.nome) setErrors(prev => ({ ...prev, nome: '' }));
          }}
          onBlur={() => handleBlur('nome')}
          error={!!errors.nome}
          helperText={errors.nome}
        />
</div>
<div>
        <TextField
          required
          label="Telefone"
          value={telefone}
          onChange={e => {
            setTelefone(formatTelefone(e.target.value));
            if (errors.telefone) setErrors(prev => ({ ...prev, telefone: '' }));
          }}
          onBlur={() => handleBlur('telefone')}
          error={!!errors.telefone}
          helperText={errors.telefone}
        />
</div>
<div>
        <TextField
          required
          label="CPF"
          value={cpf}
          onChange={e => {
            setCpf(formatCPF(e.target.value));
            if (errors.cpf) setErrors(prev => ({ ...prev, cpf: '' }));
          }}
          onBlur={() => handleBlur('cpf')}
          error={!!errors.cpf}
          helperText={errors.cpf}
        />
        </div>
      </div>
    </Box>
  );
}
