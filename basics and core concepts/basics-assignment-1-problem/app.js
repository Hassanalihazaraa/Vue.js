const app = Vue.createApp({
  data() {
    return {
      name: "Hassan",
      age: 25,
      imageUrl: "https://vuejs.org/images/logo.png",
    };
  },
  methods: {
    random() {
      const randomNumber = Math.random() * 1;
      if (randomNumber < 0.5) {
        return Math.floor(randomNumber);
      } else {
        return Math.ceil(randomNumber);
      }
    },
    calculateAge() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
