import { useState } from 'react';
import { createEstabelecimento } from '../services/estabelecimentoService';
import { createCombo } from '../services/comboService';

const FornecedorPage = () => {
  const [showEstabelecimentoForm, setShowEstabelecimentoForm] = useState(false);
  const [showComboForm, setShowComboForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [estabelecimentoData, setEstabelecimentoData] = useState({
    nome: '',
    endereco: '',
    tipo: 'restaurante'
  });

  const [comboData, setComboData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    estabelecimentoId: ''
  });

  const handleCreateEstabelecimento = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const token = localStorage.getItem('token');
      const response = await createEstabelecimento(estabelecimentoData, token);
      console.log('Estabelecimento criado:', response);
      alert('Estabelecimento criado com sucesso!');
      setEstabelecimentoData({ nome: '', endereco: '', tipo: 'restaurante' });
    } catch (error) {
      console.error('Erro ao criar estabelecimento:', error);
      alert(error.message || 'Erro ao criar estabelecimento');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCombo = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const token = localStorage.getItem('token');
      const response = await createCombo(comboData, token);
      console.log('Combo criado:', response);
      alert('Combo criado com sucesso!');
      setComboData({ nome: '', descricao: '', preco: '', estabelecimentoId: '' });
    } catch (error) {
      console.error('Erro ao criar combo:', error);
      alert(error.message || 'Erro ao criar combo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Painel do Fornecedor</h2>
      
      <div className="fornecedor-actions">
        <button onClick={() => setShowEstabelecimentoForm(!showEstabelecimentoForm)}>
          Cadastrar Estabelecimento
        </button>
        <button onClick={() => setShowComboForm(!showComboForm)}>
          Criar Combo
        </button>
      </div>

      {showEstabelecimentoForm && (
        <form onSubmit={handleCreateEstabelecimento}>
          <h3>Novo Estabelecimento</h3>
          <input
            type="text"
            placeholder="Nome"
            value={estabelecimentoData.nome}
            onChange={(e) => setEstabelecimentoData({...estabelecimentoData, nome: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Endereço"
            value={estabelecimentoData.endereco}
            onChange={(e) => setEstabelecimentoData({...estabelecimentoData, endereco: e.target.value})}
            required
          />
          <select
            value={estabelecimentoData.tipo}
            onChange={(e) => setEstabelecimentoData({...estabelecimentoData, tipo: e.target.value})}
          >
            <option value="restaurante">Restaurante</option>
            <option value="hotel">Hotel</option>
            <option value="pousada">Pousada</option>
          </select>
          <button type="submit" disabled={loading}>
            {loading ? 'Criando...' : 'Criar Estabelecimento'}
          </button>
        </form>
      )}

      {showComboForm && (
        <form onSubmit={handleCreateCombo}>
          <h3>Novo Combo</h3>
          <input
            type="text"
            placeholder="Nome do combo"
            value={comboData.nome}
            onChange={(e) => setComboData({...comboData, nome: e.target.value})}
            required
          />
          <textarea
            placeholder="Descrição"
            value={comboData.descricao}
            onChange={(e) => setComboData({...comboData, descricao: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="Preço"
            value={comboData.preco}
            onChange={(e) => setComboData({...comboData, preco: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="ID do Estabelecimento"
            value={comboData.estabelecimentoId}
            onChange={(e) => setComboData({...comboData, estabelecimentoId: e.target.value})}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Criando...' : 'Criar Combo'}
          </button>
        </form>
      )}
    </div>
  );
};

export default FornecedorPage;