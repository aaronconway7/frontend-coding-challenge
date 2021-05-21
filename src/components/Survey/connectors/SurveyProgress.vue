<script>
  import ProgressBar from '@/components/Shared/ProgressBar'

  export default {
    name: 'SurveyProgress',
    components: {
      ProgressBar
    },
    data () {
      return {
        stages: ['name', 'goals', 'diet', 'dob']
      }
    },
    computed: {
      currentStep () {
        return this.$store.getters['survey/currentStep']
      }
    }
  }
</script>

<template>  
  <div class="progress-bar-container">
    <progress-bar :currentStep='currentStep' :totalSteps='stages.length'></progress-bar>
  </div>
</template>

<style lang="css">
  .progress-bar-container {
    display: flex;
    flex-wrap: nowrap;
    width: 80px;
    align-items: center;
  }
</style>
