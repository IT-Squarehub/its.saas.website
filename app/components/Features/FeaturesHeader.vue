<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

interface HeaderSection {
    heading: string;
    subtitle: string;
}

const query = groq`*[_type == "featuresPage"][0] {
    heading,
    subtitle,
}`;

// Fetch data from Sanity
const { data: headerData, error, pending } = await useSanityQuery<HeaderSection>(query);

// Initialize AOS
onMounted(() => {
    AOS.init({
        duration: 1000, // Animation duration in ms
        easing: 'ease-out', // Easing type
        once: false, // Whether animation should happen only once
    });
});
</script>

<template>
    <div class="relative bg-purple-300 text-white lg:pb-32 lg:pt-44 lg:px-10 pb-44 pt-60 px-4">
        <!-- Error message -->
        <div v-if="error" class="text-center text-red-600">
            <p>Oops! Something went wrong while loading the header section. Please try again later.</p>
        </div>

        <!-- Loading state -->
        <div v-else-if="pending" class="text-center text-gray-600">
            <p>Loading header section...</p>
        </div>

        <!-- Header content -->
        <div v-else>
            <div class="flex flex-col gap-5 justify-center items-center lg:items-start min-h-[3rem] md:min-h-[6rem] leading-tight md:w-auto lg:w-[40rem] xl:w-[50rem] px-28 lg:px-0"
                data-aos="fade-up">
                <!-- Conditional rendering for heading -->
                <h1 v-if="headerData?.heading" class="text-5xl text-center lg:text-left font-bold text-black z-30">
                    {{ headerData.heading }}
                </h1>

                <!-- Conditional rendering for subtitle -->
                <p v-if="headerData?.subtitle"
                    class="text-xl text-center lg:text-left font-Inter font-thin text-black z-30">
                    {{ headerData.subtitle }}
                </p>
            </div>

            <!-- Decorative images -->
            <NuxtImg src="/assets/shapes.png" alt="Hero Image" data-aos="fade-right"
                class="sm:w-[13rem] lg:w-96 lg:hidden xl:w-96 w-48 hidden sm:block absolute top-0 left-0 object-cover" />
            <NuxtImg src="/assets/shapes.png" alt="Hero Image"
                class="sm:w-[13rem] lg:w-96 xl:w-96 w-48 hidden sm:block absolute bottom-0 right-0 object-cover rotate-180" />
        </div>
    </div>
</template>