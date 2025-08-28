import api from './api';

export const getComentarios = async (estabelecimentoId = '') => {
  try {
    const url = estabelecimentoId 
      ? `/comentarios?estabelecimentoId=${estabelecimentoId}`
      : '/comentarios';
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getComentarioById = async (id) => {
  try {
    const response = await api.get(`/comentarios/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const createComentario = async (data, token) => {
  try {
    const response = await api.post('/comentarios', data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteComentario = async (id, token) => {
  try {
    const response = await api.delete(`/comentarios/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};