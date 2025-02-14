<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define the structure of the data you expect to fetch
interface DetailsSection {
    features: {
        heading: string;
        subtitle: string;
        items: Details[];
    };
}

interface Details {
    title: string;
    subtitle: string;
    image: {
        asset: {
            url: string;
        };
    };
}

const query = groq`*[_type == "featuresPage"][0] {
    features {
      heading,
      subtitle,
      items[] {
        title,
        subtitle,
        image {
          asset -> {
            url
          }
        }
      }
    }
  }`;

// Fetch data from Sanity
const { data: detailsData, error, pending } = await useSanityQuery<DetailsSection>(query);

// Computed property to ensure we have the items safely
const featureItems = computed(() => detailsData.value?.features?.items || []);

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
    <section class="max-w-7xl mx-auto px-10 py-16">
        <!-- Error message -->
        <div v-if="error" class="text-center text-red-600">
            <p>Oops! Something went wrong while loading the features section. Please try again later.</p>
        </div>

        <!-- Loading state -->
        <div v-else-if="pending" class="text-center text-gray-600">
            <p>Loading features section...</p>
        </div>

        <!-- Features content -->
        <div v-else>
            <!-- Main Heading -->
            <div v-if="detailsData?.features?.heading || detailsData?.features?.subtitle" class="text-center mb-12"
                data-aos="fade-up">
                <h1 v-if="detailsData.features.heading" class="text-4xl md:text-5xl font-bold mb-4">
                    {{ detailsData.features.heading }}
                </h1>
                <p v-if="detailsData.features.subtitle" class="text-gray-600 text-lg">
                    {{ detailsData.features.subtitle }}
                </p>
            </div>

            <!-- Features Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- First Two Items in 2-column Grid -->
                <template v-for="(item, index) in featureItems.slice(0, 2)" :key="index">
                    <div v-if="item" data-aos="zoom-in"
                        class="bg-white rounded-xl p-8 shadow-sm border border-purple-300 transition-all duration-200 ease-in-out hover:scale-105 hover:border-purple-300">
                        <h2 v-if="item.title" class="text-2xl font-semibold text-purple-700 mb-4 text-center">
                            {{ item.title }}
                        </h2>
                        <p v-if="item.subtitle" class="text-gray-600 mb-6">
                            {{ item.subtitle }}
                        </p>
                        <div v-if="item.image?.asset?.url" class="bg-gray-50 rounded-lg p-4">
                            <img :src="item.image.asset.url" :alt="item.title" class="w-full rounded-lg shadow-sm" />
                        </div>
                    </div>
                </template>

                <!-- Last Item Spanning Full Width -->
                <div v-if="featureItems[2]"
                    class="bg-white rounded-xl p-8 shadow-sm border border-purple-300 md:col-span-2 transition-all duration-200 ease-in-out hover:scale-105 hover:border-purple-300"
                    data-aos="zoom-in">
                    <h2 v-if="featureItems[2].title" class="text-2xl font-semibold text-purple-700 mb-4 text-center">
                        {{ featureItems[2].title }}
                    </h2>
                    <p v-if="featureItems[2].subtitle" class="text-gray-600 mb-6">
                        {{ featureItems[2].subtitle }}
                    </p>
                    <div v-if="featureItems[2].image?.asset?.url" class="bg-gray-50 rounded-lg p-4">
                        <img :src="featureItems[2].image.asset.url" :alt="featureItems[2].title"
                            class="w-full rounded-lg shadow-sm" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>