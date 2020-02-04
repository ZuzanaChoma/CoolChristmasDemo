<template>
  <div>
    <Header :company="true"></Header>
    <div class="page-wrapper">
        <div class="checkout-wrapper">
            <div class="checkout">
                <div class="checkout-title">SELECTED GIFTS
                    <a v-if="basket_size>0" class="back-button" href="/products/">Back to gift selection</a>
                </div>
                
                <div class="checkout-subtitle">You selected <strong>{{basket_size}}</strong> gifts</div>
                <div v-if="basket_size===0">Go back to <a class="link" href="/products/">gift seletion</a></div>
                <div class="basket-item" v-for="product in selected_products" :key="product.id">
                  <img class="image" :src="product.main_image" @click="redirectToProduct(product.id)">
                    <div class="text">
                        <div class="title">{{product.name}}</div>
                        <div>{{product.price}},- kr</div>
                    </div>
                    <div class="close-icon">
                        <font-awesome-icon @click="removeItemFromBasket(product.id)" icon="times" class="icon" />
                    </div>
                </div>
                <div class="checkout-subtitle">You have <strong>{{available_products}}</strong> gifts left for selection</div>
                <div v-if="basket_size>=10" @click="redirect('Checkout')" class="confirm-selection-btn">Confirm selection and continue to checkout</div>
            </div>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import json from '../../db.json'

export default {
  components:{
    Header,
    Footer
  },
  data(){
      return{
        products : json.products
      }
  },
  computed: {
    basket_size(){
      return this.$store.getters.basketSize;
    },
    selected_products(){
      var selected_items = this.products.filter(product => this.$store.getters.basketItems.includes(product.id));
      return selected_items;
    },
    available_products(){
        return 25-this.basket_size;
    }
  },
  methods:{
    removeItemFromBasket(id){
        this.$store.commit('removeFromBasket',id);
    },
    redirect(url) {
      this.$router.push({ name: url });
    },
    redirectToProduct(id){
      this.$router.push("/products/" + id +"/");
    }
  }
};
</script>
