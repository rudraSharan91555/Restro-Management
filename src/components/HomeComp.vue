<template>
  <HeaderComp />
  <h1>Hello {{ name }}, Welcome to the Home Page</h1>
  <div class="table-container">
    <table class="restaurant-table">
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Contact</td>
          <td>Address</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in restaurants" :key="item.id">
          <td class="id-cell">{{ item.id }}</td>
          <td class="name-cell">{{ item.name }}</td>
          <td class="contact-cell">{{ item.contact }}</td>
          <td class="address-cell">{{ item.address }}</td>
          <td class="actions-cell">
            <router-link :to="'/UpdateComp/'+item.id" class="update-btn">Update</router-link>
            <button v-on:click="deleteRestaurant(item.id)" class="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="restaurant-cards">
      <div v-for="item in restaurants" :key="item.id" class="restaurant-card">
        <h3>ID: {{ item.id }}</h3>
        <h4>Name: {{ item.name }}</h4>
        <p>Contact: {{ item.contact }}</p>
        <p>Address: {{ item.address }}</p>
        <div class="card-actions">
          <router-link :to="'/UpdateComp/'+item.id" class="update-btn">Update</router-link>
          <button v-on:click="deleteRestaurant(item.id)" class="delete-btn">Delete</button>
        </div>
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
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/"+id);
      if(result.status == 200) {
        this.loadData();
      }
      alert("Delet Successfully")
    },
    async loadData() {
      let user = localStorage.getItem('user-info');
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: 'SignUp' });
      }
      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurants = result.data;
    }
  },
  mounted() {
    this.loadData();
  }
}
</script>

<style scoped>

body {
  background-color: #f7f3e9; 
  font-family: 'Georgia', serif; 
  color: #333; 
}

h1 {
  margin-bottom: 20px;
  color: #4f4f4f; 
  font-weight: normal;
  background-color: #f7f3e9; 
}

.table-container {
  overflow-x: auto;
  padding: 20px;
  background-color: #faf5e6; 
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  filter: drop-shadow(20px 20px 30px rgb(125, 186, 124));

}

.restaurant-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #ffffff; 
  filter: drop-shadow(20px 20px 30px red);

}

.restaurant-table th,
.restaurant-table td {
  padding: 12px;
  filter: drop-shadow(20px 20px 30px rgb(209, 167, 167));

  text-align: left;
  border: 1px solid #d4d4d4; 
  transition: background-color 0.3s ease, font-weight 0.3s ease, transform 0.3s ease;
}

.restaurant-table th {
  background-color: #e0dccd;
  color: #333;
}

.restaurant-table tr:nth-child(even) {
  background-color: #f9f9f9; 
  /* filter: drop-shadow(20px 20px 30px rgb(234, 167, 167)); */

}

.id-cell:hover,
.name-cell:hover,
.contact-cell:hover,
.address-cell:hover {
  background-color: #e0dccd; 
  font-weight: bold;
  transform: scale(1.05);
}

.update-btn, .delete-btn {
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.9em;
  margin-right: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  border: 1px solid #ccc; 
}

.update-btn {
  background-color: #4CAF50;
  color: white;
}

.update-btn:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.delete-btn {
  background-color: #f44336;
  color: white;
}

.delete-btn:hover {
  background-color: #e53935;
  transform: scale(1.05);
}


.restaurant-cards {
  display: none;
}

.restaurant-card {
  background-color: #f9f9f9;
  /* box-shadow: 20px 20px 30px red; */
  /* filter: drop-shadow(20px 20px 30px red); */
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 10px 0;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.restaurant-card:hover {
  filter: drop-shadow(20px 20px 20px rgb(233, 140, 140));
  transform: scale(1.05); 
  background-color: #ffd19a; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
}


.restaurant-cards.active {
  transform: scale(1.05); 
  background-color: #ffd19a; /* Same effect as hover */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
}

.card-actions {
  margin-top: 10px;
}

.card-actions .update-btn, .card-actions .delete-btn {
  display: inline-block;
  margin-right: 10px;
  padding: 6px 10px;
  font-size: 0.9em;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.card-actions .update-btn {
  background-color: #4CAF50;
  color: white;
  border: 1px solid #4CAF50;
}

.card-actions .update-btn:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.card-actions .delete-btn {
  background-color: #f44336;
  color: white;
  border: 1px solid #f44336;
}

.card-actions .delete-btn:hover {
  background-color: #e53935;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .restaurant-table {
    display: none;
  }

  .restaurant-cards {
    display: block;
    background-color: #ffe0b3;
  }
  .restaurant-card:hover {
    transform: scale(1.05); 
    background-color: #ffd19a; 
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
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
    background-color: #80ffce;
  }
  .restaurant-card:hover {
    transform: scale(1.05); 
    background-color: #e4d281; 
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
  }
}

</style>
