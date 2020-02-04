<template>
  <!-- <div
    class="product-wrapper">
    <img
      class="product-image"
      src="https://i.ibb.co/QrtJjQt/jul-med-bloomingville4-1.jpg">
    <div class="product-name">{{name}}</div>
    <div v-if="price">200kr</div>
    <div v-if="button">Add</div>
  </div> -->
  <div class="product">
    <!-- <a href="">
      <div
      :style="{ backgroundImage: `url(${image})` }"
      class="product-image"
      :src="image">
      </div>
    </a> -->
    <div v-if="!employee" class="image-wrapper" @click="redirect('products')" >
      <img
      :src="image"
      class="product-image">
    </div>
    <div v-if="employee" class="image-wrapper" @click="redirect('products-employee')" >
      <img
      data-sizes="auto"
      :data-src="image"
      class="product-image lazyload">
    </div>
    <div v-if="!employee" class="product-info">
      <div class="product-text">
        <div class="product-text__name">{{name}}</div>
        <div class="product-text__price">{{price}} kr</div>
      </div>
      <div v-if="!inBasket && basket_size<25" id="add-button" class="add-button" @click="addItemToBasket(productId)">Add</div>
      <div v-if="inBasket" class="remove-button" @click="removeItemFromBasket(productId)">Remove</div>
    </div>
    <div v-if="employee">
      <div class="product-name-employee">{{name}}</div>
      <div class="button-wrapper">
        <div class="button" @click="redirect('products-employee')">Read more</div>
        <div v-if="giftAmount<1" class="button_add-gift" @click="chooseGift(productId)">Choose gift</div>
        <div v-if="chosenGift" class="button_add-gift" @click="removeGift(productId)">Remove gift</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    productId: {
      type: Number
    },
    name: {
      type: String
    },
    image: {
      type: String
    },
    price: {
      type: Boolean,
      default: false
    },
    employee: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      product_image : this.image,
    }
  },
  computed: {
    basket_size(){
      return this.$store.getters.basketSize;
    },
    inBasket(){
      var isInBasket = this.$store.getters.basketItems.includes(this.productId);
      return isInBasket;
    },
    giftAmount(){
      return this.$store.getters.giftAmount;
    },
    chosenGift(){
      var isChosen = this.$store.getters.giftItem.includes(this.productId);
      return isChosen;
    }
  },
  methods:{
    redirect(url) {
      this.$router.push(`/${url}/${this.productId}/`);
    },
    addItemToBasket(id){
      this.$store.commit('addToBasket',id);
    }, 
    removeItemFromBasket(id){
      this.$store.commit('removeFromBasket',id);
    },
    chooseGift(id){
      this.$store.commit('chooseGift',id);
    },
    removeGift(id){
      this.$store.commit('deleteGift',id);
    }
  }
};
</script>
