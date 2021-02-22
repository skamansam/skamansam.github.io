const themeConfig = {
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
};

module.exports = themeConfig;
