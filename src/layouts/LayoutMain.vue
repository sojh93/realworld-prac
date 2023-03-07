<template>
    <div class="layout">
        <div class="banner">
            <p class="banner-title">
                Conduit
            </p>
            <p class="banner-subtitle">
                A place to share your knowledge.
            </p>
        </div>
    </div>
  </template>
  <script>
  export default {
    name: 'LayoutMain'
  }
  </script>  
  <style>
  .layout {
    margin: 0 10vw;
  }
  .banner {
    width: 100vw;
    height: 10vw;
    display: flex;
    flex-direction: column;
    background-color: aquamarine;
  }
  .banner-title {
    width: 100%;
    font-size: 3rem;
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: center;
  }
  .banner-subtitle {
    width: 100%;
    font-size: 2rem;
    color: white;
    display: flex;
    justify-content: center;
  }
  </style>