<template>
  <div class="home">
    <h1>Hello Composition Api</h1>

    <PostsList :home_posts="posts"></PostsList>
  </div>
</template>

<script>
import PostsList from "../components/PostsList";
import { ref } from "vue";

export default {
  components: { PostsList },
  setup() {
    let posts = ref([]);
  },
};
</script>
