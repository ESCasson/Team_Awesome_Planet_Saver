<template>
	<div class="wrapper" id="app">
		<div class="headerDiv">
	      <h1><img id="logo"src="../public/earth.png" alt="earth logo" />Planet Saver</h1>
				<div id="nav">
					<ul>
						<li><router-link to="/">Home</router-link></li>
						<li><router-link to="/learning_library">Modules</router-link></li>
						<li><router-link to="/quizzes">Quizzes</router-link></li>
					</ul>
				</div>
	  </div>
		<router-view />
		<div class="footerDiv">
	<div class="footerItem">
		<h4><img id="earth"src="../public/earth.png" alt="earth logo">Planet Saver</h4>
		<p>Planet House</br> 101 High Street</br>New Town</br></br>Tel: 0141 100 8888</br>Email: general@planetsaver.co.uk
		</p>
	</div>

					<div class="footerItem">
						<nav>
							<ul>
								<li>Contact Us</li>
							</ul>
						</nav>
						<img id="logo"src="../public/socialLogos.png" alt="social media logo">

	</div>
	</div>
	</div>
</template>
<script>

// IMPORT CSS HERE

</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Baloo+Bhai|Varela+Round&display=swap');

.wrapper{
  color: #E4DAE2;
  background-color: #392D36;
  font-family: 'Baloo Bhai', cursive;
}

.headerDiv {
  display: inline-flex;
}

img {
padding: 10px;
}

h1, h3, h4 {
  color: #A48D3D;
}


.logo{
  border: 10px;
}
nav {
  padding-left: 325px;
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
	color: #E4DAE2;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}

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

#earth {
padding: 10px;
height: 50px;
width: 50px;
}

#logo {
	padding: 10px;
  height: 150px;
  width: 200px;
}

p {
  margin: 10px;
  font-family: 'Varela Round', cursive;
  font-size: 12px;
}
</style>
