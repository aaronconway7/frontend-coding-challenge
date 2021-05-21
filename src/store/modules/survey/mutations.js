import { initialState } from './state'

export default {
  name (state, name) {
    state.name = name
  },
  addGoal (state, goal) {
    state.goals = [...state.goals, goal]
  },
  removeGoal (state, goal) {
    state.goals = state.goals.filter(g => g !== goal)
  },
  diet (state, diet) {
    state.diet = diet
  },
  dob (state, dob) {
    state.dob = dob
  },
  currentStep (state, step) {
    state.currentStep = step
  },
  error (state, error) {
    state.error = error
  },
  reset (state) {
    Object.assign(state, initialState)
  }
}
