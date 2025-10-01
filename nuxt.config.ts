// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "reka-ui/nuxt",
    // "@nuxt/ui",  // WARN  Could not fetch from https://fonts.google.com/metadata/icons?key=material_symbols&incomplete=true. Will retry in 1000ms. 3 retries left.
    // "@nuxtjs/google-fonts",
    // "unplugin-icons/nuxt",
    // "@nuxt/content",
    // "@nuxt/image",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
  ],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  colorMode: {
    preference: "dark",
    fallback: "dark",
  },
  icon: {
    // server: false, // ❌ 禁用服务端获取
    // client: false, // ❌ 禁用客户端获取（阻止浏览器请求）
    // autoInstall: true, // 可选：自动安装本地图标包
    // aliases: [], // 可选
  },
  // ui: {
  //   // icons: ["heroicons", "simple-icons"], // 只加载你能访问的图标集
  //   // icons: false,
  //   icons: ["heroicons"],
  //   fonts: false,
  //   // 移除 'material-symbols' 避免请求 Google
  // },
  // fonts: {
  //   providers: {
  //     google: false,
  //   },
  // },
  // googleFonts: {
  //   families: {
  //     // 中文字体不要使用 'Noto Sans SC': [400,700] 这种多个字体格式，没有效果，还会增加文件大小

  //     "Noto Sans SC": true, // 中文无衬线字体,

  //     "Noto Serif SC": true, // 中文衬线体

  //     // 更多字体到 https://fonts.google.com/?noto.script=Hans 这里查看，各种语言字体都有，而且全部免费商用
  //   },

  //   download: true, // 将字体下载到本地，并且打包到项目里，防止用户访问不了google字体服务器

  //   base64: false, // 不要使用 base64格式，不然首页下载文件会非常大

  //   overwriting: true,

  //   outputDir: "assets/fonts", // 本地字体文件目录，下载的字体会放到这个目录里
  // },
  // content: {
  //   // ✅ 使用 wasm 版 SQLite，无需编译
  //   database: {
  //     provider: "sqlite-wasm",
  //   },

  //   // 可选：关闭不需要的功能
  //   highlight: false,
  //   navigation: { fields: ["title", "description"] },
  // },
  css: ["~/assets/style/main.css"],
});