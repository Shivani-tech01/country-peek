import { createContext, useReducer, useEffect, useContext } from 'react'

// 1. Reducer
function favouritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVOURITE': {
      const exists = state.some(c => c.cca3 === action.payload.cca3)
      if (exists) return state
      return [...state, action.payload]
    }

    case 'REMOVE_FAVOURITE':
      return state.filter(c => c.cca3 !== action.payload)

    default:
      return state
  }
}

// 2. Context
const FavouritesContext = createContext()

export function FavouritesProvider({ children }) {
  // 3. Load from localStorage
  const initialState = JSON.parse(localStorage.getItem('favourites') || '[]')

  // 4. useReducer
  const [favourites, dispatch] = useReducer(favouritesReducer, initialState)

  // 5. Save to localStorage whenever changes happen
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  return (
    <FavouritesContext.Provider value={{ favourites, dispatch }}>
      {children}
    </FavouritesContext.Provider>
  )
}

// 6. Custom hook
export function useFavourites() {
  return useContext(FavouritesContext)
}