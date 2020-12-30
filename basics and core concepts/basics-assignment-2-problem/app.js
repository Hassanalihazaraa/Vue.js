const app = Vue.createApp({
  data() {
    return {
      alert: "You are fired!",
      output: "",
      secondOutput: "",
    };
  },
  methods: {
    alertMethod() {
      alert(this.alert);
    },
    register(e) {
      this.output = e.target.value;
    },
    registerSecond(e) {
      this.secondOutput = e.target.value;
    },
  },
});

app.mount("#assignment");
