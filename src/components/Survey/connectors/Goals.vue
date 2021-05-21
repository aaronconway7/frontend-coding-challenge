<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Goals',
    components: {
      ThvButton,
      CheckButton
    },
    data () {
      return {
        goals: {
          improveEnergy: {
            name: 'Energy'
          },
          improveFitness: {
            name: 'Fitness'
          },
          improveLongTermHealth: {
            name: 'Long-term health'
          },
          improveMood: {
            name: 'Mood'
          },
          improveSleep: {
            name: 'Sleep'
          },
          improveWeight: {
            name: 'Weight'
          }
        }
      }
    },
    methods: {
      submit () {
        this.$router.push('/diet')
      },
      back () {
        this.$router.push('/name')
      },
      toggleGoal (goal) {
        if (this.goalsSelected.includes(goal)) {
          this.$store.commit('survey/removeGoal', goal)
        } else {
          this.$store.commit('survey/addGoal', goal)
        }
      }
    },
    computed: {
      name () {
        return this.$store.getters['survey/name']
      },
      goalsSelected () {
        return this.$store.getters['survey/goals']
      }
    },
    created () {
      this.MAX_GOALS_ALLOWED = 4
      this.$store.commit('survey/currentStep', 2)
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__goals align-center">
        <h1>Nice to meet you {{ name }}. What would you like to focus on?</h1>
        <p class="body--large question-description">Choose up to {{ MAX_GOALS_ALLOWED }}</p>
        <div class="spacer sp__top--sm"></div>
        <check-button
          v-for="(goal, key) in goals"
          :key="key"
          :text="goal.name"
          :value="key"
          :selected="goalsSelected.includes(key)"
          @toggle-selected="toggleGoal"
          :disabled="goalsSelected.length === MAX_GOALS_ALLOWED && !goalsSelected.includes(key)"
        ></check-button>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button
              element="button"
              size="large"
              :disabled="goalsSelected.length === 0"
              @click="submit"
            >Next</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
