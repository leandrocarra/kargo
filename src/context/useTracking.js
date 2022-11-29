import React, {
  createContext,
  useState,
  useEffect,
  useContext
 } from "react";
 
import Tracking from '../services/tracking';

const TrackingContext = createContext();

export default function TrackingProvider({ children }) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [allTracking, setAllTracking] = useState()

    console.log('error', error)
    
    const getTrackings = (initialDate, finalDate) => {
      setLoading(true)

      Tracking
        .getAllTracking(initialDate, finalDate)
        .then(setAllTracking)
        .catch(setError)
        .finally(() => setLoading(false))
    }

    useEffect(() => {
      getTrackings()
    }, [])

  return (
    <TrackingContext.Provider
      value={{
        loading,
        allTracking,
        getTrackings
      }}>
      {children}
    </TrackingContext.Provider>
  )
}

export function useTracking() {
  const context = useContext(TrackingContext);
  const {
    loading,
    allTracking,
    getTrackings
  } = context;

  return {
    loading,
    allTracking,
    getTrackings
   };
}
