import request from 'superagent'

const rootUrl = '/api/v1'

export async function getTours() {
  const res = await request.get(rootUrl + '/tours')
  return res.body.tours
}
