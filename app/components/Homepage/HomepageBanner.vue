<script setup lang="ts">
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
    <div class="relative w-full bg-purple-300 text-white text-center py-32 mt-16 overflow-hidden">
        <img src="/assets/shapes.png" alt="Hero Image" data-aos="fade-right"
            class="sm:block sm:w-[13rem] lg:w-80 xl:w-auto hidden absolute top-0 left-0 object-cover" />
        <div class="flex flex-col items-center justify-center gap-4 px-[10%] sm:px-[20%] xl:px-[30%]">
            <h1 class="md:text-7xl text-4xl font-bold text-black z-10" data-aos="fade-up">Your partner in software
                innovation</h1>
            <p class="md:text-lg text-md font-Inter font-thin text-black z-10" data-aos="fade-up">Stay ahead of the
                competition with
                cutting-edge
                development, seamless integration, and collaborative tools from ITS SquareHub.</p>
            <button class="bg-white text-black font-semibold px-4 py-2 rounded mt-4" data-aos="fade-up">Get
                Started</button>
        </div>
        <img src="/assets/shapes.png" alt="Hero Image" data-aos="fade-left"
            class="sm:block sm:w-[13rem] lg:w-80 xl:w-auto w-40 hidden absolute bottom-0 right-0 object-cover rotate-180" />
    </div>
</template>

<style>
/* Import AOS styles */
@import 'aos/dist/aos.css';
</style>