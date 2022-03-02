<template>
  
  <div>
    <p>
      If Element Plus is successfully added to this project, you'll see an
      <code v-text="'<el-button>'"></code>
      below
    </p>
    <el-button type="primary">el-button</el-button>

    <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/RenderMain">RenderMain</router-link> |
    <router-link to="/elementplus">element-plus</router-link> -->

    
  </div>
  <router-view/>

  </div>

</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
