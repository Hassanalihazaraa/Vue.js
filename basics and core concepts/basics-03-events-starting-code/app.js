const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      name: "",
      lastname: "",
      confirmedName: "",
      //fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    },
    /* name(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + this.lastname;
      }
    },
    lastname(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = this.name + " " + value;
      }
    }, */
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastname === "") {
        return "";
      }
      return this.name + " " + this.lastname;
    },
  },
  methods: {
    outputFullname() {
      if (this.name === "" || this.lastname === "") {
        return "";
      }
      return this.name + " " + this.lastname;
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("submitted");
    },
    setName(e) {
      return (this.name = e.target.value);
    },
    increment(num) {
      return (this.counter += num);
    },
    decrement(num) {
      if (this.counter <= 0) {
        this.counter = 0;
      } else {
        return (this.counter -= num);
      }
    },
    resetInput() {
      this.name = "";
      this.confirmedName = "";
      this.lastname = "";
    },
  },
});

app.mount("#events");
