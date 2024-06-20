<template>
  <div class="tag">
    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="posts.length" class="layout">
      <div>
        <PostsList :home_posts="filterPosts"></PostsList>
      </div>
      <div>
        <TagCloud :home_posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>Loading . . .</div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import PostsList from "../components/PostsList";
import getPosts from "@/composables/getPosts";

import { computed } from "vue";
export default {
  components: {
    TagCloud,
    PostsList,
  },
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

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
