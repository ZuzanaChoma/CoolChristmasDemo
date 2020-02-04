<template>
  <div class="Checkout">
    <Header :company="true"></Header>
    <Steps step=3></Steps>
    <div class="page-wrapper">
        <div class="checkout-wrapper">
          <div class="checkout">
            <div class="checkout-title">Payment</div>
            <h3>Chonfirm payment type</h3>
            <p>Check will be sent once all presents are chosen </p>
            <form class="checkout-form" @submit.prevent="redirect">
              <select required>
                <option
                  value="0"
                  selected>Invoice</option>
              </select>
              <button class="button-confirm" @click="create_order()">Confirm and order</button>
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
import axios from 'axios';

export default {
  components:{
    Footer,
    Steps,
    Header
  },
  methods:{
    redirect() {
      this.$router.push({ name: 'Success' });
    },
    create_order(id, user_id){
      this.$store.commit('selectGifts',this.$store.getters.basketItems);
      console.log("created",this.$store.getters.basketItems);//eslint-disable-line
      console.log("created store",this.$store.getters.getGifts);//eslint-disable-line
      axios.post('http://localhost:3000/selected_products',{
        id : id,
        user_id: user_id,
        products: this.$store.getters.basketItems,
      })
      .then(function (response) {
        console.log(response); //eslint-disable-line
      })
      .catch(function (error) {
        console.log(error); //eslint-disable-line
      });
    }
  }
};
</script>
