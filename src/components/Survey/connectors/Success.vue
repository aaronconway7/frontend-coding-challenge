<script>
  import { mapGetters } from 'vuex'
  import Thrivaling from '@/assets/images/thrivaling.png'
  import SuccessCard from '@/components/Survey/components/SuccessCard'

  export default {
    name: 'Success',
    components: {
      SuccessCard
    },
    computed: {
      thrivalingSrc () {
        return Thrivaling
      },
      ...mapGetters({
        name: 'survey/name',
        goals: 'survey/goals',
        diet: 'survey/diet',
        dob: 'survey/dob'
      })
    },
    methods: {
      startOver () {
        this.$store.commit('survey/reset')
        this.$router.push('/name')
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-4 medium-offset-4">
      <div class="survey-success align-center">
        <img class="survey-success__img" :src="thrivalingSrc" alt="Thrivaling" />
        <div class="spacer sp__top--xs"></div>
        <h1>All done!</h1>
        <div class="spacer sp__top--xs"></div>
        <p class="body--medium survey-success__description">Thank you for completing the survey. The following results have been submitted.</p>
        <div class="spacer sp__top--sm"></div>
        <success-card :name="name" :goals="goals" :diet="diet" :dob="dob" @start-over="startOver"></success-card>
      </div>
    </div>
  </div>
</template>

<style lang='css'>
  .survey-success__img {
    height: 150px;
  }
</style>
