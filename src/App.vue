<template>
  <div id="app">
    <div id="nav">
      <div class="vw-header-logo"><img alt="Vue logo" src="./assets/logo.png"></div>
      <div class="vw-header-menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/vuex">Vuex</router-link>
        <router-link to="/axios">Axios</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 0px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.vw-header-logo{
  height: 60px;
  display: grid;
  margin: 0 auto;
}
.vw-header-logo img{
  height: 100%;
}
.vw-header-menu{
    display: flex;
    align-items: center;
    justify-content: center;
}
.vw-header-menu a{
  margin: 0px 5px;
}
</style>
