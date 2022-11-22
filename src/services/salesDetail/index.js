import api from "../api";

async function getSalesDetail(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.get(`/orders/detail/?_id=6337a38125dbe100122fa46a`)
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
  getSalesDetail
}
