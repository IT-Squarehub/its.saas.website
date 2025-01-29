<script setup lang="ts">
// Define interfaces for each nested type
interface SocialLinks {
    facebook: string
    linkedin: string
    twitter: string
    instagram: string
}

interface Service {
    name: string
    link: string
}

interface Location {
    country: string
    phoneNumbers: string[]
    address: string
}

interface SanityImage {
    asset: {
        url: string
    }
    alt: string
}

// Main Footer interface
interface FooterSection {
    logo: {
        asset: {
            url: string
        }
        alt: string
    }
    tagline: string
    email: string
    socials: SocialLinks
    outsourcingServices: Service[]
    otherServices: Service[]
    locations: Location[]
    certificateLogos: SanityImage[]
}

// GROQ query
const query = groq`*[_type == "footer"][0] {
  logo {
    asset-> {
      url
    },
    alt
  },
  tagline,
  email,
  socials {
    facebook,
    linkedin,
    twitter,
    instagram
  },
  outsourcingServices[] {
    name,
    link
  },
  otherServices[] {
    name,
    link
  },
  locations[] {
    country,
    phoneNumbers,
    address
  },
  certificateLogos[] {
    asset-> {
      url
    },
    alt
  }
}`

// Fetch data from Sanity
const { data: footerData } = await useSanityQuery<FooterSection>(query)

// Computed properties for safe access
const certificateLogos = computed(() => footerData.value?.certificateLogos || [])
const locations = computed(() => footerData.value?.locations || [])
const outsourcingServices = computed(() => footerData.value?.outsourcingServices || [])
const otherServices = computed(() => footerData.value?.otherServices || [])
</script>

<template>
    <footer class="bg-white py-8 border-t border-purple-400">
        <div class="container mx-auto px-4 md:px-12">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                <!-- Company Info -->
                <div class="text-center sm:text-left px-2 sm:px-0">
                    <NuxtLink to="#" class="logo-button inline-block sm:block">
                        <nuxt-img class="mb-4 mx-auto sm:mx-0" :src="footerData?.logo.asset.url"
                            :alt="footerData?.logo.alt" width="280" height="35" />
                    </NuxtLink>
                    <p class="text-xs sm:text-xs md:text-sm text-gray-600 mb-6">
                        {{ footerData?.tagline }}
                    </p>
                    <h4 class="font-semibold text-sm sm:text-base md:text-lg mb-2">Contact and Follow Us</h4>
                    <div class="mb-4">
                        <a :href="`mailto:${footerData?.email}`"
                            class="inline-flex text-xs sm:text-xs md:text-xs text-black hover:underline mb-2 justify-center sm:justify-start items-center">
                            <Icon name="mdi-email" class="mr-2" /> {{ footerData?.email }}
                        </a>
                    </div>

                    <!-- Social Icons -->
                    <div class="flex space-x-4 justify-center sm:justify-start">
                        <a :href="footerData?.socials.facebook" target="_blank"
                            class="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400 transition-colors hover:bg-purple-500">
                            <Icon name="mdi-facebook" class="text-white hover:text-gray-200" />
                        </a>
                        <a :href="footerData?.socials.linkedin" target="_blank"
                            class="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400 transition-colors hover:bg-purple-500">
                            <Icon name="mdi-linkedin" class="text-white hover:text-gray-200" />
                        </a>
                        <a :href="footerData?.socials.twitter" target="_blank"
                            class="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400 transition-colors hover:bg-purple-500">
                            <Icon name="prime:twitter" class="text-white hover:text-gray-200" />
                        </a>
                        <a :href="footerData?.socials.instagram" target="_blank"
                            class="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400 transition-colors hover:bg-purple-500">
                            <Icon name="mdi-instagram" class="text-white hover:text-gray-200" />
                        </a>
                    </div>
                </div>

                <!-- Contact Details -->
                <div class="text-center sm:text-left px-4 sm:px-0">
                    <h4 class="font-semibold text-sm sm:text-base md:text-lg mb-4">Locations</h4>
                    <ul class="text-xs sm:text-sm md:text-base text-gray-600 space-y-6 sm:space-y-4">
                        <li v-for="location in locations" :key="location.country"
                            class="flex flex-col sm:flex-row items-center sm:items-start">
                            <div class="w-full">
                                <span class="font-semibold text-sm sm:text-base md:text-sm block mb-2 sm:mb-1">
                                    {{ location.country }}
                                </span>
                                <div class="flex flex-col items-center sm:items-start space-y-2">
                                    <span v-for="(phone, index) in location.phoneNumbers" :key="index"
                                        class="flex items-center">
                                        <Icon name="mdi-phone" class="mr-2 text-black" />
                                        <span class="text-xs sm:text-xs md:text-xs">{{ phone }}</span>
                                    </span>
                                    <span class="flex items-center">
                                        <Icon name="mdi-map-marker" class="mr-2 text-black flex-shrink-0 hidden sm:block" />
                                        <span class="text-xs sm:text-xs md:text-xs text-center sm:text-left">{{ location.address }}</span>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- Services -->
                <div class="text-center sm:text-left px-2 sm:px-0">
                    <h4 class="font-semibold text-sm sm:text-base md:text-lg mb-4">Product Offerings</h4>
                    <ul class="text-xs sm:text-xs md:text-xs text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-x-10">
                        <li v-for="service in outsourcingServices" :key="service.name">
                            <NuxtLink :to="service.link" target="_blank"
                                class="hover:text-purple-500 transition-colors">
                                {{ service.name }}
                            </NuxtLink>
                        </li>
                    </ul>

                    <!-- Certificate Logos -->
                    <h4 class="font-semibold text-sm sm:text-base md:text-lg mt-12">Certified Professionals</h4>
                    <div class="mt-5 grid grid-cols-6 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 justify-center">
                        <nuxt-img v-for="logo in certificateLogos" :key="logo.asset.url" class="mb-4 mx-auto"
                            :src="logo.asset.url" :alt="logo.alt" width="280" height="280" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>