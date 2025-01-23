<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

  interface OverviewSection {
    overview: {
      heading: string,
      subtitle: string,
      image: {
        asset: {
          url: string
        }
      }
    }
  }

  const query = groq`*[_type == "featuresPage"][0] {
    overview {
      heading,
      subtitle,
      image {
        asset-> {
          url
        }
      }
    }
  }`

  // Fetch data from Sanity
  const { data: overviewData } = await useSanityQuery<OverviewSection>(query)

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
  <section class="w-full bg-[url('/assets/net-background.png')] bg-cover bg-center py-32">
    <div class="mx-auto px-10">
      <!-- Overview Label -->
      <div class="flex items-center justify-center mb-6" data-aos="fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-100">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 1.6C4.464 1.6 1.6 4.464 1.6 8C1.6 11.536 4.464 14.4 8 14.4C11.536 14.4 14.4 11.536 14.4 8C14.4 4.464 11.536 1.6 8 1.6ZM8 13.2C5.128 13.2 2.8 10.872 2.8 8C2.8 5.128 5.128 2.8 8 2.8C10.872 2.8 13.2 5.128 13.2 8C13.2 10.872 10.872 13.2 8 13.2Z"
              fill="#9333EA" />
          </svg>
          <span class="text-purple-700 font-medium">Overview</span>
        </div>
      </div>

      <!-- Title -->
      <div class="flex justify-center mb-6" data-aos="fade-up">
        <div class="rounded-lg px-6 py-3">
          <h2 class="text-6xl text-center font-bold text-purple-700">{{ overviewData?.overview.heading }}</h2>
        </div>
      </div>

      <!-- Description -->
      <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center" data-aos="fade-up">
        {{ overviewData?.overview.subtitle }}
      </p>

      <!-- Dashboard Image Container -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Main Dashboard Image -->
        <div class="bg-white rounded-lg shadow-xl p-4" data-aos="fade-up">
          <NuxtImg :src="overviewData?.overview.image.asset.url" alt="HR Command Center Dashboard"
            class="w-full rounded-lg" />
        </div>

        <!-- Decorative Elements -->

        <!-- Clockbox Icon -->
        <div class="absolute xl:-left-8 xl:bottom-16 w-16 bottom-16 left-16 md:w-24 " data-aos="fade-up">
          <NuxtImg class="-rotate-[28deg] -translate-x-14 translate-y-28" src="/assets/clockbox.png" width="120px"
            height="120px" />
        </div>

        <!-- Calendar Icon -->
        <div class="absolute right-8 top-0 w-16 md:w-24" data-aos="fade-up" data-aos-delay="200">
          <NuxtImg class="-rotate-[-21deg] translate-x-10 -translate-y-5" src="/assets/datebox.png" width="120px"
            height="120px" />
        </div>
      </div>
    </div>
  </section>
</template>