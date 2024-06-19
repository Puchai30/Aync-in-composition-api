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
import { ref } from "vue";

export default {
  components: { PostsList },
  setup() {
    let posts = ref([]);
    let error = ref("");

    let load = async () => {
      try {
        let response = await fetch("http://localhost:3000/posts");
        if (response.status === 404) {
          throw new Error("Url Not Found");
        }
        let datas = await response.json();
        posts.value = datas;
      } catch (err) {
        error.value = err;
        // console.log(err.message);
      }
    };
    load();
    return { posts, error };
  },
};
</script>
