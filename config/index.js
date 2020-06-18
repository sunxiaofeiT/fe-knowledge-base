const navbar = require('./navbar')
const sidebar = require('./sidebar')
const sshConfig = require('./ssh-config')

module.exports = {
  sshConfig,
  docConfig: {
    dest: './blog-dist',
    title: 'fe knowledeg base',
    description: 'sun_kk‘s fe knowledeg base',
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
      smoothScroll: true,
      nav: navbar,
      lastUpdated: '上次更新',
      sidebar: sidebar,
      repo: 'https://github.com/sunxiaofeiT/fe-knowledge-base',
      repoLabel: '仓库',
      // docsDir: 'docs',
      editLinks: true,
      docsBranch: 'master',
      editLinkText: '编写此页面'
    },
    markdown: {
      lineNumbers: true
    },
    plugins: [
      // require('./plugin/setUpdateUser.js'),
      // '@vuepress/plugin-back-to-top',
      // '@vuepress/plugin-nprogress',
      // 'vuepress-plugin-smooth-scroll',
      // [
      //   '@vuepress/plugin-last-updated',
      //   {
      //     transformer: (timestamp) => {
      //       const time = new Date(timestamp)
      //       return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
      //     }
      //   }
      // ]
    ],
    extraWatchFiles: [
      './navbar.js',
      './sidebar.js'
    ],
  }
}