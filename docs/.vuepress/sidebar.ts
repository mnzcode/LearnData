import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  // 读书笔记架构更换到 docsify，不能使用相对链接
  // { text: "读书笔记", icon: "read", link: "https://newzone.top/reading/" },
  // 指定显示页面
  {
    text: "🧰 Java",
    icon: "",
    prefix: "/Java/",
    link: "",
    collapsible: true,
    children: [
      "JavaSE.md",
      "JVM.md",
      "算法.md",
      // {
      //   text: "直播手册",
      //   icon: "load",
      //   prefix: "livestreaming/",
      //   link: "",
      //   collapsible: true,
      //   children: "structure",
      // },
    ],
  },
  {
    text: "🌐 数据库",
    icon: "",
    prefix: "/数据库/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🏗️ 中间件",
    icon: "",
    prefix: "/中间件/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🐋 Spring全家桶",
    icon: "",
    prefix: "/Spring全家桶/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🐋 并发包",
    icon: "",
    prefix: "/并发包/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🐋 工具",
    icon: "",
    prefix: "/工具/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🐋 JavaWeb",
    icon: "",
    prefix: "/JavaWeb/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  // {
  //   text: "🚀 代码学习",
  //   icon: "",
  //   prefix: "/code/",
  //   link: "",
  //   collapsible: true,
  //   children: [
  //     "README.md",
  //     {
  //       text: "Basic",
  //       icon: "emmet",
  //       collapsible: true,
  //       children: ["Markdown.md", "Electron.md", "AutoHotkey.md", "Regex.md"],
  //     },
  //     {
  //       text: "FrondEnd",
  //       icon: "app",
  //       collapsible: true,
  //       children: ["Vue.md", "HTML.md", "JavaScript.md", "Python.md"],
  //     },
  //   ],
  // },
]);
