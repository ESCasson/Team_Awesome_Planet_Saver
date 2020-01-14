<template lang="html">
  <div class="footerDiv">
    <nav>
      <ul>
        <li>Learning Libary</li>
        <li>My Results</li>
        <li>Logo Out</li>
      </ul>
    </nav>
      <h1><img id="logo"src="../../../public/earth.png" alt="earth logo" />Planet Saver</h1>
  </div>
</template>

<script>
export default {
  name: 'footer-component'
}
</script>

<style lang="css" scoped>

.footerDiv {
  display: inline-flex;
}

img {
padding: 10px;
}

h1 {
  color: #A48D3D;
}


.logo{
  border: 10px;
}
nav {
}
ul {
  list-style-type: none;
}

li {
  float: right;
  padding: 25px;
}

li a {
  display: block;
  text-align: center;
  padding: 25px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
</style>
