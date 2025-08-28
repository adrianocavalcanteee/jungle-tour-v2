import { useEffect, useState } from 'react';
import { getEstabelecimentos } from '../services/estabelecimentoService';

const EstabelecimentosPage = () => {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEstabelecimentos();
  }, []);

  const loadEstabelecimentos = async () => {
    try {
      const data = await getEstabelecimentos();
      setEstabelecimentos(data);
      console.log('Estabelecimentos carregados:', data);
    } catch (error) {
      console.error('Erro ao carregar estabelecimentos:', error);
      alert('Erro ao carregar estabelecimentos');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="container">
      <h2>Estabelecimentos</h2>
      <div className="estabelecimentos-grid">
        {estabelecimentos.map(estab => (
          <div key={estab.id} className="estabelecimento-card">
            <h3>{estab.nome}</h3>
            <p>{estab.endereco}</p>
            <p>Tipo: {estab.tipo}</p>
            <button>Ver detalhes</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstabelecimentosPage;