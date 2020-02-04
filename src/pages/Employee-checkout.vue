<template>
  <div>
    <Header :employee="true"></Header>
        <div class="page-wrapper">
            <div class="checkout-page">
                <div class="employee-checkout">Checkout</div>
                    <div v-if="selected_item.length==0">You have not selected any gift <br/> <a class="link" href="/products-employee/">Back to gift selection</a></div>
                    <div v-if="selected_item.length>0" class="employee-checkout_items">
                        <div class="employee-checkout_items--left">
                            <div class="delivery-container">
                                <div class="employee-checkout_subheading">Delivery option</div>
                                <div class="delivery-container_options">
                                    <input type="radio" id="zero" value=0 v-model="delivery_type">
                                    <label for="zero">Delivery at the company</label>
                                </div>
                                <div class="delivery-container_options">
                                    <input type="radio" id="one" value=1 v-model="delivery_type">
                                    <label for="one">Delivery at custom address</label>
                                </div>
                            </div>
                            <div v-if="delivery_type==1" class="delivery-container">
                                <div class="employee-checkout_subheading">Optional address</div>
                                <div class="input-row">
                                    <label>Firstname</label>
                                    <input class="input" type="text">
                                </div>
                                <div class="input-row">
                                    <label>Larstname</label>
                                    <input class="input" type="text">
                                </div>
                                <div class="input-row">
                                    <label>Address</label>
                                    <input class="input" type="text">
                                </div>
                                <div class="input-row">
                                    <label>Postcode</label>
                                    <input class="input" type="text">
                                </div>
                                <div class="input-row">
                                    <label>City</label>
                                    <input class="input" type="text">
                                </div>
                                <div class="input-row">
                                    <label>Country</label>
                                    <input class="input" type="text">
                                </div>
                            </div>
                            <div class="employee-checkout-btn"> Confirm chosen gift</div>
                        </div>
                        <div class="employee-checkout_items--right gift-container">
                            <div class="employee-checkout_subheading">Selected gift</div>
                            <div class="employee-checkout_product-name">{{selected_product.name}}</div>
                            <img  class="selected-gift" :src=selected_product.main_image>
                        </div>
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
      return{
        selected_product : [],
        delivery_type: 0
      }
  },
  computed: {
    selected_item(){
      return this.$store.getters.giftItem;
    },
  },
  created(){
      this.getSelectedItem();
  },
  methods:{
    getSelectedItem(){
        var product = this.$store.getters.giftItem;
        axios
            .get(`http://localhost:3000/products/${product}`)
            .then(response => this.selected_product = (response.data))
    }
  }
};
</script>
