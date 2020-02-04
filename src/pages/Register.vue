<template>
  <div>
    <Header></Header>
    <div class="page-wrapper">
      <div class="registration-company-heading">Company registration</div>
      <div class="registration-company">
        <p>Fill out the form and apply to become a customer today. Registration is free, no strings attached!<br></p>
        <form @submit.prevent="register">
          <h3>Company</h3>
          <div class="input-row">
            <div class="flex2">
              <label for="company">
                Company name
              </label>
              <input
                v-model="company.name"
                type="text"
                class="input"
                required>
            </div>
            <div class="input-right">
              <label for="type">
                Type
              </label>
              <select
                v-model="company.type"
                required>
                <option disabled value="">Please select one</option>
                <option value="APS">ApS</option>
                <option value="IS">I/S</option>
                <option value="AS">A/S</option>
                <option value="KS">K/S</option>
                <option value="AMBA">Amba</option>
                <option value="IVS">IVS</option>
                <option value="SINGLEPERSON">Sole Proprietorship</option>
                <option value="OTHER_COMPANY_TYPE">Other</option>
              </select>
            </div>
          </div>
          <div class="input-row">
            <div class="input-items">
              <label for="cvr">
                CVR
              </label>
              <input
                class="input"
                v-model="company.cvr"
                type="text"
                required>
            </div>
            <div class="input-items input-right">
              <label for="ean">
                EAN
              </label>
              <input
                class="input"
                v-model="company.ean"
                type="text"
                required>
            </div>
          </div>
          <div class="input-row">
            <div class="input-items">
              <label for="phone">
                Phone number
              </label>
              <input
                class="input"
                v-model="company.phone"
                type="number"
                required>
            </div>
          </div>
          <div class="input-row">
            <div class="input-items">
              <label for="address">
                Address
              </label>
              <input
                class="input"
                v-model="company.address"
                type="text"
                required>
            </div>
          </div>
          <div class="input-row">
            <div class="input-items">
              <label for="postcode">
                Postcode
              </label>
              <input
                class="input"
                v-model="company.postcode"
                type="number"
                required>
            </div>
            <div class="input-items input-right">
              <label for="city">
                City
              </label>
              <input
                class="input"
                v-model="company.city"
                type="text"
                required>
            </div>
          </div>
          <div class="input-row">
            <div class="input-items">
              <label for="country">
                Country
              </label>
              <select
                v-model="company.country"
                required>
                <option disabled value="">Please select one</option>
                <option value="dk">Denmark</option>
                <option value="uk">United Kingdom</option>
                <option value="de">Germany</option>
                <option value="se">Sweden</option>
                <option value="no">Norway</option>
                <option value="fi">Finland</option>
                <option value="nl">Netherlands</option>
                <option value="is">Iceland</option>
              </select>
            </div>
          </div>
          <div class="input-row">
            <div class="input-items">
              <label for="homepage">
                Homepage
              </label>
              <input
                class="input"
                v-model="company.homepage"
                type="text">
            </div>
          </div>
          <h3>Contact person</h3>
          <div class="input-row">
            <div class="input-items">
              <label for="person_name">
                Firstname
              </label>
              <input
                class="input"
                v-model="company.person_name"
                type="text"
                required>
            </div>
          </div>
          <div class="input-row">
            <div class="input-items">
              <label for="person_surname">
                Surname
              </label>
              <input
                class="input"
                v-model="company.person_surname"
                type="text"
                required>
            </div>
          </div>
          <div class="input-row">
            <div class="input-items">
              <label for="person_email">
                Email
              </label>
              <input
                class="input"
                v-model="company.person_email"
                type="email"
                required>
            </div>
          </div>
          <div class="input-row">
            <div class="input-items">
              <label for="person_phone">
                Phone number
              </label>
              <input
                class="input"
                v-model="company.person_phone"
                type="number"
                required>
            </div>
          </div>
          <p>
            Once you submit your application, it will be reviewed and approved by our team - typically within 48 hours.
          </p>
          <p><strong>By registering you agree to <a class="link" href="http://www.entertainment-trading.com/salesterms.pdf" target="_blank">terms and conditions</a></strong></p>
          <button class="register-company-btn">Register</button>
          <p v-if="!loggedIn">Already have an account?Log in <a class="link" href="/coolchristmas/login/">here</a></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Checkout-header';

export default {
  components:{
    Header
  },
  data() {
    return {
      company:{
        name: '',
        type:'',
        cvr:'',
        ean:'',
        phone:'',
        street: '',
        city: '',
        postcode: '',
        country: '',
        homepage:'',
        person_name: '',
        person_surname: '',
        person_email:'',
        person_phone:''
      }
    };
  } ,
  computed: {
    loggedIn(){
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'Products' });
    },
    register()
    {
      console.log(this.company);//eslint-disable-line
    }
  } 
};
</script>
