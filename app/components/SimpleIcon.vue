<script setup lang="ts">
// 只导入你需要的图标
import { HomeIcon } from "@heroicons/vue/24/outline";

// 映射名字到图标
const icons = {
  home: HomeIcon,
};

// 定义 name prop
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <component :is="icons[name]" class="h-6 w-6" aria-hidden="true" />
</template>
