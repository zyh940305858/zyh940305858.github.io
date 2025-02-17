import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端晓航 | 爱折腾的攻城狮",
  description: "前端晓航的博客",
  base: '/',
  themeConfig: {
    siteTitle: '前端晓航',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/markdown-examples' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: '主页', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zyh940305858/zyh940305858.github.io' }
    ]
  }
})
