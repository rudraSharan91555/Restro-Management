<template>
<HeaderComp />
<h1>Hello User, Welcome to the Add New Restaurant Page</h1>
<form class="add">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name" />
    <input type="text" placeholder="Address" v-model="restaurant.address" name="address" />
    <input type="text" placeholder="Contact (10 digits)" v-model="restaurant.contact" name="contact" maxlength="10" @input="validateContact" />
    <button type="button" v-on:click="addResturant">Add New Restaurant</button>
    <button type="button" class="back-btn" v-on:click="goBack">Back </button>
</form>
</template>

<script>
import axios from "axios";
import HeaderComp from "./HeaderComp.vue";

export default {
    name: "AddComp",
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
            errorMessage: '',
        };
    },
    methods: {
        validateContact() {

            this.restaurant.contact = this.restaurant.contact.replace(/\D/g, '').slice(0, 10);
        },
        async addResturant() {
            this.errorMessage = '';
            if (!this.restaurant.name || !this.restaurant.address || !this.restaurant.contact) {
                alert("Please fill all the input fields.");
                return;
            }

            if (this.restaurant.contact.length !== 10) {
                alert("Contact number must be exactly 10 digits.");
                return;
            }

            console.warn(this.restaurant);
            try {
                const result = await axios.post("http://localhost:3000/restaurant", {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact,
                });
                if (result.status === 201) {
                    alert("Restaurant added successfully!");
                    this.$router.push({
                        name: 'HomeComp'
                    });
                }
                console.warn("result", result);
            } catch (error) {
                console.error("Error adding restaurant:", error);
                alert("There was an error adding the restaurant. Please try again.");
            }
        },
        goBack() {
            this.$router.push({
                name: 'HomeComp'
            });
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({
                name: "SignUp"
            });
        }
    },
};
</script>

<style scoped>
body {
    background-color: #f0ece2;
    font-family: 'Arial', sans-serif;
    color: #333;
}

h1 {
    text-align: center;
    color: #4caf50;
    margin-bottom: 30px;
    font-weight: normal;
}

.add {
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

.back-btn {
  background-color: #dc665e;
  margin-top: 10px;
}

.back-btn:hover {
  background-color: #e53935;
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
