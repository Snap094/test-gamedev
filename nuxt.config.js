// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    mode: 'static',
    router: {
        base: 'test-gamedev'
    },
    css: ["@/assets/styles/style.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/variables.scss";@import "@/assets/styles/mixins.scss";@import "@/assets/styles/typography.scss";',
                },
            },
        },
    },
})
