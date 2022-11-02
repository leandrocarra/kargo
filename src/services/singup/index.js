import api from "../api";

async function setSingUp(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.post(`/users/`, {
        payload
      })
      resolve(data)
    } catch (error) {
      reject({
        message: 'Não possível listar as vagas',
        detail: error
      })
    }
  })
}


export default {
  setSingUp
}
