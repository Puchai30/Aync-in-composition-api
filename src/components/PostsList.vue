<template>
  <h1>Posts List</h1>
  <div v-for="home_post in home_posts" :key="home_post.id">
    <SinglePost :posts_list="home_post"></SinglePost>
  </div>
</template>

<script>
import SinglePost from "./SinglePost";

export default {
  components: { SinglePost },
  props: ["home_posts"],
};
</script>

<style></style>
