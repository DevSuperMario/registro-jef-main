import React, { useState } from 'react';

const RegisterFrom = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
    // Adicione outros campos conforme necessário
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Salva os dados no localStorage
    localStorage.setItem('dadosRegistro', JSON.stringify(formData));
    alert('Dados salvos no localStorage!');
    // Aqui você pode adicionar o restante do seu código de envio
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={formData.nome}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={formData.senha}
        onChange={handleChange}
      />
      {/* Adicione outros campos conforme necessário */}
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegisterFrom;