<script setup>

</script>

<template>

    <div class=" flex max-[1050px]:flex-col max-[1050px]:items-center gap-8 pt-44 bg-violet-300">
    <!-- Close -->
    <NuxtLink :to="{ path: '/Career', }">
        <CareerCloseIcon class="absolute top-32 right-8 "/>
    </NuxtLink>
        
        <!-- IMG PLACEHOLDER UNTIL SCHEMA AND CODE IS FIXED  -->
         <!-- Add a slug in the schema and a _slug.vue in pages -->
        <div class=" w-1/2 p-16 max-[1050px]:p-0 flex justify-center">
            <img src="/assets/Left-photo.png" alt="">
        </div>

        <!-- Qualifications -->
        <div class=" w-1/2 pr-32 max-[1050px]:pr-0 max-[1050px]:w-2/3">
            <p class=" text-4xl font-bold mb-5">
                Qualifications:
            </p>

            <ul class=" mb-5 pl-8 list-disc">
                <li> 
                    Bachelor's degree in computer science, information technology, or a relative field.
                </li>
                <li> 
                    Proven experience as an ETL Developer or in a similar role.     
                </li>
                <li> 
                    Strong knowledge of data integration concepts, ETL tools, and data warehousing technologies.    
                </li>
                <li> 
                    Proficiency in ETL scripting and data manipulation languages.    
                </li>
                <li> 
                    Solid understanding of data modeling and database design.     
                </li>
                <li> 
                    Excellent problem-solving and analytical skills.    
                </li>
                <li> 
                    Effective communication and teamwork abilities.     
                </li>
                <li> 
                    Knowledge of data security and privacy best practices.    
                </li>
                <li> 
                    Familiarity with database systems (e.g., SQL Server, Oracle) and data warehousing platforms (e.g., Redshift, Snowflake).     
                </li>
            </ul>

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

    </div>
</template>