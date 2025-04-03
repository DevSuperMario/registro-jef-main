import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../login/login.css'
export default function FormPropsTextFields() {
  return (
    
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m : 1, width: '300px' } }}
      noValidate
      autoComplete="off"
    >

      <div >
        <TextField
          required
          id="outlined-required"
          label="Email"
        />
      </div>
      <div>
        <TextField
          label="Senha"
          id="outlined-password-input"
          type="password"
          autoComplete="current-password"
        />
      </div>
    </Box>
  );
}