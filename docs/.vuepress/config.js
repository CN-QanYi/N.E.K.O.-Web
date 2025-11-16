import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'VuePress Starter',
  description: 'VuePress Starter Project',
  bundler: viteBundler({
    viteOptions: {
      server: {
        port: 8000
      }
    }
  }),
  theme: defaultTheme(),
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'description', content: 'VuePress Starter Project' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }]
  ],
})