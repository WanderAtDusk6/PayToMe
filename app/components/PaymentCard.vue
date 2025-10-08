<template>
  <div
    class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
  >
    <div :class="topGlowClass" aria-hidden="true"></div>

    <div class="flex flex-col min-h-[200px]">
      <div :class="svgWrapperClass">
        <slot name="svg" />
      </div>

      <div class="flex-1 mt-6 pb-6 rounded-b-[--card-border-radius]">
        <p class="text-gray-700 dark:text-gray-300">{{ title }}</p>
        <ul
          class="text-gray-700 dark:text-gray-300"
          v-if="lines && lines.length"
        >
          <li v-for="(l, i) in lines" :key="i">{{ l }}</li>
        </ul>
        <p class="text-gray-600 text-sm mt-2" v-else>{{ description }}</p>
      </div>

      <div
        class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800"
      >
        <slot name="actions">
          <button
            @click="$emit('select')"
            class="group rounded-xl text-sm h-8 px-3.5 flex items-center gap-1.5 font-medium text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            <slot name="action-icon"
              ><svg
                class="w-4 h-4 opacity-75"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12h18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></slot>
            <span>{{ actionLabel }}</span>
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: false },
  lines: { type: Array as () => string[], required: false },
  actionLabel: { type: String, default: "打开二维码" },
  topGlowClass: {
    type: String,
    default:
      "inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-sky-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10",
  },
  svgWrapperClass: {
    type: String,
    default:
      "border border-sky-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-sky-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950",
  },
});

const emit = defineEmits(["select"]);
</script>

<style scoped>
/* keep component-level styles minimal; card styles are controlled via props/classes */
</style>
