import axios from 'axios'

import router from '@/router'

export const API_URL = 'http://localhost:3000'

export default {
  async sendToApi ({ commit, state }) {
    const { name, goals, diet, dob } = state
    const body = {
      user: {
        Name: name,
        goals,
        diet,
        dob
      }
    }
    const config = { headers: { 'Content-Type': 'application/json' } }

    return axios.post(`${API_URL}/users`, body, config).then(() => {
      if (router.history.current.path !== '/success') {
        router.push('/success')
      }
    }).catch(error => {
      router.push('/success')
      const errorMessage = error.response.data.error
      commit('error', errorMessage)
    })
  }
}
