<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="nameInput">
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="phoneInput">
    </div>
    <div>
      <label>Email</label>
      <input type="text" v-model="emailInput">
    </div>
    <div>
      <button>Add contact</button>
    </div>

  </form>
</template>

<script>

export default {
  emits: ['add-contact'],
  data() {
    return {
      nameInput: '',
      phoneInput: '',
      emailInput: '',
    }
  },
  methods: {
    submitData() {
      this.$emit('add-contact', this.nameInput, this.phoneInput, this.emailInput)
    }
  }
}
</script>