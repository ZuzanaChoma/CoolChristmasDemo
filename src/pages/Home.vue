<template>
  <div class="homepage">
    <Header :home="true"></Header>
    <div class="banner">
      <div class="content-wrapper">
        <h1>Cool Christmas</h1>
        <h2>Your perfect solution for corporate Christmas gifts</h2>
        <div>
          <a
            class="button button_register"
            href="/coolchristmas/register/">
            Get started for free
          </a>
          <a
            class="button"
            href="/coolchristmas/about/">
            Learn more
          </a>
        </div>
      </div>
    </div>
    <div class="home-extra-content page-wrapper">
      <div class="content-heading">Our products</div>
      <div class="content-wrapper">
        <carousel :per-page="4" :autoplay="true" :loop="true" :autoplayTimeout=4000 :navigationEnabled="true" :paginationEnabled="false">
          <slide v-for="product in example_products" v-bind:key="product.id">
            <div class="caroussel-item">
              <img :src="product.main_image" class="caroussel-item_image">
              <div class="caroussel-item_title">{{product.name}}</div>
            </div>
          </slide>
        </carousel>
      </div>
      <div class="content-heading">Our brands</div>
      <div class="content-wrapper">
        <picture>
          <source media="(min-width: 998px)" srcset="https://i.ibb.co/vms0Jgp/brands-homepage.png">
          <source media="(min-width: 768px)" srcset="https://i.ibb.co/qrDv7bb/brands-ipad.png">
          <img src="https://i.ibb.co/XVsgGCr/brands-phone.png" alt="Brands">
        </picture>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios';

export default {
  components:{
    Header,
    Footer,
    Carousel,
    Slide
  },
  data() {
    return {
      example_products: []
    };
  },
  created(){
    this.getProducts();
  },
  methods:{
    getProducts(){
      axios
        .get(`http://localhost:3000/products/`)
        .then(response => this.example_products = response.data.slice(0,11))//eslint-disable-line
    }
  }
};
</script>
