<template>
  <div>
    <form @submit.prevent>
      <h3 style="margin-bottom: 15px">Створити пост</h3>
      <my-input v-focus v-model="post.title" type="text" placeholder="Назва" />
      <my-input v-model="post.body" type="text" placeholder="Опис" />
      <my-button style="align-self: flex-end" @click="createPost">
        Додати
      </my-button>
    </form>
  </div>
</template>

<script>

export default {

  data() {
    return {
      post: {
        title: "",
        body: ""
      }
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.title = "";
      this.body = "";
      this.post = {
        title: "",
        body: "",
      };
    }
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>