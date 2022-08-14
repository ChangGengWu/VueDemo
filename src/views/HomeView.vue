<template>
  <div class="home">
    <input type="text" v-model="cusName"/>
    <button @click="addCustomer">Add</button>
    {{ cusName }}
    <CustomTable :data="cusList"/>
  </div>
</template>

<script>
import CustomTable from "../components/Table.vue";
export default {
  name: "HomeView",
  components: {
    CustomTable
  },
  data() {
    return {
      cusName: "",
      cusList:[]
    };
  },
  methods:{
    addCustomer(){
      this.cusList.push(this.cusName);
      this.cusName = "";
    }
}
};
</script>
