<script setup>
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
} from "reka-ui";
</script>

<template>
  <!-- ===== 按钮触发弹窗 ===== -->
  <DialogRoot>
    <DialogTrigger as-child>
      <button class="px-4 py-2 bg-blue-500 text-white rounded">打开弹窗</button>
    </DialogTrigger>

    <!-- ===== 弹窗内容（自动居中！）===== -->
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 bg-black/30" />

      <DialogContent class="fixed inset-0 flex items-center justify-center">
        <!-- 真正的弹窗卡片 -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4 shadow-xl"
        >
          <h3 class="font-bold">弹窗标题</h3>
          <p class="mt-2 text-gray-600 dark:text-gray-300">
            这是内容，已经自动居中了！
          </p>
          <div class="mt-4 text-right">
            <DialogClose as-child>
              <button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                关闭
              </button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
