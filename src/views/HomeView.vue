<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="posts.length > 0" class="layout">
      <div>
        <PostsList :home_posts="posts"></PostsList>
      </div>
      <div>
        <TagCloud :home_posts="posts"></TagCloud>
      </div>
    </div>

    <div v-else>
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import Loading from "../components/Loading";
import PostsList from "../components/PostsList";
import getPosts from "../composables/getPosts";

export default {
  components: {
    TagCloud,
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
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
