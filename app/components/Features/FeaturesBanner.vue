<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define the structure of the data you expect to fetch
interface BannerSection {
    features: {
        banner: {
            heading: string;
            subtitle: string;
        };
    };
}

// Fetch data from Sanity
const query = groq`*[_type == "featuresPage"][0] {
  features {
    banner {
      heading,
      subtitle
    }
  }
}`;

const { data: bannerData, error, pending } = await useSanityQuery<BannerSection>(query);

// Initialize AOS
onMounted(() => {
    AOS.init({
        duration: 1000, // Animation duration in ms
        easing: 'ease-out', // Easing type
        once: false // Whether animation should happen only once
    });
});
</script>

<template>
    <div class="relative w-full bg-purple-300 text-white text-center py-32">
        <!-- Error message -->
        <div v-if="error" class="mx-auto px-12 lg:px-32 text-center text-red-600">
            <p>Oops! Something went wrong while loading the banner section. Please try again later.</p>
        </div>

        <!-- Loading state -->
        <div v-else-if="pending" class="mx-auto px-12 lg:px-32 text-center text-gray-600">
            <p>Loading banner section...</p>
        </div>

        <!-- Banner content -->
        <div v-else>
            <!-- Left decorative image -->
            <img src="/assets/shapes.png" alt="Hero Image" data-aos="fade-right"
                class="sm:block sm:w-[13rem] lg:w-80 xl:w-auto hidden absolute top-0 left-0 object-cover" />

            <!-- Main content -->
            <div class="flex flex-col items-center justify-center gap-4 px-[10%] sm:px-[20%] xl:px-[30%]">
                <!-- Conditional rendering for heading -->
                <h1 v-if="bannerData?.features?.banner?.heading" class="md:text-7xl text-4xl font-bold text-black z-10"
                    data-aos="fade-up">
                    {{ bannerData.features.banner.heading }}
                </h1>

                <!-- Conditional rendering for subtitle -->
                <p v-if="bannerData?.features?.banner?.subtitle"
                    class="md:text-lg text-md font-Inter font-thin text-black z-10" data-aos="fade-up">
                    {{ bannerData.features.banner.subtitle }}
                </p>

                <!-- Button (always visible, but you can conditionally render it if needed) -->
                <NuxtLink :to="{ path: '/contact', hash: '#form' }"
                    class="bg-white text-black font-semibold px-4 py-2 rounded mt-4" data-aos="fade-up">
                    Get Started
                </NuxtLink>
            </div>

            <!-- Right decorative image -->
            <img src="/assets/shapes.png" alt="Hero Image" data-aos="fade-left"
                class="sm:block sm:w-[13rem] lg:w-80 xl:w-auto w-40 hidden absolute bottom-0 right-0 object-cover rotate-180" />
        </div>
    </div>
</template>