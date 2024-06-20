<template>
  <div v-if="error">
    {{ error }}
  </div>

  <div v-if="posts.length">
    <PostsList :home_posts="filterPosts"></PostsList>
  </div>
  <div v-else>Loading . . .</div>
</template>

<script>
import PostsList from "../components/PostsList";
import getPosts from "@/composables/getPosts";

import { computed } from "vue";
export default {
  components: { PostsList },
  props: ["tag"],
  setup(props) {
    let { posts, error, load } = getPosts();
    load();

    let filterPosts = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(props.tag);
      });
    });

    return { posts, error, filterPosts };
  },
};
</script>

<style></style>
