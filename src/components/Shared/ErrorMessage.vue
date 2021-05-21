<script>
  export default {
    name: 'ErrorMessage',
    props: {
      message: {
        type: String,
        default: ''
      }
    }
  }
</script>

<template>  
  <p class="error-message">{{ message }}</p>
</template>

<style lang="css">
  .error-message {
    background-color: #fff;
    border: 1px solid #FA476F;
    color: #FA476F;
    padding: 4px;
    border-radius: 5px;
    font-weight: 400;
    text-align: center;
  }
</style>
