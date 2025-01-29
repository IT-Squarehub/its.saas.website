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
    <div class="relative w-full bg-purple-300 text-white pt-32 pb-24 md:py-28 lg:py-36">
        <div class="flex flex-col gap-5 justify-center px-10 lg:px-20">
            <h1 v-if="headerData?.heading != null"
                class="text-5xl md:text-5xl xl:text-6xl md:w-[50%] lg:w-[60%] font-black text-black"
                data-aos="fade-up">{{ headerData?.heading }}</h1>
            <p  v-if="headerData?.subtitle != null"
                class="text-base font-Inter font-thin md:w-[60%] text-black" data-aos="fade-up">
                {{ headerData?.subtitle}}</p>
        </div>
            <NuxtImg src="/assets/shapes.png" alt="Hero Image"
            class="absolute bottom-0 md:w-[40%] lg:bottom-4 lg:w-96 right-0 object-cover rotate-180 hidden md:block" />
        </div>
</template>