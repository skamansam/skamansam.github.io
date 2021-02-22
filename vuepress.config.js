const path = require('path');
const themeConfig = require('./vuepress-theme-rbe/defaultConfig');

let userConfig = {
  lang: 'en-US',
  title: 'Rude Boy Enterprises',
  description: 'Solutions for a problmed world.',
  theme: path.resolve(__dirname, 'vuepress-theme-rbe'),
  themeConfig,
}

module.exports = userConfig;
