const path = require('path')

module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx
  let isAlgoliaSearch = themeConfig.algolia || Object.keys(themeConfig.locales || {}).some(locale => themeConfig.locales[locale].algolia)
  let AlgoliaSearchBoxPath = path.resolve(__dirname, 'noopModule.js');
  if(isAlgoliaSearch){
    AlgoliaSearchBoxPath = path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
  }
  const enableSmoothScroll = themeConfig.smoothScroll === true

  return {
    // extend: '@vuepress/theme-default',
    // globalLayout: 'layouts/Layout',
    alias: {
      '@AlgoliaSearchBox': AlgoliaSearchBoxPath
    },
    plugins: [
      ['@vuepress/active-header-links', themeConfig.activeHeaderLinks],
      ['@vuepress/search', {
        searchMaxSuggestions: 5
      }],
      '@vuepress/plugin-nprogress',
      ['container', {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示'
        }
      }],
      ['container', {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '注意'
        }
      }],
      ['container', {
        type: 'danger',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '警告'
        }
      }],
      ['container', {
        type: 'details',
        before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
        after: () => '</details>\n'
      }],
      ['smooth-scroll', enableSmoothScroll]
    ]

  }
}
