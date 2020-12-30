const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'Manuel',
                    name: 'Manuel Lopez',
                    phone: '01234 5678 991',
                    email: 'manue@localhost.com'
                },
                {
                    id: 'Julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ]
        }
    },
})

app.component('friend-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails">{{ isDetailsVisible ? 'Hide' : 'Show'}} details</button>
            <ul v-if="isDetailsVisible">
                <li><strong>Phone:</strong>{{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            isDetailsVisible: false,
            friend:
                {
                    id: 'Manuel',
                    name: 'Manuel Lopez',
                    phone: '01234 5678 991',
                    email: 'manue@localhost.com'
                },
        };
    },
    methods: {
        toggleDetails() {
            this.isDetailsVisible = !this.isDetailsVisible
        }
    }
})

app.mount('#app')