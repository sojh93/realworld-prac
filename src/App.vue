<template>
  <login-view></login-view>
  <router-view />
</template>


<script>
import { defineComponent } from "vue";
import LoginView from "./views/LoginView.vue";

export default defineComponent({
  components: { LoginView },
  name: "App",

    mounted () {
    // Fixed header 스크롤 처리
    window.addEventListener("scroll", () => {
      const head = document.querySelector(".header");
      if (head) {
        head.style.left = (window.scrollX * -1) + "px";
      }

      const aside = document.querySelector(".aside");
      if (aside) {
        aside.style.left = (window.scrollX * -1) + "px";
      }

      const footer = document.querySelector(".footer");
      if (footer) {
        footer.style.left = (window.scrollX * -1) + "px";
      }
    });
  }
});
</script>
