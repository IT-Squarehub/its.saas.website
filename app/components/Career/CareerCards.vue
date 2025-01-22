<script setup>
import CareerPopup from './CareerPopup.vue';
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
    AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: false,
    });
});

const activePopupId = ref(null);
const loading = ref(false);
const currentPage = ref(1);
const itemsPerPage = 6;

function triggerPopup(positionId) {
    if (activePopupId.value === positionId) {
        activePopupId.value = null;
    } else {
        activePopupId.value = positionId;
    }
}

function onImageLoad() {
    loading.value = false;
}

const query = groq`*[_type == "careers"][0]`

const { data: careerData, pending, error } = await useSanityQuery(query)
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(useSanity().config);
function urlFor(source) {
    return builder.image(source).auto("format");
}
inject("urlFor", urlFor);

// Pagination computed properties
const totalPages = computed(() => {
    if (!careerData.value?.positions) return 1;
    return Math.ceil(careerData.value.positions.length / itemsPerPage);
});

const paginatedPositions = computed(() => {
    if (!careerData.value?.positions) return [];
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return careerData.value.positions.slice(start, end);
});

// Updated pagination methods with scroll behavior
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
        scrollToTop();
    }
}

function previousPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
        scrollToTop();
    }
}

function goToPage(page) {
    if (currentPage.value !== page) {
        currentPage.value = page;
        scrollToTop();
    }
}
</script>

<template>
    <!-- SHOULD BE IN v-for FOR SANITY IMPLEMENTATION -->
    <!-- Job Cards with AOS -->
    <div>
        <div
            class="grid grid-cols-1 min-[900px]:grid-cols-2 gap-16 mx-32 max-[1050px]:mx-8 mt-[-100px] max-[1200px]:mx-32">
            <div v-for="position in paginatedPositions" :key="position.id" class="" data-aos="zoom-in"
                data-aos-duration="800">
                <div class="bg-slate-50 border-2 border-purple-500 rounded-3xl 
                            shadow-xl px-8 content-center min-h-80 max-h-96 
                            hover:bg-purple-100 hover:scale-105 transition-all 
                            ease-in-out duration-300 max-[350px]:py-4 max-[350px]:max-h-[500px]">
                    <p v-if="position.availability" class="text-xl">
                        <span class="bg-green-300 rounded-2xl px-4">Available</span>
                    </p>
                    <p v-else class="text-xl">
                        <span class="bg-red-300 rounded-2xl px-4">Not Available</span>
                    </p>
                    <p class="text-3xl mt-3">{{ position.name }}</p>
                    <p class="text-lg">{{ position.description }}</p>
                    <p class="text-lg mt-4">
                        <span class="bg-violet-300 rounded-2xl px-4 py-1">
                            <button @click="triggerPopup(position.id)">Apply Now</button>
                        </span>
                    </p>
                </div>
            </div>
        </div>

        <!-- Pagination Controls -->
        <div class="flex justify-center items-center space-x-4 mt-8 mb-8">
            <button @click="previousPage" :disabled="currentPage === 1"
                class="px-4 py-2 bg-purple-500 text-white rounded-full disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-600 transition-colors">
                <Icon name="weui:arrow-outlined" style="color: #fff" class="flex rotate-180" />
            </button>

            <!-- Page Indicators -->
            <div class="flex space-x-2">
                <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
                    class="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    :class="page === currentPage ? 'bg-purple-500 text-white' : 'bg-gray-200 hover:bg-purple-200'">
                    {{ page }}
                </button>
            </div>

            <button @click="nextPage" :disabled="currentPage === totalPages"
                class="px-4 py-2 bg-purple-500 text-white rounded-full disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-600 transition-colors">
                <Icon name="weui:arrow-outlined" style="color: #fff" class="flex" />
            </button>
        </div>


        <!-- Popup with Teleport -->
        <teleport to="body">
            <transition name="popup">
                <CareerPopup v-if="activePopupId"
                    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    @close="triggerPopup(null)">
                    <div
                        class="bg-purple-200 rounded-3xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl mx-auto max-h-[90vh] overflow-y-auto relative">
                        <!-- Loading Spinner -->
                        <div v-if="loading" class="flex justify-center items-center w-full h-full bg-gray-100">
                            <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500"></div>
                        </div>

                        <!-- Image Section -->
                        <div v-else class="flex-col w-full bg-purple-100 rounded-l-3xl px-8 relative">
                            <button @click="triggerPopup(null)"
                                class="absolute top-4 right-4 p-2 bg-purple-500 rounded-full shadow-md hover:bg-purple-700">
                                <CareerCloseIcon />
                            </button>
                            <img :src="urlFor(careerData.positions.find(pos => pos.id === activePopupId)?.image)"
                                alt="Position Image" @load="onImageLoad" class="max-w-full h-auto">
                        </div>
                    </div>
                </CareerPopup>
            </transition>
        </teleport>
    </div>

    <!-- Link Button -->
    <br>
    <div class=" flex object-center justify-center content-center items-center">
        <NuxtLink to="https://www.itsquarehub.com/careers" data-aos="zoom-in" class=" inline-block ">
            <div class=" hover:scale-125 transition-all ease-in-out duration-500 
                    mb-24 mt-24 text-center ">

                <p class=" text-white ">
                    <span class=" bg-violet-800 hover:bg-violet-500 
                                transition-all ease-in-out duration-500 p-4 rounded-xl ">
                        Find More Jobs in ITS Hub
                    </span>
                </p>

            </div>
        </NuxtLink>
    </div>

    <hr class=" bg-slate-400 pt-1 mx-56 mb-32 max-[1200px]:mx-32 max-[800px]:mx-16">

</template>

<style>
.popup-enter-active, .popup-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}
.popup-enter-from, .popup-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

/* Spinner animation */
.animate-spin {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
