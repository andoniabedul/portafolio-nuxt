<template>
  <div class="about">
    <div class="about-title">
      <h1>Acerca de mi :-)</h1>
    </div>
    <section id="working-on" class="about-section">
      <div class="about-section-articles">
        <article
          class="about-section-articles--item"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <p class="about-section-articles--item-text">
            Nací en Caracas, Venezuela. Hermano de la espuma, de las garzas, de
            las rosas y del sol. Desde pequeño he tenido una curiosa fascinación
            por la tecnología, por eso estudié Ingeniería en Informática.
          </p>
          <p class="about-section-articles--item-text">
            Tengo más de 5 años de experiencia en el sector, la mayoría de estos
            utilizando JavaScript, pero también otros como Python y Ruby. Me
            considero desarrollador Full Stack, sin embargo, he estado enfocando
            mi experiencia al front-end. Siempre en constante aprendizaje,
            extendiendo así el dicho de "No se acaba un día sin que uno aprenda
            algo nuevo"
          </p>
          <p class="about-section-articles--item-text">
            Me interesan proyectos tecnológicos distribuidos y descentralizados,
            como Bitcoin y Lightning Network.
          </p>
        </article>
        <article
          class="about-section-articles--item"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div class="about-section-articles--item-image">
            <img class="flex-1" src="/assets/photos/me.jpg" alt="" />
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.about {
  margin: 0;
  min-height: 85vh;
  &-title {
    @apply font-bold text-xl w-full flex flex-row pt-24 px-8;
  }
  &-section {
    @apply flex flex-col lg:flex-col h-full w-full py-6;
    &-articles {
      background-color: var(--principal-color);
      color: var(--secondary-color);
      @apply w-auto flex flex-1 flex-col lg:flex-row justify-center content-between justify-items-center;
      overflow-x: hidden;
      &--item {
        opacity: 1;
        @apply p-2 lg:p-4 flex-1 text-justify text-white flex flex-col lg:flex-col lg:flex-grow flex-1 flex-grow-0 items-center;
        &-text {
          background-color: var(--principal-color);
          color: var(--secondary-color);
          @apply p-2 lg:p-4 lg:text-xl text-sm rounded-lg content-end lg:self-center;
        }
        &-image {
          @apply p-4 w-8/12 flex justify-center rounded-lg;
          img {
            @apply rounded-lg self-center;
            width: 100%;
            height: 100%;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
