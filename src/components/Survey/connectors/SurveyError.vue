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
  <div class="survey-error">
    <error-message :message="error" v-show="error"></error-message>
  </div>  
</template>

<style lang="css">

</style>