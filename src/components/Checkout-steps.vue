<template>
  <div class="container">
    <div class="steps-wrapper">
      <div class="step" @click="navigate">
        <a class="icon-wrapper" href="/basket-company/">
        <font-awesome-icon icon="check" class="icon"/>
        </a>
          Select gifts
      </div>
      <div class="step">
        <div class="icon-wrapper">
          <a v-if="step>=2 && step!=4" href="/company-checkout/employees/"><font-awesome-icon icon="check" class="icon" /></a>
          <font-awesome-icon v-else-if="step==4" icon="check" class="icon" />
          <font-awesome-icon v-else-if="step==1" icon="users" class="icon" />
          <font-awesome-icon v-else icon="users" class="icon icon_disabled"/>
        </div>
        Invite employees
      </div>
      <div class="step">
        <div class="icon-wrapper">
          <a v-if="step>=3 && step!=4" href="/company-checkout/delivery/" ><font-awesome-icon icon="check" class="icon" /></a>
          <font-awesome-icon v-else-if="step==4" icon="check" class="icon"/>
          <font-awesome-icon v-else-if="step==2" icon="shipping-fast" class="icon" />
          <font-awesome-icon v-else icon="shipping-fast" class="icon icon_disabled" />
        </div>
        Pick delivery
      </div>
      <div class="step">
        <div class="icon-wrapper">
          <font-awesome-icon v-if="step>=4" icon="check" class="icon"/>
          <font-awesome-icon v-else-if="step==3" icon="credit-card" class="icon"/>
          <font-awesome-icon v-else icon="credit-card" class="icon icon_disabled" />
        </div>
        Payment
      </div>
      <div class="step">
        <div class="icon-wrapper">
          <font-awesome-icon v-if="step==4" icon="box-open" class="icon" />
          <font-awesome-icon v-else icon="box-open" class="icon icon_disabled" />
        </div>
          Success
      </div>
    </div>
    <!--<div class="line"></div>-->
  </div>
</template>

<script>
export default {
  props:{
    step:{
      type: Number
    }
  },
  methods:{
    navigate(){
      
    }
  }
  
}
</script>
