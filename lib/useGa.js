import { createContext, useContext } from 'react'

const gaContext = new  createContext()

export const GaProvider = gaContext.Provider

export const useGa = () => useContext(gaContext)
