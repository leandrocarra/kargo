import api from "../api";

async function getSales(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.get(`/orders/?merchant_id=f69b545a-2069-4757-989a-4357bfd30e88&company_id=dcebde82-f1c1-4d6d-97a5-76ca672535f7&start_date=2022-10-01 00:00:00&end_date=2022-10-10 00:00:00&prominent_status=1100&page_size=10&page=1`)
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
  getSales
}
