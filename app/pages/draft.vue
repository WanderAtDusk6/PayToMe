<template>
  <!-- component -->
  <div>
    <h2>Animated Hamburger Menu Icon</h2>
    <ExampleTWIconAnimate />
  </div>
  <div>
    <h2>color alert</h2>

    <div
      role="alert"
      class="relative flex items-start w-full border p-2 rounded-none border-b-0 border-l-4 border-r-0 border-t-0 border-green-500 bg-green-500/10 font-medium text-green-500"
    >
      <span class="grid place-items-center shrink-0 p-1"
        ><svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
      <div class="w-full text-sm font-sans leading-none m-1.5">
        A simple alert for showing message.
      </div>
    </div>
  </div>
  <div>
    <h2>title</h2>

    <div class="mt-4">
      <div
        class="inline-block bg-white/10 px-6 py-2.5 border-l-[5px] border-r-[5px] border-l-[#ff6b6b] border-r-[#4ecdc4] my-4 text-2xl uppercase tracking-widest"
      >
        Kako Hanekawa
      </div>
    </div>
  </div>
  <!--  -->
  <div>
    <!-- <h2>refer style: https://makeine-anime.com/special/calorie_meter/</h2> -->
  </div>
  <!--  -->
  <!-- <div>
    <h2>text animate</h2>
    <ExampleCPTWHelloText />
  </div> -->
  <!--  -->
  <div>
    <h2>animate</h2>
    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 items-start">
      <div class="p-4 bg-gray-50 rounded-lg">
        <h3 class="font-medium mb-2">Default</h3>
        <ExampleCPRollWave />
      </div>
      <div class="p-4 bg-gray-50 rounded-lg">
        <h3 class="font-medium mb-2">Custom (6 pics / 4 zones)</h3>
        <ExampleCPRollWave
          :pictures="6"
          :hoverZones="4"
          api="https://picsum.photos/800"
        />
      </div>
    </div>
  </div>

  <!-- <ExampleReKaUIDialog /> -->
</template>

<script setup lang="ts">
// import ExampleCPRollWave from "../components/example/CPRollWave.vue";
const isModalOpen = ref(false);
import { Icon } from "@iconify/vue";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "reka-ui";
</script>
