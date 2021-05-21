import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi (context) {
    const { name, goals, diet, dob } = context.state
    const body = {
      Name: name,
      goals,
      diet,
      dob
    }
    const config = { headers: { } }
    return axios.post(`${API_URL}/users`, body, config)
  }
}
