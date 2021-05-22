<script>
  import Thrivaling from '@/assets/images/thrivaling.png'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'SuccessCard',
    components: {
      ThvButton
    },
    props: {
      name: {
        type: String,
        required: true
      },
      goals: {
        type: Array,
        required: true,
        validator: value => {
          return value.length > 0
        }
      },
      diet: {
        type: String,
        required: true
      },
      dob: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        answers: [
          { label: 'Name', value: this.name },
          { label: 'Goals', value: this.goals.join(', ') },
          { label: 'Diet', value: this.diet },
          { label: 'DOB', value: new Date(this.dob).toLocaleDateString() }
        ]
      }
    },
    computed: {
      thrivalingSrc () {
        return Thrivaling
      }
    },
    methods: {
      startOver () {
        this.$emit('start-over')
      }
    }
  }
</script>

<template>
  <div class="success-card">
    <div class="success-card__answer" v-for="(answer, index) in answers" :key="answer.label">
      <span class="success-card__label">{{ answer.label }}</span>
      <p class="success-card__value">{{ answer.value }}</p>
      <div class="spacer" :class="index === answers.length - 1 ?'sp__top--sm' : 'sp__top--xs'"></div>
    </div>
    <div class="cell align-center">
      <thv-button element="button" size="large" @click="startOver">Start Over</thv-button>
    </div>
  </div>
</template>

<style lang='css'>
  .success-card {
    padding: 30px;
    box-shadow: 0px 6px 20px 0px #3D425018; /* rgba(61, 66, 80, 0.18) */
    text-align: left;
    border-radius: 10px;
  }

  .success-card__label {
    font-size: 14px;
    line-height: 21px;
    color: #99A2BF;
  }

  .success-card__value {
    font-size: 16px;
    line-height: 24px;
    color: #3D4250;
  }

</style>
