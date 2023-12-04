import React, { createContext, useContext, useEffect, useReducer } from 'react';

const FavoriteContext = createContext();

const initialFavoritesState = JSON.parse(localStorage.getItem('favorites')) || [];

function favoritesReducer(state, action) {
    switch (action.type) {
      case 'ADD_TO_FAVORITES':
        const existingFavorite = state.find((item) => item.id === action.payload.id);
        if (!existingFavorite) {
          return [...state, action.payload];
        }
        return state;
      default:
        return state;
    }
}

export function FavoriteProvider({ children }) {
    const [favorites, favoritesDispatch] = useReducer(favoritesReducer, initialFavoritesState);
    
    function addFavorite(product) {
      favoritesDispatch({ type: 'ADD_TO_FAVORITES', payload: { ...product, favorite: true } });
    }

    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
    
    return (
        <FavoriteContext.Provider value={{ favorites, addFavorite }}>
          {children}
        </FavoriteContext.Provider>
    );
}

export function useFavorite() {
    return useContext(FavoriteContext);
  }