<template>
  <div class="header">
    <div class="item-title">Conduit</div>
    <div class="item-link">
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Login</a>
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">singin</a>
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Signup</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header {
  width: 100%;
  padding: 0 5vw;
  justify-content: space-between;
}
.item-title {
  font-size: 2rem;
  color: aquamarine;
  font-weight: bold;
}
</style>
