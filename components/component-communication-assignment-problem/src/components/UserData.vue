<template>
  <section>
    <form @submit.prevent="outputUserData">
      <input type="text" v-model="usernameInput">
      <input type="text" v-model="ageInput">
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['set-data'],
  data() {
    return {
      usernameInput: '',
      ageInput: '',
    }
  },
  methods: {
    outputUserData() {
      this.$emit('set-data', this.usernameInput, this.ageInput)
    }
  }
}
</script>

<style>

</style>