<template lang="html">
  <div class="footerDiv">
<div class="footerItem">
  <h3><img id="earth"src="../../public/earth.png" alt="earth logo">Planet Saver</h3>
  <p>Planet House</br> 101 High Street</br>New Town</br></br>Tel: 0141 100 8888</br>Email: general@planetsaver.co.uk
  </p>
</div>

        <div class="footerItem">
          <nav>
            <ul>
              <li>Contact Us</li>
            </ul>
          </nav>
          <img id="logo"src="../../public/socialLogos.png" alt="social media logo">

</div>
</div>
</template>

<script>
export default {
  name: 'footer-component'
}
</script>

<style lang="css" scoped>

.footerDiv {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footerItem {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
padding: 10px;
height: 50px;
width: 50px;
}

#logo {
  height: 150px;
  width: 200px;
}

h1, h3 {
  color: #A48D3D;
}

p {
  margin: 10px;
  font-family: 'Varela Round', cursive;
  font-size: 12px;
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
  float: left;
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
