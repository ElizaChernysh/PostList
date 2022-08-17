<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="navbar">
    <div @click="$router.push('/')">Пости</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')" style="margin-right: 10px">Пости</my-button>
      <my-button @click="$router.push('/about')">Про сайт</my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>