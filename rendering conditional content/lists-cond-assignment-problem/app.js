const app = Vue.createApp({
    data() {
        return {
            input: "",
            tasks: [],
            isVisible: true,
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.input);
        },
        toggle() {
            return this.isVisible = !this.isVisible;
        }
    }
})

app.mount('#assignment');