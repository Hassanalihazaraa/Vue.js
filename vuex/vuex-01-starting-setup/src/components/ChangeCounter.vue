<template>
  <button @click="increment">Add 2</button>
  <button @click="increase({value: 10})">Add 10</button>
</template>


<script>
import {mapActions} from 'vuex'

export default {
  methods: {
    /*addOne() {
      this.$store.dispatch('increment')
    }*/
    // first way of doing for getter and actions
    /*...mapActions([
      'increment',
      'increase',
    ])*/
    // second way of doing
    ...mapActions('counter', {increment: 'increment', increase: 'increase',})
  }
}
</script>