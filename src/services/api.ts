import axios from 'axios';
import axiosTauriAdapter from 'axios-tauri-adapter';

const api = axios.create({
  baseURL: `http://localhost:3000`,
  adapter: axiosTauriAdapter,
});

export default api;
