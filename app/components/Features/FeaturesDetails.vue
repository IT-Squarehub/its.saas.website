<script setup lang="ts">
interface DetailsSection {
    features: {
        heading: string,
        subtitle: string,
        items: Details[]
    }
}

interface Details {
    title: string,
    subtitle: string,
    image: {
        asset: {
            url: string
        }
    }
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
  }`

// Fetch data from Sanity
const { data: detailsData } = await useSanityQuery<DetailsSection>(query)

// Computed property to ensure we have the items safely
const featureItems = computed(() => detailsData.value?.features.items || [])
</script>

<template>
    <section class="max-w-7xl mx-auto px-10 py-16">
        <!-- Main Heading -->
        <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
                {{ detailsData?.features.heading }}
            </h1>
            <p class="text-gray-600 text-lg">
                {{ detailsData?.features.subtitle }}
            </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- First Two Items in 2-column Grid -->
            <div v-for="(item, index) in featureItems.slice(0, 2)" :key="index"
                class="bg-white rounded-xl p-8 shadow-sm border border-purple-300 transition-all duration-200 ease-in-out hover:scale-105 hover:border-purple-300">
                <h2 class="text-2xl font-semibold text-purple-700 mb-4 text-center">
                    {{ item.title }}
                </h2>
                <p class="text-gray-600 mb-6">
                    {{ item.subtitle }}
                </p>
                <div class="bg-gray-50 rounded-lg p-4">
                    <img :src="item.image.asset.url" :alt="item.title" class="w-full rounded-lg shadow-sm" />
                </div>
            </div>

            <!-- Last Item Spanning Full Width -->
            <div v-if="featureItems[2]"
                class="bg-white rounded-xl p-8 shadow-sm border border-purple-300 md:col-span-2 transition-all duration-200 ease-in-out hover:scale-105 hover:border-purple-300">
                <h2 class="text-2xl font-semibold text-purple-700 mb-4 text-center">
                    {{ featureItems[2].title }}
                </h2>
                <p class="text-gray-600 mb-6">
                    {{ featureItems[2].subtitle }}
                </p>
                <div class="bg-gray-50 rounded-lg p-4">
                    <img :src="featureItems[2].image.asset.url" :alt="featureItems[2].title"
                        class="w-full rounded-lg shadow-sm" />
                </div>
            </div>
        </div>
    </section>
</template>