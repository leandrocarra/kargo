import React, {
  createContext,
  useState,
  useContext,
  useEffect
 } from "react";
 
import SingUp from '../services/singup';

const SingUpContext = createContext();

export default function SingUpProvider({ children }) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [wasSended, setWasSended] = useState(null)
  const [temp, setTemp] = useState(null)

  const setTempAccess = () => (
    localStorage.setItem('tempAccess', JSON.stringify({
      user: temp.email,
      pass: temp.password
    }))
  )

  const singUp = (payload) => {
    setLoading(true)
    setTemp(payload)

    SingUp
      .setSingUp(payload)
      .then(setWasSended)
      .catch(setError)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    wasSended
      ? setTempAccess()
      : console.log('')
  }, [wasSended])

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
