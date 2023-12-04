/* eslint-disable no-useless-catch */
import axios from 'axios';
import { createContext, useContext, useReducer } from 'react';

const initialState = {
  isAuthenticated: true,
  email: localStorage.getItem('email') || null,
};

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        email: action.payload,
        password: action.payload
      };
    case 'LOGOUT':
      return {
        isAuthenticated: false,
        password: null,
        email: null,
      };
    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (data) => {
    localStorage.setItem('email', data.email);
    localStorage.setItem('password', data.password);
    localStorage.setItem('isAuthenticated', true);
    dispatch({ type: 'LOGIN', payload: data.email, isAuthenticated:true });
  };

  const logout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('isAuthenticated');
    dispatch({ type: 'LOGOUT' });
  };

  const sendRequest = async (url, method, data) => {
    try {
      const response = await axios({
        method,
        url,
        data,
      });

      if (response.status === 200 || response.status === 201) {
        login(data);
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ state, login, logout, sendRequest }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
