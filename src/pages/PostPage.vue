<template>
  <div>
    <h1 style="margin-bottom: 15px">Сторінка з постами</h1>
    <my-input 
      v-model="searchQuery"
      placeholder="Пошук..."
      v-focus
    />
    <div class="app__btns">
      <my-button @click="fetchPosts">Отримати пости</my-button>
      <my-button @click="showDialog">
        Створити
      </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </my-dialog>

    <PostList 
      :posts="sortedAndSearchedPosts" 
      @remove="removePost" 
      v-if="!isPostsLoading" 
    />
    <div v-else>Завантаження...</div>

    <div class="page__wrapper">
      <div 
        v-for="pageNumber in totalPages" 
        :key="pageNumber"
        class="page" 
        :class="{
          'current-page': page === pageNumber
        }"
        @click="changePage(pageNumber)"
      >
       {{pageNumber}}
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from 'axios';

export default {
  components: {
    PostList,
    PostForm,
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'По назві' },
        { value: 'body', name: 'По змісту' },
      ],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },

    async fetchPosts() {
      try {
        this.isPostsLoading = true;

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch (e) {
        alert('Помилка')
      } finally {
        this.isPostsLoading = false;
      }
    },

    mounted() {
      this.fetchPosts();
    },
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },

  watch: {
    page() {
      this.fetchPosts();
    }
  }
}
</script>

<style>

.app__btns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}
</style>
