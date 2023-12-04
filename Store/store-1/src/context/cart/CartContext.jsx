import { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext();

const initialCartState = JSON.parse(localStorage.getItem('cart')) || [];
const initialFavoritesState = JSON.parse(localStorage.getItem('favorites')) || [];

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        return [...state, action.payload];
      }
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);
    case 'INCREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'DECREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case 'UPDATE_QUANTITY':
      return action.payload;
    default:
      return state;
  }
}

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

export function CartProvider({ children }) {
  const [cart, cartDispatch] = useReducer(cartReducer, initialCartState);
  const [favorites, favoritesDispatch] = useReducer(favoritesReducer, initialFavoritesState);

  function incrementQuantity(productId) {
    cartDispatch({ type: 'INCREMENT_QUANTITY', payload: productId });
  }

  function decrementQuantity(productId) {
    cartDispatch({ type: 'DECREMENT_QUANTITY', payload: productId });
  }

  function removeItem(productId) {
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  }

  function updateQuantity(newQuantity, productId) {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    cartDispatch({ type: 'UPDATE_QUANTITY', payload: updatedCart });
  }

  function addFavorite(product) {
    favoritesDispatch({ type: 'ADD_TO_FAVORITES', payload: { ...product, favorite: true } });
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <CartContext.Provider value={{ cart, favorites, cartDispatch, incrementQuantity, decrementQuantity, updateQuantity, removeItem, addFavorite }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
