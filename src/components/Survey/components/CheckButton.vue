<script>
  export default {
    name: 'CheckButton',
    props: {
      text: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      selected: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggleSelected () {
        this.$emit('toggle-selected', this.value)
      }
    }
  }
</script>

<template>  
  <div class="check-button" :class="{ 'check-button--selected': selected, 'check-button--disabled': disabled }" @click="toggleSelected" tabindex="0">
    <p class="check-button__text body--large">{{ text }}</p>
  </div>
</template>

<style lang="css">
  .check-button {
    background: #fff;
    border: 1px solid #ced0d9;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;
    font-weight: 400;
    transition: .2s;
    padding: 0 10px;
    border-radius: .25rem;        
  }

  @media (min-width: 768px) {
    .check-button {
      height: 120px;
      margin-bottom: 20px;
    }
  }

  .check-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 0.0625rem 0.25rem 0 rgba(61,66,80,.18);
  }

  .check-button:focus {
    box-shadow: 0 0 3px 3px rgba(62,202,221,.5);
    outline: none;
  }

  .check-button--selected {
    border: 2px solid #3ecadd;
    background: #f4fcfd;
    box-shadow: none;
  }

  .check-button--disabled {
    border: 1px solid #e5e7f1;
    background: #fff;
    box-shadow: none;
    color: #ced0d9;
    pointer-events: none;
    opacity: 0.5;
  }

  .check-button--disabled:hover {
    outline: none
  }

  .check-button__text {
    color: #3d4250
  }
</style>
