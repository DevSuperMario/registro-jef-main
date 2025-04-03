import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputMask from 'react-input-mask';
import { useFormControl } from '@mui/material/FormControl';
import './registeracco.css'

export default function FormPropsTextFields() {
  return (
    
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m : 1, width: '300px' } }}
      noValidate
      autoComplete="off"
    >
      
      <div class="dados-conta">
        <div>
          <div class='title-sec'>
            <h4>Dados da Conta</h4>
            </div>
          <TextField
            required
            id="outlined-required"
            label="Email"
          />
        </div>
        <div >
          <TextField 
            required
            id="outlined-required"
            type="password"
            label="Senha"
          />
        </div>
        <div >
          <TextField
            required
            id="outlined-required"
            type="password"
            label="Repita a senha"
          />
        </div>
      </div>
      
    </Box>
  );
}