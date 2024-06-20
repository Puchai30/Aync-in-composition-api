<template>
  <div class="post">
    <router-link :to="{ name: 'detail', params: { id: posts_list.id } }">
      <h3>{{ posts_list.title }}</h3>
    </router-link>
    <p>{{ cutPostBody }}</p>

    <div v-for="tag in posts_list.tags" :key="tag" class="pill">
      {{ tag }}
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["posts_list"],

  setup(props) {
    let cutPostBody = computed(() => {
      return props.posts_list.body.substring(0, 100) + "...";
    });
    return { cutPostBody };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
