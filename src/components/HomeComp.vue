<template>
  <HeaderComp/>
  <h1>Hello {{ name }}, Welcome on Home Page </h1>
  <table>
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <!-- <td><router-link :to="'/UpdateComp/'+item.id">Update</router-link></td> -->
      <td>Update</td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios';
import HeaderComp from './HeaderComp.vue';
export default {
  name: "HomeComp",
  data(){
    return{
      name:'',
      restaurants:[],
    }
  },
  components:{
    HeaderComp
  },
  async mounted()
    {
        let user =localStorage.getItem('user-info')
        this.name = JSON.parse(user).name
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        let result = await axios.get("http://localhost:3000/restaurant") ; 
        console.warn(result)
        this.restaurants = result.data      
    }
};
</script>

<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 1rem;
    font-family: 'Arial', sans-serif;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  th, td {
    padding: 12px 15px;
    text-align: left;
  }

  thead {
    background-color: #4CAF50;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 2px solid #dddddd;
  }

  tr {
    border-bottom: 1px solid #dddddd;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  tr:hover {
    background-color: #e0f7fa;
    transform: scale(1.02);
  }

  td {
    color: #333;
  }

  td:last-child {
    text-align: center;
  }

  th, td:first-child {
    border-right: 1px solid #dddddd;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:nth-child(odd) {
    background-color: #fff;
  }

 
  tr:hover {
    cursor: pointer;
    background-color: #d1c4e9;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  td {
    transition: color 0.3s ease;
  }

  td:hover {
    color: #4CAF50;
  }
</style>
