<template>
  <div class="Checkout">
    <Header :company="true"></Header>
    <Steps step=2></Steps>
    <div class="page-wrapper">
        <div class="checkout-wrapper">
          <div class="checkout">
            <div class="checkout-title">Company account information</div>
            <h3>Choose delivery type</h3>
            <p>Enter employee email to create their account for choosing present</p>
            <form class="checkout-form" @submit.prevent="redirect">
              <div>
                <input type="radio" value="0"> Delivery at the company address
              </div>
              <div>
                <input type="radio" value="0"> Delivery at employee chosen address (additional charges may apply)
              </div>
              <h3>Selection deadline</h3>
              <p>Default deadline for choosing present is set. To change, please select different date.</p>
              <input type="date" value="2019-11-01" min="2019-01-10" max="2019-12-01">
              <button class="button-confirm">Confirm and continue</button>
            </form>
          </div>
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
      this.$router.push({ name: 'Payment' });
    },
  }
};
</script>
