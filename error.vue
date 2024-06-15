<script setup>
const error = useError();

const handleClearError = () => clearError({ redirect: "/" });

definePageMeta({
    layout: "error",
});
</script>

<template>
    <NuxtLayout>
        <section class="">
            <div class="">
                <div class="flex items-center justify-center h-full w-full flex-col">
                    <span class="text-[160px] font-medium">
                        {{ error.statusCode }}
                    </span>
                    <span class="mt-[10px] text-[28px]">
                        {{ error.message }}
                    </span>
                    <button class="mt-[40px]" @click="handleClearError">На главную</button>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>
