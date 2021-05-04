<template>
  <section class="post-preview">
    <h4 class="post-preview--title">{{ post.fields.title }}</h4>
    <p class="post-preview--desc">Ejemplo de descripción</p>
  </section>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style></style>
