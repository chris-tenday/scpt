import  {createStore} from 'vuex'
import states from "@/store/states.js";
import getters from "@/store/getters.js";
import mutations from "@/store/mutations.js";
import actions from "@/store/actions.js";

const store=createStore({
    state : states,
    getters : getters,
    mutations: {...mutations},
    actions:{...actions}
});

export default store;