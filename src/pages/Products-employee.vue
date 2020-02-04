<template>
  <div>
    <Header :employee="true"></Header>
    <div class="page-text">
      <div class="page-heading">Pick a gift</div>
      <p class="page-subheading">Choose <strong>1</strong> gift from selected products below</p>
    </div>
    <div class="product-page"> 
      <div class="product-page-right">
        <spinner v-if="isLoading"></spinner>
        <div class="products-wrapper employee">
          <Item
            v-for="product in products_data"
            :key="product.id"
            :name="product.name"
            :productId="product.id"
            :image="product.main_image"
            :employee="true">
          </Item>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import Item from '../components/Item';
import json from '../../db.json';
//import axios from 'axios'; 
import Spinner from 'vue-simple-spinner'

export default {
  components:{
    Header,
    Footer,
    Spinner,
    Item
  },
  data() {
    return {
      product_array: [],
      products_all : json.products,
      isLoading: true
    }
  },
  computed: {
    products_data(){
      return this.products_all.filter(product => this.product_array.includes(product.id))
    }
  },
  created(){
  
    this.product_array = this.$store.getters.getGifts;
    this.isLoading = false;
  },

  methods:{
    
  }
};
</script>
