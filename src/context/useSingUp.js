import React, {
  createContext,
  useState,
  useContext
 } from "react";
 
import SingUp from '../services/singup';

const SingUpContext = createContext();

export default function SingUpProvider({ children }) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [wasSended, setWasSended] = useState(null)

    const singUp = (payload) => {
      setLoading(true)

      SingUp
        .setSingUp(payload)
        .then(setWasSended)
        .catch(setError)
        .finally(() => setLoading(false))
    }

  return (
    <SingUpContext.Provider
      value={{
        loading,
        singUp,
        wasSended,
        error
      }}>
      {children}
    </SingUpContext.Provider>
  )
}

export function useSingUp() {
  const context = useContext(SingUpContext);
  const {
    loading,
    singUp,
    wasSended,
    error
  } = context;

  return {
    loading,
    singUp,
    wasSended,
    error
   };
}
