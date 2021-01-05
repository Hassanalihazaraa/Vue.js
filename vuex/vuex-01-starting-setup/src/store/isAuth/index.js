import mutations from "@/store/isAuth/mutations";
import actions from "@/store/isAuth/actions";
import getters from "@/store/isAuth/getters";


export default {
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters,
}