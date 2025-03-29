import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

const authService = {
  login: async (nitcId, password) => {
    const response = await axios.post(API_URL + '/login', {
      username: nitcId,
      password: password,
    });
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }
};

export default authService;  // Named export