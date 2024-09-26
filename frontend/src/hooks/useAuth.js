import { useState } from 'react';
import axios from '../utils/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [role, setRole] = useState(localStorage.getItem('role') || null);
  const navigate = useNavigate(); // To handle redirection based on role

  const register = async (username, email, password, role) => {
    try {
      await axios.post('/auth/register', { username, email, password, role });
      console.log(username,email,password,role)
      toast.success('Registration successful');
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error('Registration failed');
      }
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      const { token, role } = response.data;
      setToken(token);
      setRole(role);
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      toast.success('Login successful');
      navigate(`/${role}Dashboard`); // Redirect based on role
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error('Login failed');
      }
    }
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login'); // Redirect to login page after logout
  };

  return { token, role, register, login, logout };
};
