// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    router: {
        options: {
            hashMode: true,
        },
    },
    hooks: {
        "prerender:routes"({ routes }) {
            routes.clear(); // Do not generate any routes (except the defaults)
        },
    },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
        head: {
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1" },
            ],
            script: [
                // <script src="https://myawesome-lib.js"></script>
            ],
            link: [
                // <link rel="stylesheet" href="https://myawesome-lib.css">
            ],
            // please note that this is an area that is likely to change
            noscript: [
                // <noscript>JavaScript is required</noscript>
                { children: "JavaScript is required" },
            ],
            title: "RS Expertiza",
        },
    },
    css: ["~/assets/css/main.css"],
    runtimeConfig: {
        // Приватные ключи, доступные только на стороне сервера
        apiSecret: "123",
        public: {
            apiBase: "https://devserv.rsexpertiza.ru/services/pz/api/?",
        },
    },

    modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],
    devtools: { enabled: true },
});
