import React, {
  createContext,
  useState,
  useContext,
  useEffect
 } from "react";
 
import SetSalesDetail from '../services/salesDetail';

const SalesDetailContext = createContext();

export default function SalesDetailProvider({ children }) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [salesDetail, setSalesDetail] = useState(null)
    
    const getterSalesDetail = (payload) => {
      setLoading(true)

      SetSalesDetail
        .getSalesDetail(payload)
        .then(setSalesDetail)
        .catch(setError)
        .finally(() => setLoading(false))
    }

    useEffect(() => {
      getterSalesDetail()
    }, [])


  return (
    <SalesDetailContext.Provider
      value={{
        loading,
        salesDetail,
        error
      }}>
      {children}
    </SalesDetailContext.Provider>
  )
}

export function useSalesDetail() {
  const context = useContext(SalesDetailContext);
  const {
    loading,
    salesDetail,
    error
  } = context;

  return {
    loading,
    salesDetail,
    error
   };
}
