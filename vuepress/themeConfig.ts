import { ThemeConfig } from 'vuepress';


const themeConfig: ThemeConfig = {
  repo: '',
  editLinks: false,
  docsDir: '',
  editLinkText: '',
  lastUpdated: false,
  navbar: [
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
  sidebar: [
    {
      title: 'Guide',
      collapsable: false,
      children: [
        '',
        'using-vue',
      ]
    }
  ],
};

export default themeConfig;
