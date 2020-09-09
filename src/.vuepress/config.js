// See more in https://github.com/ktquez/vuepress-theme-ktquez#configuration
const path = require('path')
const head = require('./config/head')
const themeConfig = require('./config/themeConfig')
const resolve = pathName => path.join(__dirname, pathName)
module.exports = {
  // theme: 'ktquez',
  head,
  themeConfig,
  base: '/',
  title: `Rude Boy Enterprises`,  
  ga: `UA-5427013-3`,
  evergreen: true,  // For modern browsers
  serviceWorker: true,
  markdown: {
    // options for markdown-it-anchor
    // anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require('markdown-it-katex'));
    }
  },
  locales: {
    '/': {
      lang: 'en'
    },
    // '/pt/': {
    //   lang: 'pt-br'
    // },
    // '/es/': {
    //   lang: 'es'
    // }
  },
//   extraWatchFiles: ['**/*.md', '**/*.vue'],
  configureWebpack () {
    return {
      resolve: {
        alias: {
          '@public': resolve('./public'),
        }
      }
    }
  }
}
