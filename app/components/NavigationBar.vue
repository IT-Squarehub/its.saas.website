<template>
    <nav class="bg-white fixed top-0 left-0 right-0 z-50 shadow-md border-b-4 border-purple-400 ">
        <div class=" mx-auto px-5 md:px-7 sm:px-5">
            <div class="flex h-20 justify-between">
                <!-- Logo -->
                <div class="md:hidden flex flex-row justify-center items-center gap-3">
                    <div>
                        <img src="~/public/logo.svg" alt="" class="h-10 w-auto" />
                    </div>
                    <NuxtLink to="/" class="flex-shrink-0 items-center flex text-lg">
                        <p class="leading-4">Human Resources<br><span class="font-bold">Information System</span></p>
                    </NuxtLink>
                </div>


                <!-- Mobile menu button -->
                <button @click="toggleMenu" class="md:hidden">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- Desktop menu -->
                <div class="hidden md:flex items-center justify-between flex-1">
                    <!-- Logo -->
                    <NuxtLink to="/" class="flex flex-shrink-0 items-center">
                        <!-- <NuxtImg class="h-6 w-auto" densities="x1" src="/assets/logo.png" alt="ITS Logo" /> -->
                        <div class="flex items-center space-x-2">
                            <div>
                                <img src="~/public/logo.svg" alt="" class="h-10 w-auto" />
                            </div>
                            <div>
                                <p class="leading-4 text-lg">Human Resources <br><span class="font-bold">Information
                                        System</span></p>
                                <!-- <div class="font-bold text-2xl"><span class="text-itspurple">ITS</span> HRIS</div> -->
                            </div>
                        </div>
                    </NuxtLink>
                    <div class="flex space-x-7 text-base justify-center items-center">
                        <NuxtLink to="/">Home</NuxtLink>
                        <NuxtLink :to="{ path: '/features' }">Features</NuxtLink>
                        <NuxtLink :to="{ path: '/career', hash: '#careers' }">Careers</NuxtLink>
                        <NuxtLink :to="{ path: '/contact' }">Contact Us</NuxtLink>

                    </div>
                    <!-- <NuxtLink :to="{ path: '/', hash: '#contacts' }"
                        class="bg-gradient-to-t from-gray-700 to-itspurple hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-full">
                        Contact Us
                    </NuxtLink> -->
                </div>
            </div>

            <!-- Mobile menu -->
            <Transition name="drop-fade">
                <div v-if="isMenuOpen" class="md:hidden">
                    <div class="flex flex-col space-y-4 px-2 pt-2 pb-3 border-b-2">
                        <NuxtLink class="text-itsblue" to="/" @click="isMenuOpen = false">Home</NuxtLink>
                        <NuxtLink class="text-itsblue" :to="{ path: '/', hash: '#services' }"
                            @click="isMenuOpen = false">
                            Features</NuxtLink>
                        <NuxtLink class="text-itsblue" :to="{ path: '/', hash: '#reviews' }"
                            @click="isMenuOpen = false">
                            Careers</NuxtLink>
                        <NuxtLink class="text-itsblue" :to="{ path: '/', hash: '#reviews' }"
                            @click="isMenuOpen = false">
                            Contact Us</NuxtLink>
                    </div>
                </div>
            </Transition>
        </div>
    </nav>
</template>

<script setup lang="ts">
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