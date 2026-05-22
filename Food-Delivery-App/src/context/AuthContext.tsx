import React, {
  createContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  userToken: string | null;
  login: () => void;
  logout: () => void;
}

export const AuthContext =
  createContext<AuthContextType>({
    userToken: null,
    login: () => {},
    logout: () => {},
  });

export const AuthProvider = ({
  children,
}: any) => {
  const [userToken, setUserToken] =
    useState<string | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem(
      'token'
    );

    if (token) {
      setUserToken(token);
    }
  };

  const login = async () => {
    await AsyncStorage.setItem(
      'token',
      'demo-token'
    );

    setUserToken('demo-token');
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');

    setUserToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        userToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};