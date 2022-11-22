import React, {
  createContext,
  useState,
  useContext,
  useEffect
 } from "react";
 
import SetSales from '../services/sales';

const SalesContext = createContext();

export default function SalesProvider({ children }) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [sales, setSales] = useState(null)

    const getterSales = (payload) => {
      setLoading(true)

      SetSales
        .getSales(payload)
        .then(setSales)
        .catch(setError)
        .finally(() => setLoading(false))
    }

    useEffect(() => {
      getterSales()
    }, [])


  return (
    <SalesContext.Provider
      value={{
        loading,
        sales,
        error
      }}>
      {children}
    </SalesContext.Provider>
  )
}

export function useSales() {
  const context = useContext(SalesContext);
  const {
    loading,
    sales,
    error
  } = context;

  return {
    loading,
    sales,
    error
   };
}
