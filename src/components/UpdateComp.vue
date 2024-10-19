<template>
  <HeaderComp />
  <h1>Hello User,Welcome on Update Resturant Page</h1>
  <form class="update">
    <input
      type="text"
      placeholder="Enter Name"
      v-model="restaurant.name"
      name="name"
    />
    <input
      type="text"
      placeholder="Address"
      v-model="restaurant.address"
      name="address"
    />
    <input
      type="text"
      placeholder="Contact"
      v-model="restaurant.contact"
      name="contact"
    />
    <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
  </form>
</template>
<script>
import axios from "axios";
import HeaderComp from "./HeaderComp.vue";
// import HeaderComp from "./HeaderComp.vue";
export default {
  name: "UpdateComp",
  components: {
    HeaderComp,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods:{
    async updateRestaurant()
    {
      const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
            name:this.restaurant.name,
            address:this.restaurant.address,
            contact:this.restaurant.contact
        });
        if(result.status == 20)
        {
          this.$router.push({name:'HomeComp'});
        }
    }
  },  
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    try {
      const result = await axios.get(
        "http://localhost:3000/restaurant/" + this.$route.params.id
      );

      this.restaurant = result.data;
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      
    }
  },
};
</script>

<style scoped>
.update {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type="text"] {
  width: 100%;
  padding: 12px 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input[type="text"]:focus {
  border-color: #4caf50;
  box-shadow: 0 0 8px rgba(76, 175, 80, 0.3);
  outline: none;
}

button {
  width: 100%;
  padding: 12px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
}

button:hover {
  background-color: #45a049;
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

input[type="text"]:hover {
  border-color: #4caf50;
  background-color: #f9f9f9;
}

input[type="text"]:hover::placeholder {
  color: #888;
}

@media (max-width: 768px) {
  .add {
    padding: 15px;
    width: 90%;
  }

  button {
    padding: 10px;
  }

  input[type="text"] {
    padding: 10px;
  }
}
</style>
