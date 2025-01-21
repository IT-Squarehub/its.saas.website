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
        <div class=" grid grid-cols-1 min-[900px]:grid-cols-2 gap-16  
                    mx-32 max-[1050px]:mx-8 mt-[-100px] max-[1200px]:mx-32">

            <div v-for="position in careerData.positions" class="">
                <div class=" bg-slate-50 border-2 border-purple-500 rounded-3xl shadow-xl px-8 content-center min-h-80 max-h-96 hover:bg-purple-100 hover:scale-105 transition-all ease-in-out duration-300" >
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

                    <p class=" text-lg ">
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
                                class="bg-purple-200 rounded-3xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl mx-auto max-h-[90vh] overflow-y-auto "
                            >
                                <!-- Image Section -->
                                <div 
                                    class="hidden md:flex flex-col w-full bg-purple-100 rounded-l-3xl px-8 relative"
                                >
                                    <!-- Close Button -->
                                    <button @click="triggerPopup(position.id)" 
                                        class="absolute top-4 right-4 p-2 bg-purple-500 rounded-full shadow-md hover:bg-purple-700"
                                    >
                                        <CareerCloseIcon />
                                    </button>

                                    <img :src="urlFor(position.image)" alt="Position Image" class="max-w-full h-auto"
                                        v-if=position.availability
                                    >
                                    
                                    <p v-else class=" text-4xl py-8 px-4">
                                        Not available.
                                    </p>
                                </div>
                            </div>
                            
                    </CareerPopup>
                </Transition>

            </div>

        </div>
    </div>

    
            

            <!-- Link Button -->
            <br>
            <NuxtLink
                to="https://www.itsquarehub.com/careers"
            >
            <div class=" mb-24 mt-24 text-center w-full">

                <p class=" text-white">
                    <span class=" bg-violet-800 p-4 rounded-xl"> 
                        Find More Jobs in ITS Hub
                    </span>
                </p>

            </div>
            </NuxtLink>

        <hr class=" bg-slate-400 pt-1 mx-56 mb-32 max-[1200px]:mx-32 max-[800px]:mx-16">

</template>

<style>
/* Fade-in and fade-out animation */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
</style>
