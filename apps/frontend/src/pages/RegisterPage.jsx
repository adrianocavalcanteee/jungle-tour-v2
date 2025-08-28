import { useState } from 'react';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    tipo: 'cliente'
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await register(formData);
      console.log('Registro bem-sucedido:', response);
      alert('Cadastro realizado! Faça login.');
      navigate('/', { state: { openLogin: true }, replace: true });
    } catch (error) {
      console.error('Erro no registro:', error);
      alert(error.message || 'Erro ao cadastrar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome completo"
          value={formData.nome}
          onChange={(e) => setFormData({...formData, nome: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={formData.senha}
          onChange={(e) => setFormData({...formData, senha: e.target.value})}
          required
        />
        <select
          value={formData.tipo}
          onChange={(e) => setFormData({...formData, tipo: e.target.value})}
        >
          <option value="cliente">Cliente</option>
          <option value="fornecedor">Fornecedor</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;