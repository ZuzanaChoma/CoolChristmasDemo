<template>
  <div>
    <Header :company="true" @update-cart="updateCart"></Header>
    <ul class="breadcrumbs">
      <li>
        <a href="/home/">home</a>
      </li>
      <li >Products</li>
    </ul>
    <div class="product-page">
      <div class="filters-wrapper">
        <h4>Categories</h4>
        <ul class="filters-list" v-for="category in categories" v-bind:key="category.id">
          <li><input type="checkbox" :value="category.id" v-model= "checked_categories">{{category.name}}</li>
        </ul>
        <h4>Brands</h4>
        <ul class="filters-list" v-for="brand in brands" v-bind:key="brand.id">
          <li><input type="checkbox" name="" :value="brand.id" v-model= "checked_brands">{{brand.name}}</li>
        </ul>
        <h4>Price</h4>
        <vue-slider v-model="value" :min=smallest_price :max=biggest_price></vue-slider>
        <div @click="apply_filters()" class="filter-button">Apply filters</div>
        <div @click="delete_filters()" class="filter-button clear-filter">Clear filters</div>
      </div>
      <div class="product-page-right">
        <div  v-if="filtered_products.length>0" class="text-wrapper">
          <div class="heading">Products for gift selection</div>
          <div>Select up to <strong>25</strong> products</div>
          <div class="filters-wrapping">
            <div @click="showDropdown()" class="filters-wrapping filters">{{sort}}
              <div v-if="!sorting_hidden">
                <div class="filters-wrapping filters_options">
                  <div @click="price_ascending()">Sort by <strong>price ascending</strong></div>
                  <div @click="price_descending()">Sort by<strong>price descending</strong></div>
                </div>
              </div>
            </div>
            <div class="filters-wrapping filters-mobile" @click="showFilters()">Filters</div>
          </div>
          </div>
        <div class="products-wrapper" id="products-filtered">
          <spinner v-if="isLoading"></spinner>
          <Item
            v-for="product in products_paged"
            :key="product.id"
            :name="product.name"
            :productId="product.id"
            :price="product.price"
            :image="product.main_image">
          </Item>
          <div v-if="filtered_products.length===0">
            <h2>We are sorry...</h2>
            There are no products maching your filters
            <div @click="delete_filters()" class="link">Clear all filters</div>
          </div>
          <div>
          </div>
        </div>
        <div v-if="filtered_products.length>20"  class="pagination">
          <div class="page" v-for="(page,index) in page_numbers" v-bind:key="index" @click="pageProducts(page,index)">
            <div v-if="page==current_page" class="page--curent">{{page}}</div>
            <div v-else>{{page}}</div>
          </div>
        </div>
      </div>
      <modal name="filters-popup" :height="900">
        <div class="filters-popup filter-popup">
          <div class="filter-section">
            <h4>Categories</h4>
            <ul class="filter-popup filter-list" v-for="category in categories" v-bind:key="category.id">
              <li><input type="checkbox" :value="category.id" v-model= "checked_categories">{{category.name}}</li>
            </ul>
          </div>
          <div class="filters-popup filter-section">
            <h4>Brands</h4>
            <ul class="filter-popup filter-list" v-for="brand in brands" v-bind:key="brand.id">
              <li><input type="checkbox" name="" :value="brand.id" v-model= "checked_brands">{{brand.name}}</li>
            </ul>
          </div>
        </div>
        <div class="filter-section-end">
          <h4>Price</h4>
          <vue-slider class="price-slider" v-model="value" :min=smallest_price :max=biggest_price></vue-slider>
          <div @click="apply_filters()" class="filter-button">Apply filters</div>
          <div @click="delete_filters()" class="filter-button clear-filter">Clear filters</div>
        </div>
      </modal>
      </div>
      
      
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import Item from '../components/Item';
import axios from 'axios';
import json from '../../db.json';
//import Spinner from 'vue-simple-spinner'


export default {
  components:{
    Header,
    Footer,
    //Spinner,
    Item
  },
  data() {
    return {
      categories: [],
      brands : [],
      checked_categories : [],
      checked_brands : [],
      products: json.products,
      filtered_products: [],
      value: 0,
      isLoading: false,
      sorting_hidden: true,
      sort:"SORT",
      lowest_index: 0,
      current_page: 1,
      highest_index: 20,
      last_page: 0
    }
  },
  computed: {
    
    smallest_price(){
      var min = Math.min.apply( null, this.products.map((product) => product.price));
      return min;
    },
    biggest_price(){
      var max = Math.max.apply( null, this.products.map((product) => product.price));
      return max;
    },
    filtered_products_amount(){
      return this.filtered_products.length;
    },
    page_numbers(){
      var products_number = Math.floor(this.filtered_products.length/20);
      var pages = [];
      for(var x=1;x<=products_number+1;x++){
        pages.push(x)
      }
      return pages;
    },
    products_paged(){
      return this.filtered_products.slice(this.lowest_index,this.highest_index);
    } 
  },
  created(){
    this.getCategories();
    this.getBrands();
    this.filtered_products = this.products;
    this.setLastPage();
  },
 
  methods:{
    price_descending(){    
      this.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      this.sorting_hidden = true;
      this.sort = "Price descending";
    },
    price_ascending(){    
      this.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      this.sort = "Price ascending";
      this.sorting_hidden = true;
    },
    delete_filters(){
      this.checked_brands = [];
      this.checked_categories = [];
      this.value = 0;
      this.filtered_products = this.products;
    },
    apply_filters(){
      
      if(this.checked_categories.length>0){
        this.filtered_products = this.products.filter(product => this.checked_categories.includes(product.category))
        if(this.checked_brands.length>0){   
          this.filtered_products = this.products.filter(product => this.checked_categories.includes(product.category) && this.checked_brands.includes(product.brand))
        }
      }
      else if(this.checked_categories.length===0 && this.checked_brands.length>0){
        this.filtered_products = this.products.filter(product => this.checked_brands.includes(product.brand))
      } 
      if(this.value>0){
        this.filtered_products = this.filtered_products.filter(product =>product.price<this.value)
      }
      this.lowest_index= 0;
      this.current_page= 1;
      this.highest_index= 19;
    },

    filter_price(){
      var filtered = this.filtered_items.filter(item => item.price < this.value)
      console.log(filtered);//eslint-disable-line
    },
    //api calls
    getCategories(){
      axios
        .get('http://localhost:3000/categories')
        .then(response => this.categories = (response.data))//eslint-disable-line
    },
    getBrands(){
      axios
        .get('http://localhost:3000/brands')
        .then(response => this.brands = (response.data))//eslint-disable-line
    },
    showDropdown(){
      if(this.sorting_hidden == true){
        this.sorting_hidden = false;
      }
      else this.sorting_hidden = true
    },
    pageProducts(number,index){
      var amount = index*20
      this.current_page = number;
      this.highest_index = amount + 20;
      this.lowest_index = index*20;
      console.log(this.filtered_products);//eslint-disable-line
      console.log(this.filtered_products.slice(amount,amount+20));//eslint-disable-line
      console.log(index*20);//eslint-disable-line
    },
    setLastPage(){
      this.last_page = this.page_numbers.length;
      console.log(this.last_page);//eslint-disable-line
      console.log(this.current_page);//eslint-disable-line
    },
    showFilters () {
    this.$modal.show('filters-popup');
    },
    hideFilters () {
      this.$modal.hide('filters-popup');
    },
  }
}
</script>
