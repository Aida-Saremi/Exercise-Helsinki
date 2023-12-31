import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'



const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newPerson => {
  const request = axios.post(baseUrl,newPerson)
  return request.then(response => response.data)
}
const remove = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`)
  return req.then((res) => res.data)
}

const update = (id, updatedPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedPerson)
  console.log(request.data)
  return request

}


export default {  getAll, create , remove , update}