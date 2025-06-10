import { defineConfig } from "vitepress";

export default defineConfig({
  title: "WYW 学习笔记",
  description: "学习记录网站",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Vue3", link: "/packages/vue3" },
      { text: "Test", link: "/packages/test" },
      { text: "Java", link: "/packages/Java" },
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
          text: "Vue3 源码1",
          items: [{ text: "响应式系统", link: "/reactive" }],
        },
      ],
      "/packages/Java/": [
        {
          text: "Java 学习记录",
          items: [
            { text: "Java", link: "/packages/Java" },
            { text: "JavaEE", link: "/packages/Java/JavaEE" },
            { text: "面向对象", link: "/packages/Java/OOP" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  outDir: "../../../docs",
});
