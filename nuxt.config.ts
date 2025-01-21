// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    scanPageMeta: 'after-resolve',
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: 'within',
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/sanity',
    'nuxt-anchorscroll',
  ],
  anchorscroll: {
    hooks: [
      // Or any valid hook if needed
      // Default is `page:finish`
      'page:transition:finish',
    ],
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  sanity: {
    projectId: "rlss9fc5",
    dataset: "production",
  },
  googleFonts: {
    families: {
      Poppins: true,
      "Instrument+Sans": true,
      Inter: true,
    }
  },
})