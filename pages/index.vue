<template>
  <div class="index">
    <section id="introduction" class="section">
      <div class="flex-1 flex justify-center justify-items-center items-center">
        <h2 class="section-title">
          <span ref="greeting">
            {{ greeting.actual }}<span class="blinking-cursor">|</span>
          </span>
        </h2>
      </div>
    </section>
    <section id="working-on" class="section">
      <div class="section-articles">
        <article
          class="section-articles-item"
          data-aos="fade-right"
          data-aos-delay="delay"
        >
          <h1 class="section-articles-item-text shadow-box-big">
            Soy desarrollador de software y me apasiona crear productos y soluciones que mejoren el día a día de sus usuarios.
          </h1>
        </article>
        <article
          id="special-background"
          class="section-articles-item"
          data-aos="fade-left"
          data-aos-delay="delay"
        >
          <div class="illustration">
            <img
              class="flex-1"
              src="/assets/illustrations/marketing-employee-working-on-marketing-strategy.svg"
              alt=""
            />
          </div>
        </article>
      </div>
    </section>
    <section class="section">
      <div class="section-articles">
        <article
          id="special-background"
          class="section-articles-item"
          data-aos="fade-right"
          data-aos-delay="delay"
        >
          <div class="illustration">
            <img
              class="flex-1"
              src="/assets/illustrations/girl-chilling-exploring-on-the-phone.svg"
              alt=""
            />
          </div>
        </article>
        <article
          class="section-articles-item"
          data-aos="fade-left"
          data-aos-delay="delay"
        >
          <h1 class="section-articles-item-text shadow-box-big">
            Tengo como objetivo crear y desarrollar aplicaciones con
            experiencias de usuario amenas y con el mejor rendimiento posible.
          </h1>
        </article>
      </div>
    </section>
    <section class="section">
      <div class="section-articles">
        <article
          class="section-articles-item"
          data-aos="fade-right"
          :data-aos-delay="delay"
        >
          <h1 class="section-articles-item-text shadow-box-big">
            ¿Deseas impulsar tu negocio?<br/>
            ¿Necesitas asesoramiento? <br />
            Puedo ayudarte.
          </h1>
        </article>
        <article
          id="special-background"
          class="section-articles-item"
          data-aos="fade-left"
          data-aos-delay="delay"
        >
          <div class="illustration">
            <img
              class="flex-1"
              src="/assets/illustrations/man-holding-binoculars-finding-something.svg"
              alt=""
            />
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import { mixin as VueTimers } from 'vue-timers'

export default {
  mixins: [VueTimers],
  data() {
    return {
      greeting: {
        actual: '',
        index: 0,
        letterIndex: 0,
        list: [
          'Hola',
          'Hello',
          'Ola',
          'Bonjour',
          'Ciao',
          'Hallo',
          'Tere',
          'Привет',
          '你好',
          'こんにちは',
        ],
      }
    }
  },
  computed: {
    delay: function(){
      return this.$device.isMobile ? 100 : 300;
    }
  },
  created() {
    this.$options.interval = setInterval(this.setGreeting, 500)
  },
  beforeDestroy() {
    clearInterval(this.$options.interval)
  },
  methods: {
    setGreeting() {
      let greeting = this.greeting.list[this.greeting.index]
      if (!greeting) {
        this.greeting.index = 0
        this.greeting.letterIndex = 0
        greeting = this.greeting.list[this.greeting.index]
      }
      const letters = greeting.split('')
      if (this.greeting.letterIndex === greeting.length) {
        if (this.greeting.index <= this.greeting.list.length) {
          this.greeting.index++
          this.greeting.actual = ''
        }
        this.greeting.letterIndex = 0
      } else {
        this.greeting.actual += letters[this.greeting.letterIndex]
        this.greeting.letterIndex++
      }
    },
  },
}
</script>

<style lang="postcss">
.index {
  width: 100%;
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @apply bg-white flex flex-col w-full justify-center justify-items-center items-center;
  background-color: var(--principal-color);
  color: var(--secondary-color);
}

.section {
  @apply flex flex-col lg:flex-col h-screen w-full py-6;
}
.section-title {
  @apply text-6xl lg:text-8xl align-middle;
  color: var(--secondary-color);
  .blinking-cursor {
    font-weight: 100;
    color: var(--secondary-color);
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
    @apply text-6xl lg:text-8xl mb-2 text-white;
  }

  @keyframes "blink" {
    from,
    to {
      color: transparent;
    }
    50% {
      color: var(--secondary-color);
    }
  }

  @-moz-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: var(--secondary-color);
    }
  }

  @-webkit-keyframes "blink" {
    from,
    to {
      color: transparent;
    }
    50% {
      color: var(--secondary-color);
    }
  }

  @-ms-keyframes "blink" {
    from,
    to {
      color: transparent;
    }
    50% {
      color: var(--secondary-color);
    }
  }

  @-o-keyframes "blink" {
    from,
    to {
      color: transparent;
    }
    50% {
      color: var(--secondary-color);
    }
  }
}
.section-articles {
  background-color: var(--principal-color);
  color: var(--secondary-color);
  @apply h-screen w-auto flex flex-1 flex-col lg:flex-row justify-center content-between justify-items-center;
  overflow-x: hidden;
  &-item {
    opacity: 1;
    @apply p-6 lg:p-12 flex-1 text-left text-white flex flex-row lg:flex-col lg:flex-grow flex-1 flex-grow-0;
    flex-basis: auto;
    &-text {
      background-color: var(--principal-color);
      color: var(--secondary-color);
      border: 2px solid var(--secondary-color);
      @apply p-8 lg:p-12 text-xl lg:text-4xl rounded-lg content-end lg:self-center;
    }
  }
}
#special-background {
  width: 100%;
  .illustration {
    @apply flex flex-1 rounded-xl lg:self-start content-end;
    width: 100%;
  }
  img {
    width: 100%;
    @apply self-end rounded-xl;
    background-color: white;
  }
}
</style>
