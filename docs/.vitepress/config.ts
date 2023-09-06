import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: 'ChrisuiPlus基础组件文档',
  description: '基于Element-plus基础组件封装使用',
  lang: 'cn-ZH',
  base: '/chriszj',
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: 'ChrisuiPlus基础组件文档',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/songtao731/chriszj' },
    ],
    nav: [
      {
        text: '安装指南',
        link: '/components/',
      },
      { text: '基础组件', link: '/components/TTable/base.md' },
      {
        text: 'GitHub地址',
        link: 'https://github.com/songtao731/chriszj',
      }
    ],
    sidebar: {
      '/components': [
        {
          text: '常用组件',
          items: [
            { text: 'Table组件', link: '/components/TTable/base.md' },
            { text: 'Tables组件', link: '/components/TTables/base.md' },
            { text: 'Upload组件', link: '/components/Upload/base.md' },
            { text: 'imgs图片预览组件', link: '/components/Imgs/base.md' },
            { text: 'form表单组件', link: '/components/Tform/base.md' },
            {text:"描述详情组件",link:'/components/Tdescriptions/base.md'}






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
