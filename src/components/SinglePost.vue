<template>
  <router-link :to="{ name: 'detail', params: { id: posts_list.id } }">
    <h3>{{ posts_list.title }}</h3>
  </router-link>
  <p>{{ cutPostBody }}</p>
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

<style></style>
