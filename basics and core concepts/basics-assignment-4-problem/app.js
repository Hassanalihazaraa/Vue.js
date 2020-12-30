const app = Vue.createApp({
    data() {
        return {
            input: "",
            isVisible: true,
            input2: "",
        };
    },

    computed: {
        checkClasses() {
            console.log("checkClasses");
            return {
                user1: this.input === "user1",
                user2: this.input === "user2",
                hidden: !this.isVisible,
                visible: this.isVisible,
            };
        },

        style() {
            return {
                backgroundColor: this.input2 ? this.input2 : "",
            };
        },
    },

    methods: {
        toggle() {
            console.log("toggle");
            this.isVisible = !this.isVisible;
        },
    },
});

app.mount("#assignment");
