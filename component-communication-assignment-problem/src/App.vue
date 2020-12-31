<template>
  <section>
    <active-user
        :username="user.username"
        :age="user.age"
    ></active-user>
    <user-data
        @set-data="setUserData"
    ></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: 'Hassan',
        age: 25
      }
    }
  },
  methods: {
    setUserData(username, age) {
      this.user = {
        username: username,
        age: parseInt(age) // or +age
      }
    }
  }
}
</script>

<style>

</style>