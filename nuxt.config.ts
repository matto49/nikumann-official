// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: '肉包文化｜Nikumann Official',
      meta: [
        { name: 'description', content: '肉包文化（Nikumann），专注 ACG/galgame 合作与推广，已与 PurpleSoftware、keroQ 展开合作。' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: '肉包文化 Nikumann Official' },
        { property: 'og:description', content: '与 galgame 会社携手，把好作品带到更多玩家身边。' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap' }
      ]
    }
  }
})
