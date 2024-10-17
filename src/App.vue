<template>
 <router-view/>
</template>

<script>
export default {
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
  background-color: rgb(246, 246, 246);
}

.logo {
  width: 100px;
}


.register input,
.login input {
  width: 90%;
  max-width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin: 0 auto 30px;
  border: 1px solid skyblue;
}

.register button,
.login button {
  width: 90%;
  max-width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  background-color: rgb(52, 160, 203);
  cursor: pointer;
  display: block;
  margin: 0 auto;
}



@media (min-width: 1024px) {
  .register input,
  .login input {
    width: 300px;
    height: 45px;
  }

  .register button,
  .login button {
    width: 320px;
    height: 45px;
  }
}


@media (max-width: 1023px) and (min-width: 768px) {
  .register input,
  .login input {
    width: 80%;
    height: 40px;
  }

  .register button,
  .login button {
    width: 80%;
    height: 40px;
  }
}


@media (max-width: 767px) {
  .register input,
  .login input {
    width: 90%;
    height: 40px;
  }

  .register button,
  .login button {
    width: 90%;
    height: 40px;
  }
}


@media (max-width: 360px) {
  .register input,
  .login input {
    width: 100%;
    height: 40px;
    padding-left: 15px;
  }

  .register button,
  .login button {
    width: 100%;
    height: 40px;
  }
}
</style>
