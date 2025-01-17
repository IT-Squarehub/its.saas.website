<script setup lang="ts">
    interface HeaderSection {
        heading: string,
        subtitle: string,
    }

    const query = groq`*[_type == "contactUs"][0] {
            heading,
            subtitle,
        }`


    // Fetch data from Sanity
    const { data: headerData } = await useSanityQuery<HeaderSection>(query)
</script>

<template>
    <div class="relative w-full bg-purple-300 text-white py-24 md:py-28 lg:py-36 mt-20">
        <div class="flex flex-col gap-5 justify-center px-10 lg:px-20">
            <h1 class="text-5xl md:text-5xl lg:text-5xl xl:text-6xl md:w-[75%] lg:w-[70%] xl:w-[70%] font-black text-black ">{{ headerData?.heading }}</h1>
            <p class="text-base font-Inter font-thin md:w-[60%] text-black">{{ headerData?.subtitle }}</p>
        </div>
        <img src="/assets/shapes.png" alt="Hero Image" class="absolute bottom-0 md:w-[40%] lg:bottom-4 lg:w-[40%] right-0 object-cover rotate-180 hidden md:block"/>
    </div>
</template>