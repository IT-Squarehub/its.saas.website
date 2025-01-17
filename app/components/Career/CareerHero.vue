<script setup>
const query = groq`*[_type == "careers"][0]`

// Fetch data from Sanity
const { data: careerData, pending, error } = await useSanityQuery(query)

</script>

<template>
    <div>
        <!-- Career Hero section -->
        <div class=" bg-purple-300 px-32 pt-32 pb-44 max-[550px]:px-4 max-[1200px]:px-16 relative -z-10">
            <p class=" text-[80px] max-[550px]:text-4xl max-[1050px]:text-6xl font-bold
                        max-[550px]:pr-16 pr-44 min-[801px]:pr-16">
                {{ careerData?.heading }}
            </p>

            <p class=" text-2xl pl-2 max-[550px]:text-lg max-[1050px]:pt-4 font-semibold 
                        max-[550px]:pr-36 pr-36 min-[801px]:pr-56">
                {{ careerData?.subtitle }}
            </p>

            <img src="/assets/shapes.png" alt="Hero Image" 
            class=" h-96 w-96 max-[600px]:w-64 max-[600px]:h-64 
                    max-[800px]:opacity-70  
                    absolute bottom-16 right-0 object-cover rotate-180 -z-10" />

        </div>

    </div>
</template>