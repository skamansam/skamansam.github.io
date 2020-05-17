const ads = require('./ads')

module.exports = {
  languages: {
    label: 'English',
    shortname: 'EN'
  },
  translation: {
    news_title: 'Receive our articles, videos and more directly in your inbox and stay up to date.',
  },
  ads,
  logo: {
    name: 'rbe_logo',
    ext: 'gif',
    alt: 'RBE Logo: The Machine'
  },
  share: {
    facebookCaption: '',
    twitterVia: '',
  },
  newsletter: {
    provider: 'mailchimp',
    action: ''
  },
  copy: `2020 © Rude Boy Enterprises - 
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          MADE WITH VUEPRESS
        </a>`,
  footer: {
    nav1: {
      title: 'Rude Boy Enterprises',
      items: [
        {
          label: 'ABOUT',
          path: '/about/'
        },
        {
          label: 'CATEGORIES',
          path: '/categories/'
        },
        {
          label: 'CONTACT',
          path: '/contact/'
        }
      ]
    },
    nav2: {
      title: 'Community',
      items: [
    //     {
    //       label: 'FB GROUP',
    //       link: 'https://www.facebook.com/groups/MY_GROUP'
    //     }
      ]
    }
  },
  social: [
    {
      name: 'twitter',
      link: `https://www.twitter.com/skamansam`
    },
    {
      name: 'github',
      link: `https://www.github.com/skamansam`
    }
  ]
}
