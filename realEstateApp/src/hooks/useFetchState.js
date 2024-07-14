import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'Loading':
      return { ...state, isLoading: true, error: false };
    case 'Ready':
      return { ...state, isLoading: false, error: false };
    case 'Error':
      return { ...state, error: true, isLoading: false };
    default:
      throw new Error('Unknown action');
  }
}

export function useFetchState() {
  const [state, dispath] = useReducer(reducer, {
    isLoading: false,
    error: false,
  });
  return [state, dispath];
}
