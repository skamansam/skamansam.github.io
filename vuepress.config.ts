import type { UserConfig, DefaultThemeOptions } from 'vuepress';
import themeConfig from './themeConfig';
import path from 'path';

const config: UserConfig<DefaultThemeOptions> = {
  lang: 'en-US',
  title: 'Rude Boy Enterprises',
  description: 'Solutions for a problemed world.',
  theme: path.resolve(__dirname, 'vuepress-theme-rbe'),
  themeConfig
}

export = config
