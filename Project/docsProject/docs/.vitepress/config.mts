import { defineConfig } from "vitepress";

export default defineConfig({
  title: "WYW 学习笔记",
  description: "学习记录网站",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Vue3", link: "/packages/vue3" },
      { text: "Test", link: "/packages/test" },
    ],

    sidebar: {
      "/packages/vue3/": [
        {
          text: "Vue3 源码",
          items: [{ text: "响应式系统", link: "/packages/vue3/reactive" }],
        },
      ],
      "/packages/test/": [
        {
          text: "Vue3 源码",
          items: [{ text: "响应式系统", link: "/reactive" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  outDir: "../../../docs",
});
