<template>
  <div class="Checkout">
    <Header :company="true"></Header>
    <Steps step=1></Steps>
    <div class="page-wrapper">
      <div class="checkout-wrapper">
        <div class="checkout">
          <div class="checkout-title">Company account information</div>
          <h3>Creating employee accounts</h3>
          <p>Enter employee email to create their account for choosing present</p>
          <form class="checkout-form" @submit.prevent="redirect">
            <div id="email-form">
              <input class="input" type="email" placeholder="Type in email">
              <input class="input" type="email">
              <input class="input" type="email">
            </div>
            <div class="icon-wrapper">
              <font-awesome-icon @click="addInput" icon="plus-circle" class="icon" />
              Add email
            </div>
            <button class="button-confirm">Confirm and continue</button>
          </form>      
        </div>
      <!--   <div>
          Selected gifts add here later
        </div> -->
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Checkout-header';
import Steps from '../../components/Checkout-steps';
import Footer from '../../components/Footer';

export default {
  components:{
    Footer,
    Steps,
    Header
  },
  methods:{
    redirect() {
      this.$router.push({ name: 'Delivery' });
    },
    addInput() {
      let form = document.getElementById("email-form");
      let new_input = document.createElement("input");
      new_input.type = "email";
      new_input.className = "input";
      form.append(new_input);
    }
  }

};
</script>
