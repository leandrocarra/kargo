import React, {
  createContext,
  useState,
  useEffect,
  useContext
 } from "react";
 
import SingUp from '../services/singup';

const SingUpContext = createContext();

export default function SingUpProvider({ children }) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

    console.log('error', error)
    
    const singUp = (email, name, password, document_id) => {
      setLoading(true)

      SingUp
        .setSingUp(email, name, password, document_id)
        .then(console.log('FUNNFOOO'))
        .catch(setError)
        .finally(() => setLoading(false))
    }

    // useEffect(() => {
    //   singUp()
    // }, [])

  return (
    <SingUpContext.Provider
      value={{
        loading,
        singUp
      }}>
      {children}
    </SingUpContext.Provider>
  )
}

export function useSingUp() {
  const context = useContext(SingUpContext);
  const {
    loading,
    singUp
  } = context;

  return {
    loading,
    singUp
   };
}