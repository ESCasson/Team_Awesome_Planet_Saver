<template lang="html">
  <div class="headerDiv">
        <h1><img id="logo"src="../../public/earth.png" alt="earth logo" />Planet Saver</h1>
        <div id="nav">
          <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/learning_library">Modules</router-link></li>
            <li><router-link to="/quizzes">Quizzes</router-link></li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'header-component'
}
</script>

<style lang="css" scoped>

.headerDiv {
  background-color: #392D36;
  color: #E4DAE2;
  display: flex;
}

img {
padding: 10px;
width: 75;
}

h1 {
  color: #A48D3D;
}


.logo{
  border: 10px;
}

ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
}

li {
  padding: 20px;
  float: left;
}

li a {
  color: #E4DAE2;
  display: block;
  text-align: center;

  text-decoration: none;
}

li a:hover {
  background-color: #678193;
}
</style>
