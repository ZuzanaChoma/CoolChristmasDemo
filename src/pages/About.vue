<template>
  <div class="about-page">
    <Header></Header>
    <div class="page-wrapper">
      <div class="about-wrapper">
        <div class="about-title">How it works</div>
        <div class="explanation-wrapper">
          <div class="step">
            <div class="icon-wrapper">
              <font-awesome-icon icon="gifts" class="icon" />
            </div>
            <h3>Select gifts</h3>
            <p>Select up to 25 products from our collection that your employees
              will choose from afterwards.</p>
          </div>
          <div class="step">
            <div class="icon-wrapper">
              <font-awesome-icon icon="users" class="icon" />
            </div>
            <h3>Invite employees</h3>
            <p>Invite employees to choose from your gift list. Simply type
              in their email and send an invite to create an account and pick present!</p>
          </div>
          <div class="step">
            <div class="icon-wrapper">
              <font-awesome-icon icon="shipping-fast" class="icon" />
            </div>
            <h3>Pick delivery option</h3>
            <p>Choose between delivery at the office address or employee chosen address.</p>
          </div>
           <div class="step">
            <div class="icon-wrapper">
              <font-awesome-icon icon="credit-card" class="icon" />
            </div>
            <h3>Payment</h3>
            <p>When all gifts were chosen we will send you an invoice. 
              As soon as invoice is payed we will send you the gifts.</p>
          </div>

          
          
        </div>
        <div class="wrapper-end">
          <a
            class="button_register"
            href="/coolchristmas/register/">
            Get started for free
          </a>
          <h3>Why chooose Coolshop?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  components:{
    Header,
    Footer
  }
};
</script>
