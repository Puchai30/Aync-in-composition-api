<template>
  <h1>Detail {{ id }}</h1>

  <div v-if="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>

  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from "../components/Loading";
import getPost from "../composables/getPost";

export default {
  components: { Loading },
  props: ["id"],
  setup(props) {
    let { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style></style>
