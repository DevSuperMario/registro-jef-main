import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './login.css'
import InputMask from 'react-input-mask';
import { useFormControl } from '@mui/material/FormControl';


export default function FormPropsTextFields() {
  return (
    
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m : 1, width: '300px' } }}
      noValidate
      autoComplete="off"
    >
      
      <div class="dados-pessoais">
        <div>
          <div class='title-sec'>
            <h4>Dados pessoais</h4>
            </div>
          <TextField
            required
            id="outlined-required"
            label="Nome"
          />
        </div>
        <div >
          <TextField 
            required
            id="outlined-required"
            label="Telefone"
          />
        </div>
        <div >
          <TextField
            required
            id="outlined-required"
            label="CPF"
          />
        </div>
      </div>

      <div class="dados-conta">
        <div class='title-sec'>
          <h4>Dados da conta</h4>
          </div>
        <div >
          <TextField
            required
            id="outlined-required"
            label="Email"
          />
        </div>
        <div>
          <TextField
              id="outlined-password-input"
              label="Senha"
              type="password"
              autoComplete="current-password"
            />
          </div>
        <div>
          <TextField
            label="Confirme a senha"
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
          />
        </div>

      </div>
      
    </Box>
  );
}