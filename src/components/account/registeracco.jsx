import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./registeracco.css";

export default function FormPropsTextFields({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  setEmailValid, // <- prop para atualizar validade do email
}) {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (value) => {
    setEmail(value);

    if (value.trim() === "") {
      setErrors((prev) => ({ ...prev, email: "Campo obrigatório" }));
      setEmailValid(false);
    } else if (!emailRegex.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Formato de e-mail inválido" }));
      setEmailValid(false);
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
      setEmailValid(true);
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setErrors((prev) => {
      const err = { ...prev };
      // senha obrigatória
      err.password = value.trim() === "" ? "Campo obrigatório" : "";
      // se já houver algo em confirmPassword, revalida coincidência
      if (confirmPassword) {
        err.confirmPassword =
          confirmPassword !== value ? "As senhas não coincidem" : "";
      }
      return err;
    });
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    setErrors((prev) => {
      const err = { ...prev };
      if (value.trim() === "") {
        err.confirmPassword = "Campo obrigatório";
      } else if (value !== password) {
        err.confirmPassword = "As senhas não coincidem";
      } else {
        err.confirmPassword = "";
      }
      return err;
    });
  };

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "300px" } }}
      noValidate
      autoComplete="off"
    >
      <div className="dados-conta">
        <div className="title-sec">
          <h4>Dados da Conta</h4>
        </div>

        <TextField
          required
          label="Email"
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <div>
          <TextField
            required
            type="password"
            label="Senha"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
          />
        </div>
        <TextField
          required
          type="password"
          label="Repita a senha"
          value={confirmPassword}
          onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />
      </div>
    </Box>
  );
}
