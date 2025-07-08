<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Loading...</div>

    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import PostList from '@/components/PostList.vue';
import getPosts from '@/composables/getPosts';

export default {
  name: 'HomeView',
  components: { PostList },
  setup(){
    const {posts, error, load} = getPosts();

    load();

    const showPosts = ref(true);

    return { posts, showPosts, error };
  }
}
</script>
