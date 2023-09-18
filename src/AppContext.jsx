import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define the initial state
const initialState = {
  user: null, // User authentication state
  products: [], // Product data state
  count: 0, // Count state
  error: null, // Error state
};

// Define the reducer function to handle state changes
const appReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

// Create a context for your app
const AppContext = createContext();

// Create a custom hook for accessing the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Create a context provider component
// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
  // Initialize state and dispatch function using the reducer
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Simulate fetching product data from an API with useEffect
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(`HTTP Error! Status: ${res.status} - ${errorData.message}`);
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      });
  }, []);

  // Create a context value to provide state and dispatch to child components
  const contextValue = {
    state,
    dispatch,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
