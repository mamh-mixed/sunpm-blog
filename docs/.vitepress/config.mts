import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
import { githubLink, runLink, userGithubLink } from './config/url'
import { search } from './config/search'
import { socialLinks } from './config/social'
import { head } from './config/head'
import { nav } from './config/nav'
import { getPosts } from './theme/serverUtils'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Sun .P.M',
  description: '一个小小网站，记录为学习付出努力而不该忘记的知识。',
  lang: 'zh-CN',
  head,
  themeConfig: {
    // 亮/暗模式设置不同的logo
    logo: {
      light: '/images/logo.png',
      dark: '/images/logo.png',
    },
    posts: await getPosts(),
    // https://vitepress.dev/reference/default-theme-config
    // 顶部右侧导航
    nav: [
      ...nav,
      {
        text: '🤝 友情链接',
        link: '/link',
      },
      {
        text: '🫣 归档',
        link: '/archives',
      },
      {
        text: '🏷️ 标签',
        link: '/tags',
      },
      {
        text: '👋 关于我',
        link: '/about',
      },
    ],

    // 每个文章底下显示编辑按钮 https://vitepress.vuejs.org/guide/theme-edit-link.html
    editLink: {
      pattern: `${githubLink}/edit/main/docs/:path`,
      text: '为此页提供修改建议',
    },
    // 社交链接 https://vitepress.vuejs.org/config/theme-configs.html#sociallinks
    footer: {
      message: 'Released under the <a href="https://github.com/sunpm/blog-pages/blob/main/LICENSE">MIT License</a>.',
      copyright: `Copyright © 2022-present  <a href="${userGithubLink}">sunpm</a>`,
    },
    socialLinks,
    search,
  },
  sitemap: {
    hostname: runLink,
  },
  lastUpdated: true,
  vite: {
    plugins: [
      Unocss(),
      AutoSidebar({
        path: '/docs',
        titleFromFile: true,
        ignoreList: ['components'],
      }),
    ],
  },
})
