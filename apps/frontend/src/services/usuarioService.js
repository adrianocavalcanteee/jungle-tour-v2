import api from './api';

export const getUsuarios = async (token) => {
  try {
    const response = await api.get('/usuarios', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getUsuarioById = async (id, token) => {
  try {
    const response = await api.get(`/usuarios/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateUsuario = async (id, data, token) => {
  try {
    const response = await api.put(`/usuarios/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteUsuario = async (id, token) => {
  try {
    const response = await api.delete(`/usuarios/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};