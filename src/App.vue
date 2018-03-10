<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-link to="/navbar"></router-link>
    <router-link to="/profile"></router-link>
    <router-link to="/transport"></router-link>

    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
