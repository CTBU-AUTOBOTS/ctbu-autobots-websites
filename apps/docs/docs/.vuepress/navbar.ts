/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '本站首页', link: '/' },
  {
    text: '文章索引', link: '/articals/' 
  },
  { text: '协会主页', link: 'https://www.autobot5.site' },
  { text: '协会资料库', link: 'https://cloud.autobot5.site' },
])
