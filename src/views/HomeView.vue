<template>
  <div class="home">
    <h1>Hello Composition Api</h1>

    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="posts.length > 0">
      <PostsList :home_posts="posts"></PostsList>
    </div>
    <div v-else>loading.....</div>
  </div>
</template>

<script>
import PostsList from "../components/PostsList";
import getPosts from "../composables/getPosts";
import { ref } from "vue";

export default {
  components: { PostsList },
  setup() {
    let { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>
