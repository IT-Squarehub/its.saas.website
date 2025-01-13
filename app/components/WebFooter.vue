<script lang="ts">
</script>

<template>
    <footer class="bg-white py-10 border-t border-purple-400">
        <div class="container mx-auto px-6 md:px-12">
            <!-- Grid with responsive columns -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                <!-- Company Info -->
                <div>
                    <NuxtLink to="#" class="logo-button">
                        <nuxt-img class="mb-4" src="/assets/its-logo.png" alt="IT Squarehub Logo" width="280"
                            height="35"></nuxt-img>
                    </NuxtLink>
                    <!-- <img src="/its-logo.png" alt="Ward Logo" class="h-10 mb-4" /> -->
                    <p class="text-xs sm:text-xs md:text-sm text-gray-600 mb-8">
                        We provide world-class services at a fraction of the cost without sacrificing quality.
                    </p>
                    <h4 class="font-semibold text-sm sm:text-base md:text-lg mb-2">Contact and Follow Us on:</h4>
                    <div class="mb-4">
                        <a href="mailto:customercare@itsquarehub.com"
                            class="block text-xs sm:text-xs md:text-xs  text-black hover:underline mb-2">
                            <Icon name="mdi-email" class="mr-2 " /> customercare@itsquarehub.com
                        </a>
                    </div>

                    <!-- Social Icons -->
                    <div class="flex space-x-4">
                        <div class="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400">
                            <Icon name="mdi-facebook" class="text-white hover:text-gray-200" />
                        </div>
                        <div class="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400">
                            <Icon name="mdi-linkedin" class="text-white hover:text-gray-200" />
                        </div>
                        <div class="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400">
                            <Icon name="mdi-twitter" class="text-white hover:text-gray-200" />
                        </div>
                    </div>
                </div>

                <!-- Services -->
                <div>
                    <h4 class="font-semibold text-sm sm:text-base md:text-lg mb-4">Outsourcing Services</h4>
                    <ul
                        class="text-xs sm:text-xs md:text-xs text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-x-10">
                        <li>Virtual Assistant</li>
                        <li>Healthcare Virtual Assistants</li>
                        <li>Cloud Engineers</li>
                        <li>.Net API Developers</li>
                        <li>Digital Marketing & Creative</li>
                        <li>Customer Service Assistants</li>
                        <li>Accountants</li>
                        <li>Executive Assistants</li>
                        <li>Software Engineers</li>
                        <li>Engineering</li>
                        <li>Front-End Developers</li>
                        <li>Network Engineers</li>
                        <li>Real Estate Agents</li>
                        <li>Bookkeepers</li>
                        <li>Back-End Developers</li>
                        <li>And Many More...</li>
                    </ul>


                    <h4 class="font-semibold text-sm sm:text-base md:text-lg mt-6">Other Services:</h4>
                    <p class="text-xs sm:text-xs md:text-sm text-gray-600">Software Development</p>
                </div>

                <!-- Contact Details -->
                <div>
                    <h4 class="font-semibold text-sm sm:text-base md:text-lg mb-4">Locations</h4>
                    <ul class="text-xs sm:text-sm md:text-base text-gray-600">
                        <li class="flex items-start mb-4">
                            <div>
                                <span class="font-semibold text-sm sm:text-base md:text-sm">Philippines:</span><br />
                                <Icon name="mdi-phone" class="mr-1 text-black " /><span
                                    class="text-xs sm:text-xs md:text-xs ">+63 906 001-0784 (Globe)</span><br>
                                <Icon name="mdi-phone" class="mr-1 text-black" /><span
                                    class="text-xs sm:text-xs md:text-xs">+63 921 859-1348 (Smart)</span><br />
                                <Icon name="mdi-map-marker" class="mr-1 text-black" /><span
                                    class="text-xs sm:text-xs md:text-xs">Unit 5, Clark Center 09, Jose Abad Santos,
                                    Clark Freeport Zone, Central Luzon</span>
                            </div>
                        </li>
                        <li class="flex items-start mb-4">
                            <div>
                                <span class="font-semibold text-sm sm:text-base md:text-sm">USA:</span><br />
                                <Icon name="mdi-phone" class="mr-1 text-black" /> <span
                                    class="text-xs sm:text-xs md:text-xs">+1 307 241-5887</span><br />
                                <Icon name="mdi-map-marker" class="mr-1 text-black" /><span
                                    class="text-xs sm:text-xs md:text-xs">1150 Nw 72nd Ave Tower 1 lue-60Ste 455 #14509,
                                    Miami FL 33126</span>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <div>
                                <span class="font-semibold text-sm sm:text-base md:text-sm">UK:</span><br />
                                <Icon name="mdi-phone" class="mr-1 text-black" /> <span
                                    class="text-xs sm:text-xs md:text-xs">+44 748 888-9923</span><br />
                                <Icon name="mdi-map-marker" class="mr-1 text-black" /> <span
                                    class="text-xs sm:text-xs md:text-xs">63-66 Hatton Garden, London, EC1N 8LE</span>
                            </div>
                        </li>
                    </ul>

                    <!-- Logos -->
                    <div class="mt-6 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
                        <nuxt-img class="mb-4" src="/assets/certs.png" alt="IT Squarehub Logo" width="280"
                            height="280"></nuxt-img>
                        <!-- <img src="/certs.png" alt="Ward Logo" class="h-10 mx-auto" /> -->
                        <nuxt-img class="mb-4" src="/assets/atd.png" alt="IT Squarehub Logo" width="280"
                            height="280"></nuxt-img>
                        <!-- <img src="/atd.png" alt="CCBP Logo" class="h-10 mx-auto" /> -->
                        <nuxt-img class="mb-4" src="/assets/cambridge.png" alt="IT Squarehub Logo" width="280"
                            height="280"></nuxt-img>
                        <!-- <img src="/cambridge.png" alt="Cambridge Logo" class="h-10 mx-auto" /> -->
                        <nuxt-img class="mb-4" src="/assets/h cert.png" alt="IT Squarehub Logo" width="280"
                            height="280"></nuxt-img>
                        <!-- <img src="/h cert.png" alt="CCBP Logo" class="h-10 mx-auto" /> -->
                        <nuxt-img class="mb-4" src="/assets/ccbp.png" alt="IT Squarehub Logo" width="280"
                            height="280"></nuxt-img>
                        <!-- <img src="/ccbp.png" alt="CCBP Logo" class="h-10 mx-auto" /> -->
                        <nuxt-img class="mb-4" src="/assets/shrm.png" alt="IT Squarehub Logo" width="280"
                            height="280"></nuxt-img>
                        <!-- <img src="/shrm.png" alt="SHRM Logo" class="h-10 mx-auto" /> -->
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>