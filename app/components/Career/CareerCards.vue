<script setup>


const query = groq`*[_type == "careers"][0]`

const { data: careerData, pending, error } = await useSanityQuery(query)

</script>

<template>
    <!-- SHOULD BE IN v-for FOR SANITY IMPLEMENTATION -->
    <div class=" flex flex-col gap-32">
        <div class=" flex flex-col gap-32 max-[1200px]:gap-8
                    mx-32 max-[1050px]:mx-8 mt-[-100px] max-[1200px]:mx-32 
                    max-[800px]:hidden">


            <div v-for="position in careerData.positions" class=" flex gap-32 max-[1200px]:gap-8 ">
                <div class=" bg-teal-100 rounded-3xl shadow-xl p-16  w-1/2" >
                    <p class=" text-xl ">
                        <span class="bg-green-300 rounded-2xl px-4">Available</span>
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
                            <NuxtLink :to="{ path: '/JobDescription', hash: '#jobdesc' }">Apply Now</NuxtLink>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    
             <!-- Max 800px career cards -->
             <div class="flex flex-col gap-32 mx-16 max-[500px]:mx-5 mt-[-100px]
                        max-[800px]:visible min-[800px]:hidden ">
                <div class=" bg-teal-100 rounded-3xl shadow-xl p-16 max-[500px]:p-6 ">
                    <p class=" text-xl ">
                        <span class="bg-green-300 rounded-2xl px-4">Available</span>
                    </p>
                    
                    <p class=" text-3xl mt-3">
                        SQL Developer/Admin
                    </p>
                    <br>
                    <p class=" text-lg">
                        Builds and optimizes databases, writes complex SQL queries, and ensures database performance.
                    </p>

                    <br>

                    <p class=" text-2xl font-semibold">
                        <span class="bg-violet-300 rounded-2xl px-4 py-1">
                            Apply Now
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