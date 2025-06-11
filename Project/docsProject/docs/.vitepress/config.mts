import { defineConfig } from "vitepress";
import { javaSliderRoutes } from "../routes/java";

export default defineConfig({
  title: "WYW 学习笔记",
  description: "学习记录网站",
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "主页", link: "/" },
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
      "/packages/Java/": javaSliderRoutes,
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/fengcanliuxu/fengcanliuxu.github.io",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
  },
  outDir: "../../../docs",
});
