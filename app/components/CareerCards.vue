<script setup>

</script>

<template>
    <!-- SHOULD BE IN v-for FOR SANITY IMPLEMENTATION -->
    <div class=" flex flex-col gap-32">
        <div class=" flex flex-col gap-32 max-[1200px]:gap-8
                    mx-32 max-[1050px]:mx-8 mt-[-100px] max-[1200px]:mx-32 
                    max-[800px]:hidden">

            <!-- Cards itself -->
            <div class=" flex gap-32 max-[1200px]:gap-8 ">
                <div class=" bg-teal-100 rounded-3xl shadow-xl p-16  w-1/2" >
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

                <!-- Cards itself -->
                <div class=" bg-teal-100 rounded-3xl shadow-xl p-16 w-1/2">
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
            
        </div>
    </div>

</template>