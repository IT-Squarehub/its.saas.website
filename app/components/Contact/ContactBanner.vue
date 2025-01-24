<script setup lang="ts">
    interface BannerSection {
        banner: {
            heading: string
            subtitle: string
        }
    }

    const query = groq`*[_type == "contactUs"][0] {
        banner {
        heading,
        subtitle
        }
    }`


    // Fetch data from Sanity
    const { data: bannerData } = await useSanityQuery<BannerSection>(query)

import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
    AOS.init({
        duration: 1000, // Animation duration in ms
        easing: 'ease-out', // Easing type
        once: false // Whether animation should happen only once
    });
});
</script>

<template>
    <div class="relative w-full bg-purple-300 text-white text-center lg:py-40 py-32 overflow-hidden">
        <img src="/assets/shapes.png" alt="Hero Image" data-aos="fade-right"
            class="sm:w-[18rem] lg:w-96 xl:w-auto w-56 absolute top-0 left-0 object-cover hidden md:block" />
        <div class="flex flex-col items-center justify-center gap-4 px-[10%] md:px-[28%]">
            <h1 v-if="bannerData?.banner.heading != null"
                class="text-5xl md:text-6xl font-bold text-black " data-aos="fade-up">{{ bannerData?.banner.heading }}
            </h1>
            <p  v-if="bannerData?.banner.subtitle != null"
                class="text-base md:text-lg font-Inter font-thin md:px-10 text-black" data-aos="fade-up"> {{
                bannerData?.banner.subtitle }}</p>
            <NuxtLink :to="{ path: '/contact', hash: '#form' }"
                
                class="bg-white text-black font-semibold px-4 py-2 rounded mt-4" data-aos="fade-up">Ask
                More</NuxtLink>
        </div>
        <img src="/assets/shapes.png" alt="Hero Image" data-aos="fade-left"
            class="sm:w-[18rem] lg:w-96 xl:w-auto w-56 absolute bottom-0 right-0 object-cover rotate-180 hidden md:block" />
    </div>
</template>