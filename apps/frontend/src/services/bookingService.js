import api from "./api";

// use VITE_API_URL=http://localhost:3001/api no .env do front
// endpoint padrão: /reservas (ajuste se seu back usar outro)
const BASE = import.meta.env.VITE_BOOKING_ENDPOINT || "/reservas";

export const createBooking = (payload) => api.post(BASE, payload);
