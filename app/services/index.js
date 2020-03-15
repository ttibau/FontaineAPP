import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL || 'https://fontaine-api.herokuapp.com'


// Login 
export async function auth(params) {
    console.log(baseUrl + '/auth/authenticate')
    return await axios.post(baseUrl + '/auth/authenticate', params)
}

// Criar conta
// { name, password, email }
export async function register(params){
    return await axios.post(baseUrl + '/auth/register', params)
}

export async function forgotPassword(email){
    return await axios.post(baseUrl + '/auth/forgot-password', params)
}

export async function myInstallations(token) {
    return await axios.get(baseUrl + '/installations/myInstallations', { headers: { 'authorization' : 'Bearer ' + token }})
}

// Resetar a senha
// { email, token, password }
export async function resetPassword(params) {
    return axios.post(baseUrl + '/auth/reset-password', params)
}

// { code, address, productId }
export async function newInstallation(params, token) {
    return axios.post(baseUrl + '/installations', params, { headers: { 'authorization' : 'Bearer ' + token }})
}

export async function getRewards() {
    return axios.get(baseUrl + '/rewards', { headers: { 'authorization' : 'Bearer ' + token }})
}

export async function getProducts() {
    return axios.get(baseUrl + '/products', { headers: { 'authorization' : 'Bearer ' + token }})
}