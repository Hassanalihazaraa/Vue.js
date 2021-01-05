import {createStore} from "vuex";
import productModule from "@/store/modules/product";
import cartModule from "@/store/modules/cart";

const store = createStore({
    modules: {
        product: productModule,
        cart: cartModule,
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
    actions: {
        login(context) {
            context.commit('login')
        },
        logout(context) {
            context.commit('logout')
        },
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn
        }
    },
})

export default store