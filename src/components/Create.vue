<template>
  <form @submit.prevent="addPost">
    <label>Title</label>
    <input required type="text" v-model="title" />

    <label>Body</label>
    <textarea required v-model="body"></textarea>

    <label>Tags(hit enter to add a tags)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown" />

    <div v-for="tag in tags" :key="tag" class="pill">
      {{ tag }}
    </div>

    <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db, timestap } from "../firebase/config";

export default {
  setup() {
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);
    let router = useRouter();
    // console.log(router);

    let handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    let addPost = async () => {
      let newPost = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        created_at: timestap(),
      };
      let res = await db.collection("posts").add(newPost);
      // console.log(res);
      router.push("/");
    };

    return { title, body, tag, tags, handleKeyDown, addPost };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
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
