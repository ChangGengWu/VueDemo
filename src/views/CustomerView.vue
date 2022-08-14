<template>
  <div class="customer">
    <h1>This is an customer page</h1>
  </div>
  <ul>
    <li v-for="customer in customers" :key="customer.id">
        {{customer.name}}
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
      customers:[]
    }
  },
  async created(){
    const res = await axios.get("/customer");
    console.log(res.data.data);
    this.customers = res.data.data;
  }
}
</script>