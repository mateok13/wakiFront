import axios from 'axios';

const API_URL = 'https://no-country-hackaton.onrender.com';

export const getNotifications = async (profileId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/notification/${profileId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      'Error detallado:',
      error.response ? error.response.data : error.message
    );
    throw new Error('Error al obtener las notificaciones');
  }
};
