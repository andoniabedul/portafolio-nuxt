<template>
  <ul class="posts-list">
    <li v-for="post in posts" class="posts-list--item">
      {{ post.fields.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['posts'],
}
</script>

<style></style>
