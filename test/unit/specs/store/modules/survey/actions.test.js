import actions, { API_URL } from '@/store/modules/survey/actions'
import axios from 'axios'
import router from '@/router'

let url = ''
let body = {}
let mockError = false

jest.mock('axios', () => ({
  post: (_url, _body) => { 
    return new Promise((resolve, reject) => {
      if (mockError) {
        reject({ response: { data: { error: 'Error Message' } } })
      }

      url = _url
      body = _body
      resolve()
    })
  }
}))

describe('actions', () => {
  describe('sendToApi', () => {
    // Write any useful test based on the sendToApi action logic here

    const name = 'Aaron Conway'
    const goals = ['Energy', 'Fitness']
    const diet = 'No'
    const dob = '1996-07-07T00:00:00.000Z'
    
    const commit = jest.fn()
    const state = { name, goals, diet, dob }
    const badState = { ...state, name: '' }

    it('expect the call to be a request to the "/users" path', async () => {
      await actions.sendToApi({ commit, state })
      expect(url).toBe(`${API_URL}/users`)
    })

    it('expect the request body to be in the correct JSON format', async () => {
      await actions.sendToApi({ commit, state })
      expect(body).toEqual({
        user: {
          Name: name,
          goals,
          diet,
          dob
        }
      })
    })

    // it('expect redirect to "/sucess" path on good request', async () => {
    //   router.push = jest.fn()
    //   await actions.sendToApi({ commit, state: state })
    //   expect(router.push).toHaveBeenCalledWith('/success')
    // })

    it('expect error mutation to be commited on error catch', async () => {
      mockError = true
      await actions.sendToApi({ commit, state: badState })
      expect(commit).toHaveBeenCalledWith('error', 'Error Message')
    })
  })
})
