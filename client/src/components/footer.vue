<template lang="html">
  <div class="footerDiv">
<div class="footerItem">
  <h4><img id="earth"src="../../public/earth.png" alt="earth logo">Planet Saver</h4>
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
  background-color: #392D36;
  color: #E4DAE2;
  padding: 0 10px;
}

.footerItem {
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo {
	padding: 10px;
  height: 150px;
  width: 200px;
}

h4 {
  color: #A48D3D;
}

p {
  margin: 10px;
  font-family: 'Varela Round', cursive;
  font-size: 12px;
}


.logo{
  border:0 10px 0 10px;
}

ul {
  list-style-type: none;
}

li {
  float: left;
  padding: 15px;
}

li a {
  display: block;
  text-align: center;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
</style>
