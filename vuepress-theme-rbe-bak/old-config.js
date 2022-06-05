const { description } = require('../package')
const head = require('./head');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Rude Boy Enterprises',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  permalink: '/:year/:month/:day/:slug',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  // head: [
  //   ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  //   ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  //   ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  // ],
  head,

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Posts',
        link: '/posts/',
      },
      {
        text: 'Categories',
        link: '/categories/'
      },
      {
        text: 'Tags',
        link: '/tags/'
      },
      {
        text: 'About',
        link: '/about/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: 'posts',
            // Path of the `entry page` (or `list page`)
            path: '/posts',
          },
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'tag',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['tag'],
            // Path of the `entry page` (or `list page`)
            path: '/tag/',
            // Layout of the `entry page`
            layout: 'Tags',
            // Layout of the `scope page`
            scopeLayout: 'Tag'
          },
          {
            // Unique ID of current classification
            id: 'category',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['categories'],
            // Path of the `entry page` (or `list page`)
            path: '/categories/',
            // Layout of the `entry page`
            layout: 'Categories',
            // Layout of the `scope page`
            scopeLayout: 'Categories'
          },
        ],
      },
    ],
  ]
}
