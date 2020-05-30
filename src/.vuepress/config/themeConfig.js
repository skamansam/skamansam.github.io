// See more in https://github.com/ktquez/vuepress-theme-ktquez#themeconfig
const en = require('./locales/en/config')
// const pt = require('./locales/pt/config')
// const es = require('./locales/es/config')

module.exports = {
  locales: {
    '/': en,
    // '/pt/': pt,
    // '/es/': es
  },
  serviceWorker: {
    updatePopup: { 
      message: "New content 🎉🎉", 
      buttonText: "Update" 
    }
  },
  disqus: 'rubeboyenterprises',
  url: `https://rudeboy.dev`,
  cdn: '',
  blackWhite: true,
  topNavigation: false,
  searchMaxSuggestions: 7,
  responsive: {
    active: true,
    ext: 'png',
    breakpoints: []
  },
  lazyLoad: {},
  share: {
    facebook: {
      appId: `310554869041836`,
      version: 'v3.1'
    }
  },
  elevator: {
    duration: 4000,
    mainAudio: '/music/goingup.mp3',
    endAudio: '/music/ding.mp3'
  }
}
