<template>
  <div class="cprw-root">
    <nav class="cprw-nav" :style="navStyle" aria-label="picture roll">
      <a
        v-for="i in pictures"
        :key="i"
        href="#"
        @click.prevent
        :style="{ '--i': i - 1, '--img': `url('${api}?${i - 1}')` }"
        class="cprw-item"
      >
        <div class="img" aria-hidden="true"></div>
        <aside class="hover-zone">
          <i v-for="hz in hoverZones" :key="hz"></i>
        </aside>
      </a>
    </nav>

    <label class="cprw-debug" title="debug">
      <input id="dbg" type="checkbox" /> debug
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  pictures: { type: Number, default: 12 },
  hoverZones: { type: Number, default: 9 },
  api: { type: String, default: "https://unsplash.it/800" },
});

const navStyle = computed(() => ({
  "--max-p": String(props.pictures),
  "--max-z": String(props.hoverZones),
}));
</script>

<style scoped>
/* Converted and simplified from original example */
:root {
  font-size: clamp(1.5rem, 2vw + 1rem, 2.5rem);
}

.cprw-root {
  display: grid;
  place-items: center;
  width: 100%;
}

.cprw-nav {
  --hover-intensity: 10rem;
  --hover-smoothness: 70ms;
  --fall-smoothness: 250ms;
  --perspective: 2000px;
  --dir: 0deg;

  width: min(30rem, 100%);
  height: min(8rem, 100%);
  display: flex;
  align-items: flex-end;
  position: relative;
  perspective: var(--perspective);
  transform-style: preserve-3d;
  gap: 0.4rem;
}

.cprw-item {
  flex: 1 1 0;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform-style: preserve-3d;
  transition:
    transform 0.25s,
    filter 0.35s,
    flex 0.3s;
}

.cprw-item:hover {
  flex: 2;
}

.cprw-item {
  /* use CSS variables set on element: --i, --img */
  --p-n: calc(var(--i) / (var(--max-p) - 1));
  transform: translateZ(calc(var(--hover-intensity) * 0.2));
}

.img {
  background-color: #fff3;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  margin-inline: 0.1em;
  /* image source comes from --img */
  background-image: var(--img);
}

.hover-zone {
  position: absolute;
  inset: 0;
  display: flex;
  z-index: 2;
  pointer-events: none;
}

.hover-zone i {
  flex: 1;
  transition: 0.3s;
  pointer-events: none;
}

/* debugging UI */
.cprw-debug {
  position: fixed;
  bottom: 1em;
  left: 1em;
  cursor: pointer;
  opacity: 0.3;
}

/* simplified interactive bits for focus/hover */
.cprw-item:focus-visible,
.cprw-item:hover {
  transform: translateY(-6px) scale(1.03);
  filter: brightness(1.05) saturate(1.1);
}

/* maintain animations for the hover-zone overlay when active */
.hover-zone::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s;
}

.hover-zone:active::after,
.hover-zone:hover::after {
  opacity: 0.06;
  background: #000;
}

/* keep the original keyframes for subtle motion if needed */
@keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}
</style>
