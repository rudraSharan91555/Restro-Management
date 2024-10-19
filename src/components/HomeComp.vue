<template>
  <HeaderComp />
  <h1>Hello {{ name }}, Welcome to the Home Page</h1>
  <div class="table-container">
    <table class="restaurant-table">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact</th>
      </tr>
      <tr v-for="item in restaurants" :key="item.id">
        <td class="id-cell">{{ item.id }}</td>
        <td class="name-cell">{{ item.name }}</td>
        <td class="address-cell">{{ item.address }}</td>
        <td class="contact-cell">{{ item.contact }}</td>
      </tr>
    </table>
    <div class="restaurant-cards">
      <div v-for="item in restaurants" :key="item.id" class="restaurant-card">
        <h3>ID: {{ item.id }}</h3>
        <h4>Name: {{ item.name }}</h4>
        <p>Address: {{ item.address }}</p>
        <p>Contact: {{ item.contact }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderComp from './HeaderComp.vue';

export default {
  name: 'HomeComp',
  data() {
    return {
      name: '',
      restaurants: []
    }
  },
  components: {
    HeaderComp
  },
  async mounted() {
    let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    this.restaurants = result.data;
  }
}
</script>

<style scoped>
.table-container {
  overflow-x: auto; 
}

.restaurant-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.restaurant-table th,
.restaurant-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
  transition: background-color 0.3s ease, font-weight 0.3s ease, transform 0.3s ease;
}


.id-cell:hover {
  background-color: #ffcccb; 
  font-weight: bold; 
  transform: scale(1.1); 
}

.name-cell:hover {
  background-color: #39ff14; 
  font-weight: bold; 
  transform: scale(1.1); 
}

.address-cell:hover {
  background-color: #1e90ff; 
  font-weight: bold; 
  transform: scale(1.1); 
}

.contact-cell:hover {
  background-color: #ffeb3b; 
  font-weight: bold; 
  transform: scale(1.1); 
}

.restaurant-table th {
  background-color: #f2f2f2;
  color: #333;
}

.restaurant-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

h1 {
  margin-bottom: 20px;
}


.restaurant-cards {
  display: none; 
}

.restaurant-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 10px 0;
}


@media (max-width: 768px) {
  .restaurant-table {
    display: none; 
  }
  
  .restaurant-cards {
    display: block; 
  }

  .restaurant-card h3,
  .restaurant-card h4,
  .restaurant-card p {
    margin: 5px 0; 
  }
}

@media (max-width: 480px) {
  .restaurant-card {
    padding: 12px; 
  }
}
</style>
