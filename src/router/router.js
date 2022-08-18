import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostIdPage from '@/pages/PostIdPage.vue'
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    redirect: { name: 'Main'}
  },
  {
    path: '/PostList/',
    component: Main
  },
  {
    path: '/PostList/posts',
    component: PostPage,
  },
  {
    path: '/PostList/posts/:id',
    component: PostIdPage,
    props: true
  },
  {
    path: '/about',
    component: About,
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

export default router;