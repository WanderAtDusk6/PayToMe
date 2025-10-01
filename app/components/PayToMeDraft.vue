<script setup lang="ts">
import type { Collections } from "@nuxt/content";
// import alipayImg from "../../assets/alipay.png";
// import wechatImg from "../../assets/wechat.png";
const { locale } = useI18n();

// const { data: projects } = await useAsyncData('projects', async () => {
//   const collection = ('projects_' + locale.value) as keyof Collections
//   return await queryCollection(collection).all() as Collections['projects_en'][] | Collections['projects_fr'][]
// }, {
//   watch: [locale],
// })
const { data: projects } = await useAsyncData(
  "projects",
  async () => {
    // 模拟你的项目数据（JSON 格式）
    return [
      {
        name: "E-Commerce Website",
        release: "2024",
        // image: "@@/assets/alipay.png",
        image: "/pay2me/alipay.png",
        link: "https://example.com",
      },
      {
        name: "Portfolio Design",
        release: "2023",
        image: "/pay2me/alipay.png",
        link: "https://example.com",
      },
      {
        name: "Mobile App UI",
        release: "2025",
        image: "/img/projects/app-ui.jpg",
        link: "https://example.com",
      },
    ];
  },
  {
    watch: [locale], // 保留监听，虽然现在没用
    server: false, // 可选：只在客户端运行，避免 SSR 报错
  }
);
</script>

<template>
  <div class="page-root">
    <header class="header">
      <h1>支持作者</h1>
      <p>扫码支付（支付宝 / 微信）</p>
    </header>

    <main class="payments">
      <section class="pay-box">
        <img src="/alipay.svg" alt="Alipay QR" class="qr" />
        <div class="label">支付宝</div>
      </section>

      <section class="pay-box">
        <img src="/wechat.svg" alt="WeChat QR" class="qr" />
        <div class="label">微信</div>
      </section>
    </main>
  </div>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      <slot name="title" mdc-unwrap="p" />
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      <slot name="subtitle" mdc-unwrap="p" />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <ProjectCard v-for="project in projects" :key="project.name" :project />
    </div>
  </section>
  <div class="h-20">上面怎么没显示</div>
</template>
