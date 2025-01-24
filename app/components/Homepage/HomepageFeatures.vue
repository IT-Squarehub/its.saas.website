<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Feature {
    title: string
    subtitle: string
    image: {
        asset: {
            url: string
            _ref: string
        }
    }
}

interface FeaturesSection {
    featuresSection: {
        heading: string
        subtitle: string
        features: Feature[]
    }
}

const query = groq`*[_type == "homepage"][0]{
  featuresSection {
    heading,
    subtitle,
    features[] {
      title,
      subtitle,
      image {
        asset-> {
          url
        }
      }
    }
  }
}`

// Initialize AOS
onMounted(() => {
    AOS.init({
        duration: 500, // Animation duration in ms
        easing: 'ease-out', // Easing type
        once: false // Whether animation should happen only once
    });
});

// Fetch data from Sanity
const { data: featuresData, error } = await useSanityQuery<FeaturesSection>(query)
</script>

<template>
    <div class="py-20 font-InstrumentSans">
        <!-- Error message -->
        <div v-if="error" class="mx-auto px-12 lg:px-32 text-center text-slate-900">
            <p>Oops! Something went wrong while loading the features section. Please try again later.</p>
        </div>

        <!-- Features section -->
        <div v-else-if="featuresData?.featuresSection" class="mx-auto px-12 lg:px-32">
            <!-- Features grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                <!-- Main heading section -->
                <div class="flex flex-col" data-aos="fade-up">
                    <div class="flex items-center justify-center md:justify-start gap-2 mb-8">
                        <div class="p-2 bg-purple-100 rounded-lg">
                            <Icon name="heroicons:squares-2x2" class="w-6 h-6 text-purple-600" />
                        </div>
                        <span class="text-purple-600 font-semibold">Features</span>
                    </div>

                    <!-- Conditional rendering for heading -->
                    <h1 v-if="featuresData.featuresSection.heading"
                        class="text-5xl font-bold mb-6 text-gray-900 text-center md:text-left">
                        {{ featuresData.featuresSection.heading }}
                    </h1>

                    <!-- Conditional rendering for subtitle -->
                    <p v-if="featuresData.featuresSection.subtitle"
                        class="text-xl text-gray-600 text-center md:text-left">
                        {{ featuresData.featuresSection.subtitle }}
                    </p>
                </div>

                <!-- Conditional rendering for features -->
                <template v-if="featuresData.featuresSection.features">
                    <div v-for="feature in featuresData.featuresSection.features" :key="feature.title"
                        data-aos="zoom-in"
                        class="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border-2 border-purple-300">
                        <!-- Conditional rendering for feature image -->
                        <img v-if="feature.image?.asset?.url" :src="feature.image.asset.url" :alt="feature.title"
                            class="w-full h-48 object-cover rounded-xl mb-6">

                        <!-- Conditional rendering for feature title -->
                        <h3 v-if="feature.title" class="text-xl font-semibold mb-3 text-gray-900 text-center">
                            {{ feature.title }}
                        </h3>

                        <!-- Conditional rendering for feature subtitle -->
                        <p v-if="feature.subtitle" class="text-gray-600 text-center">
                            {{ feature.subtitle }}
                        </p>
                    </div>
                </template>
            </div>
        </div>

        <!-- Loading state -->
        <div v-else class="mx-auto px-12 lg:px-32 text-center text-gray-600">
            <p>Loading features section...</p>
        </div>
    </div>
</template>