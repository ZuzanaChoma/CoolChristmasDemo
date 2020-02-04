<template>
  <div class="Checkout">
    <Header :company="true"></Header>
    <Steps step=4></Steps>
    <div class="page-wrapper">
      <div class="checkout-wrapper">
          <div class="checkout">
            <div class="checkout-title">Thank you for choosing CoolChristmas</div>
            <p>Once the invoice is payed present will be with you in 3-5 days</p>
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
  }
};
</script>
