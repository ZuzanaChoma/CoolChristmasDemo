import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    basket:[],
    employee_gift:[],
    chosen_gifts: [],
    username: "",
    loggedIn: false,
  },
  mutations: {
    addToBasket(state,id){
      state.basket.push(id);
    },
    removeFromBasket(state,id){
      state.basket.splice(state.basket.indexOf(id),1);
    },
    chooseGift(state,id){
      state.employee_gift.push(id);
    },
    deleteGift(state,id){
      state.employee_gift.splice(state.employee_gift.indexOf(id),1);
    },
    authenticate(state){
      state.loggedIn = true;
    },
    logout(state){
      state.loggedIn = false;
    },
    selectGifts(state,gifts){
      state.chosen_gifts = gifts;
    }
  },
  actions: {},
  getters: {
    basketSize(state){
      return state.basket.length;
    },
    basketItems(state){
      return state.basket;
    },
    giftAmount(state){
      return state.employee_gift.length;
    },
    giftItem(state){
      return state.employee_gift;
    },
    isAuthenticated(state){
      return state.loggedIn;
    },
    getUsername(state){
      return state.username;
    },
    getGifts(state){
      return state.chosen_gifts;
    }
  }
})