<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Diet',
    components: {
      ThvButton,
      CheckButton
    },
    data () {
      return {
        diets: {
          no: {
            name: 'No'
          },
          coeliac: {
            name: 'Coeliac'
          },
          lowCarbHighFat: {
            name: 'Low-carb, high-fat'
          },
          paleo: {
            name: 'Paleo'
          },
          pescatarian: {
            name: 'Pescatarian'
          },
          plantBased: {
            name: 'Plant-based'
          },
          other: {
            name: 'Other'
          }
        }
      }
    },
    methods: {
      submit () {
        this.$router.push('/dob')
      },
      back () {
        this.$router.push('/goals')
      },
      toggleDiet (diet) {
        if (this.dietSelected === '') {
          this.$store.commit('survey/diet', diet)
        } else if (diet === this.dietSelected) {
          this.$store.commit('survey/diet', '')
        }
      }
    },
    computed: {
      dietSelected () {
        return this.$store.getters['survey/diet']
      }
    },
    created () {
      this.$store.commit('survey/currentStep', 3)
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__diet align-center">
        <h1>Do you follow a particular diet?</h1>
        <div class="spacer sp__top--sm"></div>
        <check-button
          v-for="(diet, key) in diets"
          :key="key"
          :text="diet.name"
          :value="diet.name"
          :selected="diet.name === dietSelected"
          @toggle-selected="toggleDiet"
          :disabled="dietSelected !== '' && dietSelected !== diet.name"
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
              :disabled="dietSelected === ''"
              @click="submit"
            >Next</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
