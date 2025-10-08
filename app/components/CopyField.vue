<script setup>
import { useClipboard } from "@vueuse/core";
import { DocumentMagnifyingGlassIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  text: { type: String, required: true },
});

// ✅ 解构出 copy 函数
const { copy, copied } = useClipboard();
</script>

<template>
  <div
    class="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 w-full max-w-md"
  >
    <!-- 文本框 -->
    <input
      type="text"
      :value="text"
      readonly
      class="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-200 text-sm truncate"
      @focus="$event.target.select()"
    />

    <!-- 增强版复制按钮 -->
    <button
      type="button"
      @click="copy(text)"
      :disabled="copied"
      class="p-2.5 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-green-600 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
    >
      <!-- 图标 -->
      <!-- <DocumentMagnifyingGlassIcon class="w-4 h-4" /> -->
      <!-- 文字（小屏可选） -->
      <span>{{ copied ? "✅" : "复制" }}</span>
    </button>
  </div>
</template>
