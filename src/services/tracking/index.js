import api from "../api";

async function getAllTracking(initialDate, finalDate) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data:{data} } = await api.get(`/tracking/?start_date=${initialDate}&end_date=${finalDate}`)
      resolve(data)
    } catch (error) {
      reject({
        message: 'Não possível listar os cadidatos para essa vaga',
        detail: error
      })
    }
  })
}

async function getTrackingId(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data:{data} } = await api.get(`/tracking/${id}`)
      resolve(data)
    } catch (error) {
      reject({
        message: 'Não possível listar os cadidatos para essa vaga',
        detail: error
      })
    }
  })
}

export default {
  getAllTracking,
  getTrackingId
}
