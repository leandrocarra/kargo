import api from "../api";

async function setSingUp(email, name, password, document_id) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.post(`/users/`, {
        email,
        name,
        password, 
        document_id
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
