<script setup lang="ts">
interface Feature {
    title: string
    subtitle: string
    image: {
        asset: {
            _ref: string
        }
    }
}

interface FeaturesSection {
    heading: string
    subtitle: string
    features: Feature[]
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


// Fetch data from Sanity
const { data: featuresData } = await useSanityQuery<FeaturesSection>(query)
</script>

<template>
    <div class="py-20 font-InstrumentSans" v-if="featuresData">

        <div class="mx-auto px-12 lg:px-32">
            <!-- Features header section -->

            <!-- Features grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                <!-- Main heading section -->
                <div class=" flex flex-col">
                    <div class="flex items-center justify-center md:justify-start gap-2 mb-8">
                        <div class="p-2 bg-purple-100 rounded-lg">
                            <Icon name="heroicons:squares-2x2" class="w-6 h-6 text-purple-600" />
                        </div>
                        <span class="text-purple-600 font-semibold">Features</span>
                    </div>
                    <h1 class="text-5xl font-bold mb-6 text-gray-900 text-center md:text-left">
                        {{ featuresData.featuresSection.heading }}
                    </h1>
                    <p class="text-xl text-gray-600 text-center md:text-left">
                        {{ featuresData.featuresSection.subtitle }}
                    </p>
                </div>
                <div v-for="feature in featuresData.featuresSection.features" :key="feature.title"
                    class="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border-2 border-purple-300">
                    <img :src="feature.image.asset.url" :alt="feature.title"
                        class="w-full h-48 object-cover rounded-xl mb-6">
                    <h3 class="text-xl font-semibold mb-3 text-gray-900 text-center">{{ feature.title }}</h3>
                    <p class="text-gray-600 text-center">{{ feature.subtitle }}</p>
                </div>
            </div>
        </div>
    </div>
</template>