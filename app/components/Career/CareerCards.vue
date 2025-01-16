<script setup>
import CareerPopup from './CareerPopup.vue';

const activePopupId = ref(null); // Track the ID of the active popup

function triggerPopup(positionId) {
    if (activePopupId.value === positionId) {
        activePopupId.value = null; // Close if the same popup is clicked again
    } else {
        activePopupId.value = positionId; // Open the popup for the clicked position
    }
}


const query = groq`*[_type == "careers"][0]`

const { data: careerData, pending, error } = await useSanityQuery(query)
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(useSanity().config);
function urlFor(source) {
return builder.image(source).auto("format");
}
inject("urlFor", urlFor);


</script>

<template>
    <!-- SHOULD BE IN v-for FOR SANITY IMPLEMENTATION -->
    <div>
        <div class=" grid grid-cols-2 gap-8  
                    mx-32 max-[1050px]:mx-8 mt-[-100px] max-[1200px]:mx-32 
                    max-[800px]:hidden">

            <div v-for="position in careerData.positions" class="">
                <div class=" bg-teal-100 rounded-3xl shadow-xl px-8 content-center min-h-96 max-h-96" >
                    <p v-if="position.availability" class=" text-xl ">
                        <span class="bg-green-300 rounded-2xl px-4">Available</span>
                    </p>

                    <p v-else class=" text-xl ">
                        <span class="bg-red-300 rounded-2xl px-4">Not Available</span>
                    </p>
                    
                    <p class=" text-3xl mt-3">
                        {{ position.name }}
                    </p>

                    <br>

                    <p class=" text-lg">
                        {{ position.description }}
                    </p>

                    <br>

                    <p class=" text-2xl font-semibold">
                        <span class="bg-violet-300 rounded-2xl px-4 py-1">
                            <button @click="triggerPopup(position.id)">Apply Now</button>
                        </span>
                    </p>
                </div>

        <!-- Transition Wrapper -->
        <Transition name="fade">  
            <CareerPopup 
                            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
                            v-if="activePopupId === position.id"
                        >  

                            <div 
                                class="bg-purple-200 rounded-3xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl mx-auto max-h-[90vh] overflow-y-auto"
                            >
                                <!-- Image Section -->
                                <div 
                                    class="hidden md:flex flex-col w-1/2 items-center justify-center bg-purple-100 rounded-l-3xl p-8"
                                >
                                    <img :src="urlFor(position.image)" alt="Position Image" class="max-w-full h-auto">

                                    <p class=" text-4xl font-semibold pt-4">
                                        {{ position.name }}
                                    </p>
                                </div>

                                <!-- Content Section -->
                                <div 
                                    class="w-full md:w-1/2 p-8 space-y-6 relative"
                                >

                                    <!-- Close Button -->
                                    <button @click="triggerPopup(position.id)" 
                                        class="absolute top-4 right-4 p-2 bg-purple-500 rounded-full shadow-md hover:bg-purple-800"
                                    >
                                        <CareerCloseIcon />
                                    </button>

                                    <!-- Qualifications -->
                                    <div>
                                        <p class="text-2xl md:text-4xl font-bold mb-4">Qualifications:</p>
                                        <p class="text-sm md:text-base">{{ position.qualifications }}</p>
                                    </div>

                                    <!-- Notes -->
                                    <div>
                                        <p class="text-lg md:text-2xl font-bold mb-4">Notes:</p>
                                        <ul class="list-disc pl-4 space-y-2 text-sm md:text-base">
                                            <li>Remote / Hybrid Work Set-up.</li>
                                            <li>Salary will be based on your skill set.</li>
                                        </ul>
                                    </div>

                                    <!-- QR Code Section -->
                                    <div class="flex items-center justify-between gap-4">
                                        <!-- QR Code -->
                                        <div class="w-32 h-32">
                                            <img src="/assets/qr-code.png" alt="QR code to apply" class="w-full h-full object-contain">
                                        </div>

                                        <!-- Scan Info -->
                                        <div class="flex-1">
                                            <p class="text-xl md:text-2xl font-extrabold mb-2">SCAN TO APPLY!</p>
                                            <p class="text-sm md:text-base">We can't wait to see your potential and transform our team together.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CareerPopup>
        </Transition>

            </div>

        </div>
    </div>

    
             <!-- Max 800px career cards -->
             <div class="flex flex-col gap-8 mx-16 max-[500px]:mx-5 mt-[-100px]
                        max-[800px]:visible min-[800px]:hidden ">
                <div v-for="position in careerData.positions" 
                    class=" bg-teal-100 rounded-3xl shadow-xl p-16 max-[500px]:p-6 ">
                    <p v-if="position.availability" class=" text-xl ">
                        <span class="bg-green-300 rounded-2xl px-4">Available</span>
                    </p>
                    <p v-else class=" text-xl ">
                        <span class="bg-red-300 rounded-2xl px-4">Not Available</span>
                    </p>
                    

                    <p class=" text-3xl mt-3">
                        {{ position.name }}
                    </p>
                    <br>
                    <p class=" text-lg">
                        {{ position.description }}
                    </p>

                    <br>

                    <p class=" text-2xl font-semibold">
                        <span class="bg-violet-300 rounded-2xl px-4 py-1">
                            <button @click="triggerPopup(position.id)">Apply Now</button>
                        </span>
                    </p>

                    <!-- Transition Wrapper -->
                    <Transition name="fade">  
                        <CareerPopup 
                            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
                            v-if="activePopupId === position.id"
                        >  
                            <!-- Close Button -->
                            <button @click="triggerPopup(position.id)" 
                                class="absolute top-4 right-4 p-2 bg-purple-300 rounded-full shadow-md hover:bg-purple-400"
                            >
                                <CareerCloseIcon />
                            </button>

                            <div 
                                class="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl mx-auto max-h-[90vh] overflow-y-auto"
                            >
                                <!-- Image Section -->
                                <div 
                                    class="hidden md:flex w-1/2 items-center justify-center bg-gray-100 rounded-l-3xl p-8"
                                >
                                    <img :src="urlFor(position.image)" alt="Position Image" class="max-w-full h-auto">
                                </div>

                                <!-- Content Section -->
                                <div 
                                    class="w-full md:w-1/2 p-8 space-y-6"
                                >
                                    <!-- Qualifications -->
                                    <div>
                                        <p class="text-2xl md:text-4xl font-bold mb-4">Qualifications:</p>
                                        <p class="text-sm md:text-base">{{ position.qualifications }}</p>
                                    </div>

                                    <!-- Notes -->
                                    <div>
                                        <p class="text-lg md:text-2xl font-bold mb-4">Notes:</p>
                                        <ul class="list-disc pl-4 space-y-2 text-sm md:text-base">
                                            <li>Remote / Hybrid Work Set-up.</li>
                                            <li>Salary will be based on your skill set.</li>
                                        </ul>
                                    </div>

                                    <!-- QR Code Section -->
                                    <div class="flex items-center justify-between gap-4">
                                        <!-- QR Code -->
                                        <div class="w-32 h-32">
                                            <img src="/assets/qr-code.png" alt="QR code to apply" class="w-full h-full object-contain">
                                        </div>

                                        <!-- Scan Info -->
                                        <div class="flex-1">
                                            <p class="text-xl md:text-2xl font-extrabold mb-2">SCAN TO APPLY!</p>
                                            <p class="text-sm md:text-base">We can't wait to see your potential and transform our team together.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CareerPopup>

                    </Transition>
                </div>
            </div>

            <!-- Link Button -->
            <br>
            <div class=" mb-32 mt-16 text-center w-full">

                <p class=" text-white">
                    <span class=" bg-violet-800 p-4 rounded-xl"> 
                        Find More Jobs in ITS Hub
                    </span>
                </p>

            </div>

        <hr class=" bg-slate-400 pt-1 mx-56 mb-32 max-[1200px]:mx-32 max-[800px]:mx-16">

</template>

<style>
/* Fade-in and fade-out animation */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.8s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
</style>
