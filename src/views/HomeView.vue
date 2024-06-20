<template>
  <div class="home">
    <h1>Hello Composition Api</h1>

    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="posts.length > 0">
      <PostsList :home_posts="posts"></PostsList>
    </div>

    <div v-else>
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import Loading from "../components/Loading";
import PostsList from "../components/PostsList";
import getPosts from "../composables/getPosts";
import { ref } from "vue";

export default {
  components: {
    Loading,
    PostsList,
  },
  setup() {
    let { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
