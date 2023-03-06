<template>
  <div class="layout">
  </div>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'LayoutLogin'
}
</script>  
<style>
.layout {
  width: 100vw;
  min-height: 100vh;
  margin: 15vw auto 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>