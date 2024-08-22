// src/service/request/index.js
import axios from 'axios';

class AxiosInstance {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://codercba.com:1888/airbnb/api',  // Hardcoded base URL
      timeout: 10000,  // Set the request timeout in milliseconds
      headers: {
        'Content-Type': 'application/json',  // Default request header
      },
    });

    // Add request interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');  // Retrieve token from local storage
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;  // Set the authorization header
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add response interceptor
    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        console.error('API Error:', error.response || error.message);
        return Promise.reject(error);
      }
    );
  }

  // Define a method for GET requests
  get(url, config = {}) {
    return this.axiosInstance.get(url, config);
  }

  // Define a method for POST requests
  post(url, data, config = {}) {
    return this.axiosInstance.post(url, data, config);
  }

  // Define other methods as needed (e.g., PUT, DELETE)
  put(url, data, config = {}) {
    return this.axiosInstance.put(url, data, config);
  }

  delete(url, config = {}) {
    return this.axiosInstance.delete(url, config);
  }
}

export default new AxiosInstance();
