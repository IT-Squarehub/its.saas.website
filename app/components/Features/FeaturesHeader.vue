<script setup lang="ts">
    interface HeaderSection {
        heading: string,
        subtitle: string,
    }

    const query = groq`*[_type == "featuresPage"][0] {
        heading,
        subtitle,
    }`


    // Fetch data from Sanity
    const { data: headerData } = await useSanityQuery<HeaderSection>(query)
</script>

<template>
    <div class="relative bg-purple-300 text-white lg:pb-32 lg:pt-44 lg:px-10 pb-44 pt-60 px-4">

        <div
            class="flex flex-col gap-5 justify-center items-center lg:items-start min-h-[3rem] md:min-h-[6rem] leading-tight md:w-auto lg:w-[40rem] xl:w-[50rem] px-28 lg:px-0">
            <h1 class="text-5xl text-center lg:text-left font-bold text-black z-30">{{ headerData?.heading }}</h1>
            <p class="text-xl text-center lg:text-left font-Inter font-thin text-black z-30">{{ headerData?.subtitle }}</p>
        </div>
        <img src="/assets/shapes.png" alt="Hero Image"
            class="sm:w-[13rem] lg:w-96 lg:hidden xl:w-auto w-48 hidden sm:block absolute top-0 left-0 object-cover" />
        <img src="/assets/shapes.png" alt="Hero Image"
            class="sm:w-[13rem] lg:w-96 xl:w-auto w-48 hidden sm:block absolute bottom-0 right-0 object-cover rotate-180" />
    </div>
</template>