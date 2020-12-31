<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
          v-for="friend in friends"
          :key="friend.id"
          :id="friend.id"
          :name="friend.name"
          :phone-number="friend.phone"
          :email-address="friend.email"
          :is-favourite="friend.isFavourite"
          @toggle-favourite="toggleFavouriteStatus"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "Ali",
          name: "Hassan",
          phone: "0032484234234",
          email: "hassan@gmail.com",
          isFavourite: false,
        },
        {
          id: "Hassan",
          name: "Ahmed",
          phone: "0032484234234",
          email: "ahmed@gmail.com",
          isFavourite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavouriteStatus(friendId) {
      const identifiedFriend = this.friends.find(friend => friend.id === friendId)
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite
    },

    addContact(name, phone, email) {
      const newFriend = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavourite: false
      }
      this.friends.push(newFriend)
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>
