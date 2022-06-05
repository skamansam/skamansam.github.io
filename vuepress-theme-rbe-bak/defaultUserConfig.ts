
const userConfig = {
  markdown: {
    links: {
      externalAttrs: {},
    },
    toc: [],
    extractHeaders: true,

  },
  sidebar: [
    // SidebarItem
    {
      text: 'Foo',
      link: '/foo/',
      children: [
        // SidebarItem
        {
          text: 'github',
          link: 'https://github.com',
          children: [],
        },
        // string - page file path
        '/foo/bar.md',
      ],
    },
    // SidebarGroup
    {
      isGroup: true,
      text: 'Group',
      children: ['/group/foo.md', '/group/bar.md'],
    },
    // string - page file path
    '/bar/README.md',
  ],
  bundlerConfig: {
    postcss: {},
    stylus: {},
    scss: {},
    sass: {},
    less: {},
    chainWebpack: {},
    configureWebpack: {}
  }
}

export default userConfig;
