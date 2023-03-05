// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    app: {
        baseURL: '/test-gamedev/'
    },
    css: ["~/assets/styles/style.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "~/assets/styles/variables.scss";@import "~/assets/styles/mixins.scss";@import "~/assets/styles/typography.scss";',
                },
            },
        },
    },
    ssr: false,
})
