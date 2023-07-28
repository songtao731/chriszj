import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: 'SuiPlus基础组件文档',
  description: '基于Element-plus基础组件封装使用',
  lang: 'cn-ZH',
  base: '/',
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: 'SuiPlus基础组件文档',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wocwin/t-ui-plus' },
    ],
    nav: [
      {
        text: '安装指南',
        link: '/components/',
      },
      { text: '基础组件', link: '/components/TSelect/base.md' },
      {
        text: 'GitHub地址',
        link: 'https://github.com/wocwin/t-ui-plus',
      },
      {
        text: 'Gitee码云地址',
        link: 'https://gitee.com/wocwin/t-ui-plus',
      },
      {
        text: '博客',
        items: [
          { text: 'CSDN', link: 'https://blog.csdn.net/cwin8951' },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/888061128344087/posts',
          },
        ],
      },
    ],
    sidebar: {
      '/components': [
        {
          text: '常用组件',
          items: [
            { text: 'Table组件', link: '/components/TTable/base.md' },
          ],
        }
      ],
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => mdPlugin(md),
  },
})
