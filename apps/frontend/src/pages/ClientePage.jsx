import { useEffect, useState } from 'react';
import { getEstabelecimentos } from '../services/estabelecimentoService';
import { getCombos } from '../services/comboService';
import { createComentario } from '../services/comentarioService';

const ClientePage = () => {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [combos, setCombos] = useState([]);
  const [selectedEstabelecimento, setSelectedEstabelecimento] = useState(null);
  const [comentario, setComentario] = useState('');

  useEffect(() => {
    loadDados();
  }, []);

  const loadDados = async () => {
    try {
      const [estabsData, combosData] = await Promise.all([
        getEstabelecimentos(),
        getCombos()
      ]);
      setEstabelecimentos(estabsData);
      setCombos(combosData);
      console.log('Dados carregados:', { estabsData, combosData });
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  const handleComentario = async (estabelecimentoId) => {
    try {
      const token = localStorage.getItem('token');
      await createComentario({
        texto: comentario,
        estabelecimentoId
      }, token);
      alert('Comentário enviado!');
      setComentario('');
    } catch (error) {
      console.error('Erro ao enviar comentário:', error);
      alert(error.message || 'Erro ao enviar comentário');
    }
  };

  return (
    <div className="container">
      <h2>Painel do Cliente</h2>

      <section>
        <h3>Estabelecimentos</h3>
        <div className="grid">
          {estabelecimentos.map(estab => (
            <div key={estab.id} className="card">
              <h4>{estab.nome}</h4>
              <p>{estab.endereco}</p>
              <button onClick={() => setSelectedEstabelecimento(estab)}>
                Ver detalhes
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Combos em Destaque</h3>
        <div className="grid">
          {combos.map(combo => (
            <div key={combo.id} className="card">
              <h4>{combo.nome}</h4>
              <p>{combo.descricao}</p>
              <p>R$ {combo.preco}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedEstabelecimento && (
        <div className="modal">
          <h3>{selectedEstabelecimento.nome}</h3>
          <p>{selectedEstabelecimento.endereco}</p>
          <textarea
            placeholder="Deixe seu comentário"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
          <button onClick={() => handleComentario(selectedEstabelecimento.id)}>
            Enviar Comentário
          </button>
          <button onClick={() => setSelectedEstabelecimento(null)}>
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};

export default ClientePage;