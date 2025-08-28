import { useEffect, useState } from 'react';
import { getProfile } from '../services/authService';
import { updateUsuario } from '../services/usuarioService';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const userData = await getProfile(token);
      setUser(userData);
      setFormData(userData);
      console.log('Perfil carregado:', userData);
    } catch (error) {
      console.error('Erro ao carregar perfil:', error);
      alert('Erro ao carregar perfil');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await updateUsuario(user.id, formData, token);
      setUser(formData);
      setEditing(false);
      alert('Perfil atualizado!');
    } catch (error) {
      console.error('Erro ao atualizar:', error);
      alert(error.message || 'Erro ao atualizar perfil');
    }
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="container">
      <h2>Meu Perfil</h2>
      
      {!editing ? (
        <div>
          <p><strong>Nome:</strong> {user.nome}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Tipo:</strong> {user.tipo}</p>
          <button onClick={() => setEditing(true)}>Editar</button>
        </div>
      ) : (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={formData.nome}
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
            placeholder="Nome"
          />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="Email"
          />
          <button type="submit">Salvar</button>
          <button type="button" onClick={() => setEditing(false)}>Cancelar</button>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;