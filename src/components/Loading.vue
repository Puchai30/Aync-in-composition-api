<template>
  <div class="loading"></div>
</template>

<script>
export default {};
</script>

<style>
.loading {
  width: 40px;
  height: 40px;
  border: 3px solid transparent;
  border-radius: 50%;
  margin: 30px auto;
  border-top-color: red;
  animation: loading 1s infinite;
}
@keyframes loading {
  to {
    transform: rotate(360deg);
  }
}
</style>
