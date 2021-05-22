export const initialState = {
  name: '',
  goals: [],
  diet: '',
  dob: '',
  currentStep: 0,
  error: ''
}

const state = () => ({
  ...initialState
})

export default state
