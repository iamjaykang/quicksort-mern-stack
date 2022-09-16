import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3080/api',
})

export const insertLaptop = payload => api.post(`/laptop`, payload)
export const getAllLaptops = () => api.get(`/laptops`)
export const updateLaptopById = (id, payload) => api.put(`/laptop/${id}`, payload)
export const deleteLaptopById = id => api.delete(`/laptop/${id}`)
export const getLaptopById = id => api.get(`/laptop/${id}`)

const apis = {
    insertLaptop,
    getAllLaptops,
    updateLaptopById,
    deleteLaptopById,
    getLaptopById,
}

export default apis