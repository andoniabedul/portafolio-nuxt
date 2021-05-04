<template>
  <ul class="posts-list">
    <li class="posts-list--item" v-for="post in posts">
      {{ post.fields.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['posts']
}
</script>

<style>

</style>