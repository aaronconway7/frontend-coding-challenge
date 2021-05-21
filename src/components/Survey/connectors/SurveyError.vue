<script>
  import ErrorMessage from '@/components/Shared/ErrorMessage'

  export default {
    name: 'SurveyError',
    components: {
      ErrorMessage
    },
    computed: {
      error () {
        return this.$store.getters['survey/error']
      }
    }
  }
</script>

<template>
  <div class="survey-error-container">
    <error-message :message="error" v-show="error"></error-message>
  </div>  
</template>

<style lang="css">
  .survey-error-container {
    margin: 0 auto 25px auto;
    max-width: max-content;
  }
</style>