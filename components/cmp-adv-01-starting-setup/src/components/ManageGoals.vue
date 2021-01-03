<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoals">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="isValid">
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "@/components/ErrorAlert";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      isValid: false
    }
  },
  methods: {
    setGoals() {
      const input = this.$refs.goal.value
      if (input === '') {
        this.isValid = true
      }
    },
    confirmError() {
      this.isValid = false
    }
  }
}
</script>