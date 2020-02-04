<template>
  <header class="top-navigation sticky">
    <div class="header-top">
      <div class="header-logo">
        <a
          href="/coolchristmas/">
          <picture>
            <source
              media="(max-width:980px)"
              srcset="https://i.ibb.co/mTvJSPM/Group-98.png"> 
            <img src="https://i.ibb.co/BZQ1fWQ/Component-2-1.png">
          </picture>
        </a>
      </div>
      <div class="header-main">
        <div v-if="!loggedIn" class="header-icon">
          <a href="/coolchristmas/login/">
            <font-awesome-icon icon="user" class="icon" />
            Login
          </a>
        </div>
        <div v-if="loggedIn" class="header-icon">
          <a @click="logout">
            <font-awesome-icon icon="user" class="icon" />
            Logout
          </a>
        </div>
        <div v-if="company && !home" class="header-icon header-icon_checkout">
          <a href="/basket-company/">
            <font-awesome-icon icon="gifts" class="icon" />
            Gifts
          </a>
          <div v-if="basket_size>0" class="basket">{{basket_size}}</div>
        </div>
        <div v-if="employee" class="header-icon header-icon_checkout">
          <a href="/employee-checkout/">
            <font-awesome-icon icon="gift" class="icon" />
            Basket
          </a>
          <div v-if="giftAmount>0" class="basket">{{giftAmount}}</div>
          <div></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    home: {
      type: Boolean
    },
    employee: {
      type: Boolean
    },
    company: {
      type: Boolean
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    basket_size(){
      return this.$store.getters.basketSize;
    },
    giftAmount(){
      return this.$store.getters.giftAmount;
    },
    loggedIn(){
      return this.$store.getters.isAuthenticated;
    },
    giftItem(){
      return this.$store.getters.giftItem;
    }
  },
  methods:{
    logout() {
      this.$router.push({ name: 'Login' });
      this.$store.commit('logout');
    },
    update_cart(item){
      console.log("this item was added",item);//eslint-disable-line
    }
  }
};
</script>
