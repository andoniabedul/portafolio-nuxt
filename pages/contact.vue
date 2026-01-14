<template>
  <div class="contact">
    <div class="contact-title">
      <h1>Escribe. Previsualiza. Envia.</h1>
    </div>
    <div class="contact-container">
      <section class="contact-section-form">
        <label class="contact-section-form-label" for="from"> De: </label>
        <input
          v-model="from"
          class="contact-section-form-input"
          name="from"
          type="text"
          placeholder="Ej: Visitante"
        />
        <label class="contact-section-form-label" for="subject">
          Asunto:
        </label>
        <input
          v-model="subject"
          class="contact-section-form-input"
          name="subject"
          type="text"
          placeholder="Ej: Quiero contactarte"
        />
        <label class="contact-section-form-label" for="message">
          Mensaje:
        </label>
        <textarea
          v-model="message"
          class="contact-section-form-input"
          name="message"
          type="textfield"
          rows="6"
          maxlength="240"
          minlength="140"
          placeholder="Ej.: ¿Qué piensas sobre bitcoin? :-)"
        >
        </textarea>
      </section>
      <section class="contact-section-preview shadow-box-big">
        <div class="contact-section-preview-group">
          <h3 class="contact-section-preview-group--title">
            De:
            <span class="contact-section-preview-group--value">{{ from }}</span>
          </h3>
        </div>
        <div class="contact-section-preview-group">
          <h3 class="contact-section-preview-group--title">
            Asunto:
            <span class="contact-section-preview-group--value">{{
              subject
            }}</span>
          </h3>
        </div>
        <div class="contact-section-preview-group">
          <h3 class="contact-section-preview-group--title">Mensaje:</h3>
          <span class="contact-section-preview-group--value">{{
            message
          }}</span>
        </div>
        <div class="contact-section-preview-actions">
          <button
            class="contact-section-preview-actions--encrypt"
            @click="encripted = !encripted"
          >
            <input
              class="form-checkbox h-4 w-4 mr-2 text-black"
              type="checkbox"
              :checked="encripted"
            />
            Encriptar
          </button>
          <button class="contact-section-preview-actions--send">
            <svg
              class="contact-section-preview-actions--icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            Enviar
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const from = ref('')
const subject = ref('')
const message = ref('')
const sended = ref(false)
const encripted = ref(false)
</script>

<style lang="postcss">
.contact {
  margin: 0;
  min-height: 100vh;
  &-title {
    @apply font-bold text-xl w-full flex flex-row pt-24 px-12;
  }
  &-container {
    @apply w-full flex flex-col lg:flex-row;
  }
  &-section {
    @apply h-screen w-full flex p-12 mb-6;
    &-form {
      @apply flex flex-col flex-1 p-12 pt-6 mb-6;
      &-label {
        @apply mb-2;
      }
      &-input {
        color: var(--principal-color);
        border-radius: 2px;
        @apply mb-6 focus:outline-none focus:ring-2 focus:ring-gray-800 ring-2 ring-gray-400 p-2;
      }
    }
    &-preview {
      margin: 0 auto;
      margin-bottom: 2em;
      @apply flex flex-1 flex-col justify-start w-4/5 lg:w-full lg:w-2/5 h-96 lg:m-8 lg:ml-12 lg:mr-12 border-2;
      border-color: var(--secondary-color);
      border-radius: 5px;
      &-group {
        @apply px-4 py-2;
        overflow-x: scroll;
        &--title {
          @apply text-xl;
        }
        &--value {
          @apply text-lg font-bold max-h-56;
          overflow-y: scroll;
          max-height: 20%;
        }
      }
      &-actions {
        margin-top: auto;
        border-top: 2px solid var(--secondary-color);
        @apply flex h-16 justify-end;
        &--send {
          cursor: pointer;
          border-radius: 10px;
          border: 2px solid var(--principal-color);
          @apply backdrop-filter backdrop-brightness-125 filter brightness-100 inline-flex justify-center items-center p-2 m-4;
          &:hover {
            border: 2px solid var(--secondary-color);
          }
        }
        &--encrypt {
          cursor: pointer;
          border-radius: 10px;
          @apply focus:outline-none backdrop-filter backdrop-brightness-125 filter brightness-100 inline-flex justify-center items-center p-2 m-4;
          border: 2px solid var(--principal-color);
          &:hover {
            border: 2px solid var(--secondary-color);
          }
        }
        &--icon {
          font-size: 12px;
          color: white;
          @apply w-5 h-7 mr-1;
        }
      }
    }
  }
}
</style>
