<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/button">Button</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/tem">Tem</router-link> |
      <router-link to="/click">Click</router-link> |
      <router-link to="/hide">Hide</router-link> |
      <router-link to="/param">Param</router-link><br><br>
      <router-link to="/clickchangecollor">ClickCC</router-link> |
      <router-link to="/mathrandom">MathRandom</router-link> |
      <router-link to="/inputnumbg">InputnumberBG</router-link> |
      <router-link to="/vfor">Vfor</router-link> |
      <router-link to="/filter">Filter</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
