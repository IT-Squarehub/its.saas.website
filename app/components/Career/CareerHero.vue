<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    easing: "ease-in-out", // Animation easing
    once: false, // Whether animation should happen only once
  });
});


const query = groq`*[_type == "careers"][0]`

// Fetch data from Sanity
const { data: careerData, pending, error } = await useSanityQuery(query)

</script>

<template>
    <div>
        <div class="relative bg-purple-300 text-white lg:pb-32 lg:pt-44 lg:px-10 pb-44 pt-60 px-4 -z-10">

        <div class="flex flex-col gap-5 justify-center items-center lg:items-start min-h-[3rem] md:min-h-[6rem] leading-tight md:w-auto lg:w-[40rem] xl:w-[50rem] px-28 lg:px-0">
            <h1 
                v-if="careerData?.heading != null"
                data-aos="fade-left"
                class="text-5xl text-center lg:text-left font-bold text-black z-30">{{ careerData?.heading }}</h1>
            <p  
                v-if="careerData?.subtitle != null"
                data-aos="fade-in" data-aos-delay="300"
                class="text-xl text-center lg:text-left font-Inter font-thin text-black z-30">{{ careerData?.subtitle }}</p>
        </div>
        <img src="/assets/shapes.png" alt="Hero Image"
            class="sm:w-[13rem] lg:w-96 lg:hidden xl:w-auto w-48 hidden sm:block absolute top-0 left-0 object-cover" />
        <img src="/assets/shapes.png" alt="Hero Image"
            class="sm:w-[13rem] lg:w-96 xl:w-auto w-48 hidden sm:block absolute bottom-0 right-0 object-cover rotate-180" />
    </div>
    </div>
</template>