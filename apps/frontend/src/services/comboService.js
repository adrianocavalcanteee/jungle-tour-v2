import api from './api';

export const getCombos = async () => {
  try {
    const response = await api.get('/combos');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getComboById = async (id) => {
  try {
    const response = await api.get(`/combos/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const createCombo = async (data, token) => {
  try {
    const response = await api.post('/combos', data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateCombo = async (id, data, token) => {
  try {
    const response = await api.put(`/combos/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteCombo = async (id, token) => {
  try {
    const response = await api.delete(`/combos/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};