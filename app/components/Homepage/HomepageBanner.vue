<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

interface BannerSection {
    banner?: {
        heading?: string;
        subtitle?: string;
    };
}

const query = groq`*[_type == "homepage"][0] {
  banner {
    heading,
    subtitle
  }
}`;

// Fetch data from Sanity
const { data: heroData, pending, error } = await useSanityQuery<BannerSection>(query);

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
    <div class="relative w-full bg-purple-300 text-white text-center py-32 mt-16 overflow-hidden">
        <!-- Error message -->
        <div v-if="error" class="mx-auto px-12 lg:px-32 text-center text-slate-900">
            <p>Oops! Something went wrong while loading the hero section. Please try again later.</p>
        </div>

        <!-- Loading state -->
        <div v-else-if="pending" class="mx-auto px-12 lg:px-32 text-center text-gray-600">
            <p>Loading hero section...</p>
        </div>

        <!-- Hero content -->
        <div v-else>
            <!-- Left decorative image -->
            <img src="/assets/shapes.png" alt="Hero Image"
                class="sm:block sm:w-[13rem] lg:w-80 xl:w-96 hidden absolute top-0 left-0 object-cover" />

            <!-- Main content -->
            <div class="flex flex-col items-center justify-center gap-4 px-[10%] sm:px-[20%] xl:px-[30%]">
                <!-- Conditional rendering for heading -->
                <h1 v-if="heroData?.banner?.heading" class="md:text-7xl text-4xl font-bold text-black z-10"
                    data-aos="fade-up">
                    {{ heroData.banner.heading }}
                </h1>

                <!-- Placeholder or conditional rendering for subtitle -->
                <p v-if="heroData?.banner?.subtitle" class="md:text-lg text-md font-Inter font-thin text-black z-10"
                    data-aos="fade-up">
                    {{ heroData.banner.subtitle }}
                </p>

                <!-- Button with a conditional rendering check -->
                <NuxtLink v-if="heroData?.banner?.heading || heroData?.banner?.subtitle"
                    :to="{ path: '/contact', hash: '#form' }"
                    class="bg-white text-black font-semibold px-4 py-2 rounded mt-4" data-aos="fade-up">
                    Get Started
                </NuxtLink>
            </div>

            <!-- Right decorative image -->
                <NuxtImg src="/assets/shapes.png" alt="Hero Image"
                    class="sm:block sm:w-[13rem] lg:w-80 xl:w-96 w-40 hidden absolute bottom-0 right-0 object-cover rotate-180" />
        </div>
    </div>
</template>
