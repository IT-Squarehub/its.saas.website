<script setup lang="ts">
interface Navbar {
    logo: {
        asset: {
            _ref: string;
            url: string;
        };
        alt: string;
    }
}

const query = groq`*[_type == "navbar"][0]{
  logo {
    asset-> {
      _ref,
      url
    },
    alt
  }
}`


// Fetch data from Sanity
const { data: navbarData } = await useSanityQuery<Navbar>(query)

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<style>
.drop-fade-enter-active {
    transition: all 0.7s ease-out;
}

.drop-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.drop-fade-enter-from,
.drop-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>


<!-- Without Padding -->
<template>
    <nav class="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div class="mx-auto px-5 md:px-7 sm:px-5">
            <div class="flex h-16 justify-between">

                <div class="flex flex-row justify-center items-center gap-3">
                    <div>
                        <!-- <img :src={{ navbarData?.logo.asset.url }} alt={{ navbarData?.logo.alt }} class="h-10 w-auto" /> -->
                        <img v-if="navbarData?.logo" :src="navbarData.logo.asset.url" :alt="navbarData.logo.alt"
                            class="h-10 w-auto" />
                    </div>
                    <NuxtLink to="/" class="flex-shrink-0 items-center flex">
                        <p class="leading-4">Human Resources<br><span class="font-bold">Information System</span></p>
                    </NuxtLink>
                </div>


                <button @click="toggleMenu" class="md:hidden">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>


                <div class="hidden md:flex items-center space-x-8">
                    <div class="relative">
                        <NuxtLink to="/" class="px-4 py-2 text-gray-800 hover:text-purple-600 transition-colors">
                            Home
                            <div v-if="$route.path === '/'"
                                class="absolute bottom-0 -mb-3 left-0 w-full h-1 bg-purple-600 rounded-t-sm">
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="relative">
                        <NuxtLink to="/features"
                            class="px-4 py-2 text-gray-800 hover:text-purple-600 transition-colors">
                            Features
                            <div v-if="$route.path === '/features'"
                                class="absolute bottom-0 -mb-3 left-0 w-full h-1 bg-purple-600 rounded-t-sm">
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="relative">
                        <NuxtLink to="/career" class="px-4 py-2 text-gray-800 hover:text-purple-600 transition-colors">
                            Careers
                            <div v-if="$route.path === '/career'"
                                class="absolute bottom-0 -mb-3 left-0 w-full h-1 bg-purple-600 rounded-t-sm">
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="relative">
                        <NuxtLink to="/contact" class="px-4 py-2 text-gray-800 hover:text-purple-600 transition-colors">
                            Contact Us
                            <div v-if="$route.path === '/contact'"
                                class="absolute bottom-0 -mb-3 left-0 w-full h-1 bg-purple-600 rounded-t-sm">
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>


            <Transition name="drop-fade">
                <div v-if="isMenuOpen" class="md:hidden">
                    <div class="flex flex-col space-y-4 px-4 py-5">
                        <NuxtLink class="text-gray-800 hover:text-purple-600 py-2" to="/" @click="isMenuOpen = false">
                            Home
                        </NuxtLink>
                        <NuxtLink class="text-gray-800 hover:text-purple-600 py-2" to="/features"
                            @click="isMenuOpen = false">
                            Features
                        </NuxtLink>
                        <NuxtLink class="text-gray-800 hover:text-purple-600 py-2" to="/career"
                            @click="isMenuOpen = false">
                            Careers
                        </NuxtLink>
                        <NuxtLink class="text-gray-800 hover:text-purple-600 py-2" to="/contact"
                            @click="isMenuOpen = false">
                            Contact Us
                        </NuxtLink>
                    </div>
                </div>
            </Transition>
        </div>
    </nav>
</template>

<!-- With Padding -->

<!-- <template>
    <nav class="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div class="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
            <div class="flex h-20 justify-between">
                
                <div class="flex flex-row justify-center items-center gap-4">
                    <div>
                        <img src="~/public/logo.svg" alt="" class="h-10 w-auto" />
                    </div>
                    <NuxtLink to="/" class="flex-shrink-0 items-center flex">
                        <p class="leading-4 text-gray-800">Human Resources<br><span class="font-bold">Information System</span></p>
                    </NuxtLink>
                </div>

                
                <button @click="toggleMenu" class="md:hidden p-2">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                
                <div class="hidden md:flex items-center space-x-10">
                    <div class="relative">
                        <NuxtLink to="/" class="px-3 py-6 text-gray-800 hover:text-purple-600 transition-colors">
                            Home
                            <div v-if="$route.path === '/'" 
                                 class="absolute bottom-0 -mb-3 left-0 w-full h-1 bg-purple-600 rounded-t-sm">
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="relative">
                        <NuxtLink to="/features" class="px-3 py-6 text-gray-800 hover:text-purple-600 transition-colors">
                            Features
                            <div v-if="$route.path === '/features'" 
                                 class="absolute bottom-0 -mb-3 left-0 w-full h-1 bg-purple-600 rounded-t-sm">
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="relative">
                        <NuxtLink to="/career" class="px-3 py-6 text-gray-800 hover:text-purple-600 transition-colors">
                            Careers
                            <div v-if="$route.path === '/career'" 
                                 class="absolute bottom-0 -mb-3 left-0 w-full h-1 bg-purple-600 rounded-t-sm">
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="relative">
                        <NuxtLink to="/contact" class="px-3 py-6 text-gray-800 hover:text-purple-600 transition-colors">
                            Contact Us
                            <div v-if="$route.path === '/contact'" 
                                 class="absolute bottom-0 -mb-3 left-0 w-full h-1 bg-purple-600 rounded-t-sm">
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            
            <Transition name="drop-fade">
                <div v-if="isMenuOpen" class="md:hidden">
                    <div class="flex flex-col space-y-4 px-4 py-5">
                        <NuxtLink class="text-gray-800 hover:text-purple-600 py-2" to="/" @click="isMenuOpen = false">
                            Home
                        </NuxtLink>
                        <NuxtLink class="text-gray-800 hover:text-purple-600 py-2" to="/features" @click="isMenuOpen = false">
                            Features
                        </NuxtLink>
                        <NuxtLink class="text-gray-800 hover:text-purple-600 py-2" to="/career" @click="isMenuOpen = false">
                            Careers
                        </NuxtLink>
                        <NuxtLink class="text-gray-800 hover:text-purple-600 py-2" to="/contact" @click="isMenuOpen = false">
                            Contact Us
                        </NuxtLink>
                    </div>
                </div>
            </Transition>
        </div>
    </nav>
</template> -->

