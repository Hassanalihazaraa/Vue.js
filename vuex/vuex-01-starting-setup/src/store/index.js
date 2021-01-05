import {createStore} from "vuex";

// modules
import counterModule from "@/store/counter/index";
import isAuthModule from "@/store/isAuth/index";

const store = createStore({
    modules: {
        counter: counterModule,
        isAuth: isAuthModule
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: {},
    actions: {},
    getters: {},
})

export default store