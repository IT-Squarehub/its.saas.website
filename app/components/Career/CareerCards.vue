<script setup>
import CareerPopup from './CareerPopup.vue';
const popup = ref(false);
const id = ref(0);

// function triggerPopup(){
//     popup.value = !popup.value;
// }

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
        <CareerPopup class="fixed inset-0 z-50 flex items-center justify-center
                            left-0 right-0 top-0 bottom-0 mx-16 rounded-3xl
                            " v-if="activePopupId === position.id">  
            <!-- Close -->
            <button @click="triggerPopup(position.id)">
                <CareerCloseIcon class="absolute top-32 right-8 "/>
            </button>

            <!-- IMG PLACEHOLDER UNTIL SCHEMA AND CODE IS FIXED  -->
            <!-- Add a slug/ id in the schema and a _slug.vue/ [id].vue in pages -->
            <div class=" w-1/2 p-16 max-[1050px]:p-0 flex justify-center">
                <img src="/assets/Left-photo.png" alt="">
            </div>

            <!-- Qualifications -->
            <div class=" w-1/2 pr-32 max-[1050px]:pr-0 max-[1050px]:w-2/3">
                <p class=" text-4xl font-bold mb-5">
                    Qualifications:
                </p>

                {{ position.description }}

                <hr class=" bg-slate-400 pt-1 mr-8">

                <p class="  text-2xl font-bold my-5">
                    Notes:
                </p>


                <ul class=" mb-5 pl-8 list-disc">
                    <li>
                        Remote / Hybrid Work Set-up.
                    </li>
                    <li>
                        Salary will be based on your skill set.
                    </li>
                </ul>

                <hr class=" bg-slate-400 pt-1 mr-8">

                <!-- QR Code -->
                <div class=" flex my-8 gap-8">
                    
                    <!-- QR image -->
                    <div class=" h-96 w-96 pl-16 max-[1050px]:pl-0">
                        <img src="/assets/qr-code.png" alt="QR code to apply">
                    </div>

                    <div>
                        <p class=" text-4xl pb-6 font-extrabold pr-32 max-[1050px]:pr-0"> 
                            SCAN TO APPLY! </p>
                        <p class=" pr-32 max-[1050px]:pr-0">We can't wait to see your potential and transform our team together.</p>
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
                        {{ position.id }}
                    </p>
                    <br>
                    <p class=" text-lg">
                        {{ position.description }}
                    </p>

                    <br>

                    <p class=" text-2xl font-semibold">
                        <span class="bg-violet-300 rounded-2xl px-4 py-1">
                            <NuxtLink :to="{ path: '/JobDescription', hash: '#jobdesc' }">Apply Now</NuxtLink>
                        </span>
                    </p>
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
