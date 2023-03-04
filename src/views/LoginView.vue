<template>
  <div class="login">
    <div class="loginBox">
      <div class="title">
        Login
      </div>
      <div class="formControl__ID">
        <input type="text" placeholder="이메일 아이디" class="formControl__input">
      </div>
      <div class="formContrl__password">
        <input type="password" placeholder="패스워드" class="formControl__input">
      </div>
      <div class="button__wrapper">
        <button>로그인하기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.loginBox {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 5vw;
}
.formControl {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.formControl__ID {
  margin: 1vw 0;
}
.button__wrapper {
  margin-top: 1vw;
}
</style>
  