const app = Vue.createApp({
  data() {
    return {
      result: 0,
      warning1: "not there yet!",
      warning2: "Too much!",
    };
  },
  watch: {
    calculateResult() {
      console.log("watch");
      const that = this;
      setTimeout(() => {
        return (that.result = 0);
      }, 5000);
    },
  },
  computed: {
    calculateResult() {
      console.log("computed");
      if (this.result < 37) {
        return this.warning1;
      } else if (this.result > 37) {
        return this.warning2;
      } else {
        return this.result;
      }
    },
  },
  methods: {
    add(num) {
      return (this.result += num);
    },
  },
});

app.mount("#assignment");
