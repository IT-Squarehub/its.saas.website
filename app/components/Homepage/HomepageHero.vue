<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

export interface HomepageHero {
  hero: {
    heading: string;
    image: {
      asset: {
        _ref: string;
        url: string;
      },
      alt: string;
    }
  }
}

const query = groq`*[_type == "homepage"][0]{
  hero {
    heading,
    image {
      asset-> {
        _ref,
        url
      },
      alt
    }
  }
}`

// Fetch data from Sanity
const { data: heroData, pending, error } = await useSanityQuery<HomepageHero>(query)

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 1000, // Animation duration in ms
    easing: 'ease-out', // Easing type
    once: true // Whether animation should happen only once
  });
});
</script>

<template>
  <div
    class="min-h-screen pt-10 md:pt-20 flex flex-col items-center justify-center bg-[url('/assets/net-background.png')] bg-cover bg-center px-4 sm:px-6 lg:px-8">
    <div v-if="pending" class="loading-spinner">
      Loading...
    </div>

    <div v-else-if="error" class="error-message">
      Error loading content
    </div>

    <!-- Main content container -->
    <div v-else class="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-0 md:gap-10">

      <!-- Title and Button Container -->
      <div
        class="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-6 py-8 md:gap-2 lg:gap-5"
        data-aos="fade-right">

        <h1
          class="text-3xl sm:text-4xl lg:text-5xl xl:text-[4rem] font-Poppins font-bold leading-tight bg-gradient-to-t from-slate-800 to-purple-500 bg-clip-text text-transparent text-center md:text-left max-w-3xl">
          {{ heroData?.hero?.heading || 'Hero Title' }}
        </h1>

        <button
          class="bg-purple-700 px-6 py-3 rounded-md font-normal text-white flex justify-center items-center gap-2 text-sm md:text-base hover:bg-purple-800 transition-colors">
          <Icon name="mdi:eye" />
          <span>Enquire Now</span>
        </button>
      </div>

      <!-- Image Container -->
      <div class="w-full md:w-1/2" data-aos="fade-left">

        <img class="w-full h-auto max-h-[40rem] object-contain"
          :src="heroData?.hero?.image ? urlFor(heroData.hero.image).width(1200).url() : '/assets/hero2.png'"
          :alt="heroData?.hero?.image?.alt || 'Hero image'">
      </div>
    </div>
  </div>
</template>

<style>
/* Import AOS styles */
@import 'aos/dist/aos.css';
</style>
