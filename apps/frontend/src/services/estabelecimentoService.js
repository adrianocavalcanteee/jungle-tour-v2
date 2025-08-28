import api from './api';

export const getEstabelecimentos = async () => {
  try {
    const response = await api.get('/estabelecimento');
    console.log('Estabelecimentos carregados:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao carregar estabelecimentos:', error);
    throw error.response?.data || error.message;
  }
};

export const getEstabelecimentoById = async (id) => {
  try {
    const response = await api.get(`/estabelecimento/${id}`);
    console.log('Estabelecimento carregado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao carregar estabelecimento:', error);
    throw error.response?.data || error.message;
  }
};

export const createEstabelecimento = async (data, token) => {
  try {
    const response = await api.post('/estabelecimento', data, {
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('Estabelecimento criado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar estabelecimento:', error);
    throw error.response?.data || error.message;
  }
};

export const updateEstabelecimento = async (id, data, token) => {
  try {
    const response = await api.put(`/estabelecimento/${id}`, data, {
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('Estabelecimento atualizado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar estabelecimento:', error);
    throw error.response?.data || error.message;
  }
};

export const deleteEstabelecimento = async (id, token) => {
  try {
    const response = await api.delete(`/estabelecimento/${id}`, {
      headers: { 
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Estabelecimento deletado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar estabelecimento:', error);
    throw error.response?.data || error.message;
  }
};

export const searchEstabelecimentos = async (query) => {
  try {
    const response = await api.get(`/estabelecimento/search?q=${encodeURIComponent(query)}`);
    console.log('Busca realizada:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro na busca:', error);
    throw error.response?.data || error.message;
  }
};

export const getMyEstabelecimentos = async (token) => {
  try {
    const response = await api.get('/estabelecimento/meus', {
      headers: { 
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Meus estabelecimentos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao carregar meus estabelecimentos:', error);
    throw error.response?.data || error.message;
  }
};