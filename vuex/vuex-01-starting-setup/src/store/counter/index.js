import mutations from "@/store/counter/mutations";
import actions from "@/store/counter/actions";
import getters from "@/store/counter/getters";

export default {
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters,
}