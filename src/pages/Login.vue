<template>
  <div>
    <Header></Header>
    <div class="login-container">
      <div class="login-wrapper">
        <div class="login">
          <h2>Log in to CoolChristmas</h2>
          <form @submit.prevent="printCompanies">
            <div class="input-element">
              <strong><label for="email">Email</label></strong>
              <input v-model="username" class="input input_login" type="email" placeholder="Email" required>
            </div>
            <div class="input-element">
              <strong><label for="password">Password</label></strong>
              <input v-model="password" class="input input_login" type="password" placeholder="Password" required>
            </div>
            <div v-if="incorrect" class="error">wrong username or password</div>
            <button class="login-button">Login</button>
            <p>No account yet? Register <a class="link" href="/register/">here</a></p>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

export default {
  components:{
    Header,
    Footer
  },
  data(){
    return {
      companies:[],
      username: "",
      password:"",
      incorrect: false

    }
  },
   computed: {
    product_brand(){
      return this.password;
    }
   },
  created(){
    this.getCompanies();
  },
  methods: {
    getCompanies(){
      axios
        .get('http://localhost:3000/company')
        .then(response => this.companies = (response.data))
        .catch((response) => { console.log(response) }, //eslint-disable-line
	      (error) => { console.log(error) }) //eslint-disable-line
    },
    printCompanies(){
      var user =  this.companies.filter(company => company.email == this.username && company.password == this.password);
      if(user.length===1){
        this.$store.commit('authenticate');
        this.$router.push({ name: 'Products' });
        if(this.$store.getters.isAuthenticated){
          this.$router.push({ name: 'Products' });
        }
      }
      else 
        this.incorrect = true;
        this.username = "";
        this.password = "";
    }
  }
};
</script>
