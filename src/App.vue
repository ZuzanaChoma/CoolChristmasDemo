
<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentRoute: window.location.pathname
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
