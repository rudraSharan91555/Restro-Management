<!-- This template is using Json Data -->
<!-- <template>
  <section>
		<div class="leaves">
			<div class="set">
				<div><img src="../assets/leaf_01.png"></div>
				<div><img src="../assets/leaf_02.png"></div>
				<div><img src="../assets/leaf_03.png"></div>
				<div><img src="../assets/leaf_04.png"></div>
				<div><img src="../assets/leaf_01.png"></div>
				<div><img src="../assets/leaf_02.png"></div>
				<div><img src="../assets/leaf_03.png"></div>
				<div><img src="../assets/leaf_04.png"></div>
			</div>
		</div>
		<img src="../assets/bg.jpg" class="bg">
		<img src="../assets/girl.png" class="girl">
		<img src="../assets/trees.png" class="trees">
		<div class="../assets/login">
			<div class="login">
			<h2>Sign In</h2>
			<div class="inputBox">
				<input type="text" v-model="email" placeholder="Enter Email" />
			</div>
			<div class="inputBox">
				<input type="password" v-model="password" placeholder="Enter Password" />
			</div>
			<div class="inputBox">
				<button v-on:click="login">Login</button>
			</div>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p> 
			<div class="group">
				<a href="#">Forget Password</a>
        <router-link to="/sign-up">Sign Up</router-link>
			</div>
		</div>
			</div>		
	</section>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginComp",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: '' 
    };
  },
  methods: {
    async login() {
           
            this.errorMessage = '';

            
            if (!this.email || !this.password) {
                this.errorMessage = 'Please enter your email and password.';
                return; 
            }

            try {
                console.log("Logging in with", this.email, this.password);

                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                );

                if (result.status == 200 && result.data.length > 0) {
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                    this.$router.push({ name: "HomeComp" });
                } else {
                    this.errorMessage = 'Invalid email or password. Please try again.'; // Handle login failure
                }
            } catch (error) {
                console.error("Login error:", error);
                this.errorMessage = 'An error occurred during login. Please try again.'; // Handle error
            }
        }
  },
  mounted()
    {
        let user =localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'HomeComp'})
        }
        
    }
};
</script> -->


<template>
  <section>
    <div class="leaves">
      <div class="set">
        <div><img src="../assets/leaf_01.png" /></div>
        <div><img src="../assets/leaf_02.png" /></div>
        <div><img src="../assets/leaf_03.png" /></div>
        <div><img src="../assets/leaf_04.png" /></div>
        <div><img src="../assets/leaf_01.png" /></div>
        <div><img src="../assets/leaf_02.png" /></div>
        <div><img src="../assets/leaf_03.png" /></div>
        <div><img src="../assets/leaf_04.png" /></div>
      </div>
    </div>
    <img src="../assets/bg.jpg" class="bg" />
    <img src="../assets/girl.png" class="girl" />
    <img src="../assets/trees.png" class="trees" />

    <div class="login">
      <h2>Sign In</h2>
      <div class="inputBox">
        <input type="text" v-model="email" placeholder="Enter Email" />
      </div>
      <div class="inputBox">
        <input type="password" v-model="password" placeholder="Enter Password" />
      </div>
      <div class="inputBox">
        <button @click="login">Login</button>
      </div>
      <div class="group">
        <a href="#">Forget Password</a>
        <router-link to="/sign-up">Sign Up</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log("Attempting to log in with:", this.email, this.password);

      try {
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );

        if (result.status == 200 && result.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.$router.push({ name: "HomeComp" });
        } else {
          console.warn("Invalid login attempt.");
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

section .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

section .trees {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 100;
  pointer-events: none;
}

section .girl {
  position: absolute;
  transform: scale(0.65);
  pointer-events: none;
  animation: animateGirl 10s linear infinite;
}

@keyframes animateGirl {
  0% {
    transform: translateX(calc(100% + 100vw));
  }
  50% {
    transform: translateX(calc(-100% - 100vw));
  }
  50.01% {
    transform: translateX(calc(-100% - 100vw)) rotateY(180deg);
  }
  100% {
    transform: translateX(calc(100% + 100vw)) rotateY(180deg);
  }
}

.login {
  position: relative;
  padding: 40px; 
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  border: 1px solid #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  width: 90%; 
  max-width: 500px; 
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.login h2 {
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 2em; 
  font-weight: 600;
  color: #8f2c24;
  margin-bottom: 10px;
}

.login .inputBox {
  position: relative;
}

.login .inputBox input {
  position: relative;
  width: 100%;
  padding: 15px 20px;
  outline: none;
  font-size: 1em; 
  color: #8f2c24;
  border-radius: 5px;
  background: #fff;
  border: none;
  margin-bottom: 20px; 
}

.login .inputBox ::placeholder {
  color: #8f2c24;
}

.login .inputBox button {
  position: relative;
  border: none;
  outline: none;
  background: #8f2c24;
  color: #fff;
  cursor: pointer;
  font-size: 1em; 
  font-weight: 500;
  transition: 0.5s;
  padding: 10px 0; 
  border-radius: 5px; 
}

.login .inputBox button:hover {
  background: #d64c42;
}

.login .group {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em; 
}

.login .group a {
  color: #8f2c24;
  font-weight: 500;
  text-decoration: none;
}

.login .group a:nth-child(2) {
  text-decoration: underline;
}

.leaves {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  pointer-events: none;
}

.leaves .set {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.leaves .set div {
  position: absolute;
  display: block;
}

.leaves .set div:nth-child(1) {
  left: 20%;
  animation: animate 20s linear infinite;
}

.leaves .set div:nth-child(2) {
  left: 50%;
  animation: animate 14s linear infinite;
}

.leaves .set div:nth-child(3) {
  left: 70%;
  animation: animate 12s linear infinite;
}

.leaves .set div:nth-child(4) {
  left: 5%;
  animation: animate 15s linear infinite;
}

.leaves .set div:nth-child(5) {
  left: 85%;
  animation: animate 18s linear infinite;
}

.leaves .set div:nth-child(6) {
  left: 90%;
  animation: animate 12s linear infinite;
}

.leaves .set div:nth-child(7) {
  left: 15%;
  animation: animate 14s linear infinite;
}

.leaves .set div:nth-child(8) {
  left: 60%;
  animation: animate 15s linear infinite;
}

@keyframes animate {
  0% {
    opacity: 0;
    top: -10%;
    transform: translateX(20px) rotate(0deg);
  }
  10% {
    opacity: 1;
  }
  20% {
    transform: translateX(-20px) rotate(45deg);
  }
  40% {
    transform: translateX(-20px) rotate(90deg);
  }
  60% {
    transform: translateX(20px) rotate(180deg);
  }
  80% {
    transform: translateX(-20px) rotate(45deg);
  }
  100% {
    top: 110%;
    transform: translateX(20px) rotate(225deg);
  }
}

.error {
  color: red;
  font-weight: bold;
}


@media (max-width: 768px) {
  .login {
    padding: 30px; 
  }

  .login h2 {
    font-size: 2em; 
  }

  .login .inputBox input,
  .login .inputBox button {
    font-size: 1em; 
  }

  .login .group {
    font-size: 0.85em; 
  }

  .girl {
    scale: 0.55;
  }
}

@media (max-width: 480px) {
  .login {
    padding: 20px; 
    gap: 20px; 
  }

  .login h2 {
    font-size: 1.5em; 
  }

  .login .inputBox input,
  .login .inputBox button {
    font-size: 0.9em; 
  }

  .login .group {
    font-size: 0.75em; 
  }

  .girl {
    scale: 0.45; 
  }
}
</style>
