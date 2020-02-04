<template>
  <div>
    <Header :company="true"></Header>
    <ul class="breadcrumbs">
      <li>
        <a href="/home/">home</a>
      </li>
      <li>
        <a href="/products/">products</a>
      </li>
      <li>
        {{product_data.name}}
      </li>
    </ul>
    <div class="page-wrapper_product">
      <div class="product-page-wrapper">
        <div class="product-wrapper">
          <div>
            <img id="image-change" class="product_image" :src="product_data.main_image" @click="showImage()">
          </div>
          <div class="product-info">
            <h1 class="product-name">{{product_data.name}}</h1>
            <div>from <a class="link">brand</a></div>
            <h2 class="product-price">{{product_data.price}} kr,-</h2>
            <div class="product-description">{{product_data.description}}</div>
            <div v-if="!inBasket" class="action-button" @click="addItemToBasket(product_data.id)">Choose gift</div>
            <div v-if="inBasket" class="action-button remove" @click="removeItemFromBasket(product_data.id)">Remove gift</div>
          </div>
        </div>
        <div v-if="product_data.images.length>0" class="product-images-wrapper">
          <div class="product-images" v-for="image in product_data.images" v-bind:key="image.id"> 
            <img :src="image.url" @click="changeImage(image.url)">
          </div>
        </div>
      </div>
    </div>
    <modal name="image-zoom" height="600px" width="600px">
      <img id="imageZoomed" :src="product_data.main_image">
    </modal>
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
  data() {
    return {
      product_id : this.$route.params.id,
      product_data: [],
      brands: [],
      image: ""
    }
  },
  computed: {
    product_brand(){
      var brand =  this.brands.filter(brand => brand.id === this.product_data.brand);
      console.log((brand[0].name)); //eslint-disable-line
      return brand[0].name;
    },
    current_image(){
      return document.getElementById("image-change");
    },
    inBasket(){
      var isInBasket = this.$store.getters.basketItems.includes(parseInt(this.product_id));
      return isInBasket;
    },
  }, 
  created(){
    console.log(this.$route.params); //eslint-disable-line
    this.getProductData();
    this.getBrands();
  },
  methods: {
    changeImage(url){
      
      document.getElementById("image-change").src = url;
    },

    showImage () {
    this.$modal.show('image-zoom');
    console.log(this.current_image.src);//eslint-disable-line

    },

    hideImage () {
      this.$modal.hide('image-zoom');
    },

    getProductData(){
      axios
        .get('http://localhost:3000/products/'+ this.product_id)
        .then(response => this.product_data = (response.data))
    },
    getBrands(){
      axios
        .get('http://localhost:3000/brands')
        .then(response => this.brands = (response.data))//eslint-disable-line
    },
    addItemToBasket(id){
      this.$store.commit('addToBasket',id);
      this.added = true;
    }, 
    removeItemFromBasket(id){
      this.$store.commit('removeFromBasket',id);
      this.added = false;
    }
  }
};
</script>
