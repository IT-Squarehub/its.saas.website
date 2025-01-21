<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

const selectedFeature = ref(1)

interface SolutionsSection {
    solutions: {
        heading: string,
        subtitle: string,
        items: Feature[]
    }
}

interface Feature {
    id: number,
    title: string,
    description: string,
    image: {
        asset: {
            url: string
        }
    }
}

const query = groq`*[_type == "featuresPage"][0] {
  solutions {
    heading,
    subtitle,
    items[] {
      id,
      title,
      description,
      image {
        asset-> {
          url
        }
      }
    }
  }
}`

// Fetch data from Sanity
const { data } = await useSanityQuery<SolutionsSection>(query)

// Get the features array from the solutions section
const features = computed(() => data.value?.solutions.items || [])

const selectedFeatureData = computed(() =>
    features.value.find(f => f.id === selectedFeature.value)
)

// Initialize AOS
onMounted(() => {
    AOS.init({
        duration: 800, // Animation duration in ms
        easing: 'ease-in-out', // Easing type
        once: false // Whether animation should happen only once
    });
});
</script>

<template>
    <section class="w-full py-32">
        <div class="max-w-6xl mx-auto px-10">
            <!-- Solutions Label -->
            <div class="flex items-center justify-center mb-6" data-aos="fade-up">
                <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-100">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 1.6C4.464 1.6 1.6 4.464 1.6 8C1.6 11.536 4.464 14.4 8 14.4C11.536 14.4 14.4 11.536 14.4 8C14.4 4.464 11.536 1.6 8 1.6ZM8 13.2C5.128 13.2 2.8 10.872 2.8 8C2.8 5.128 5.128 2.8 8 2.8C10.872 2.8 13.2 5.128 13.2 8C13.2 10.872 10.872 13.2 8 13.2Z"
                            fill="#9333EA" />
                    </svg>
                    <span class="text-purple-700 font-medium">Solutions</span>
                </div>
            </div>

            <!-- Title -->
            <div class="text-center mb-4 flex items-center justify-center" data-aos="fade-up">
                <h2 class="text-4xl md:text-6xl font-bold inline-flex items-center lg:gap-4">
                    {{ data?.solutions.heading }}
                    <div class="-left-8 bottom-16">
                        <img class="rotate-12 hidden lg:block" src="/assets/checkbox.png" width="80px">
                    </div>
                </h2>
            </div>

            <!-- Description -->
            <p class="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto" data-aos="fade-up">
                {{ data?.solutions.subtitle }}
            </p>

            <!-- Main Content -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Feature Tiles -->
                <div class="space-y-4" ref="cardsContainer" data-aos="fade-right">
                    <button v-for="feature in features" :key="feature.id" @click="selectedFeature = feature.id"
                        class="w-full text-center md:text-left p-6 rounded-lg transition-all duration-200 border-2 border-purple-300"
                        :class="[
                            selectedFeature === feature.id
                                ? 'bg-purple-600 text-white hover:scale-105'
                                : 'bg-white hover:bg-purple-50 hover:scale-105'
                        ]">
                        <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
                        <p class="text-sm" :class="[
                            selectedFeature === feature.id
                                ? 'text-purple-100'
                                : 'text-gray-600'
                        ]">
                            {{ feature.description }}
                        </p>
                    </button>
                </div>

                <!-- Feature Image -->
                <div class="h-full" data-aos="fade-left">
                    <div class="overflow-hidden h-full shadow-xl rounded-lg">
                        <NuxtImg :src="selectedFeatureData?.image.asset.url" :alt="selectedFeatureData?.title"
                            class="w-full h-full object-cover" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.grid {
    align-items: stretch;
}
</style>