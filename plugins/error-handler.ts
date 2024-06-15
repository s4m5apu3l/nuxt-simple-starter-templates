export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
        console.log("ОШИБКА VUE", error);
        console.log("ОШИБКА VUE instance", instance);
        console.log("ОШИБКА VUE info", info);
    };

    // Also possible
    nuxtApp.hook("vue:error", (error, instance, info) => {
        console.log("ОШИБКА nuxt", error);
        console.log("ОШИБКА nuxt instance", instance);
        console.log("ОШИБКА nuxt info", info);
    });
});
