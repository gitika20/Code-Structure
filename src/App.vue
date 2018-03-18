<template>
  <div id="app">
    <router-link to="/">Home </router-link>
    <router-link to="/navbar"></router-link>
    <router-link to="/profile">Profile</router-link>
    <router-link to="/transport">Transport</router-link>
    <router-link to="/hostel">Hostel</router-link>
    <router-link to="/feedback">Feedback</router-link>

    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
