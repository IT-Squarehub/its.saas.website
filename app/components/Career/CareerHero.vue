<script setup>
// export interface CareerHero {
//     careers: {
//         heading: string;
//         subtitle: string;
//     }
// }

const query = groq`*[_type == "careers"][0]`

// {
//   careers {
//     heading,
//     subtitle
//   }
// }
// Fetch data from Sanity
const { data: careerData, pending, error } = await useSanityQuery(query)

</script>

<template>
    <div>
        <!-- Career Hero section -->
        <div class=" bg-violet-400 px-32 pt-32 pb-44 max-[550px]:px-4 max-[1200px]:px-16">
            <p class=" text-[80px] max-[550px]:text-4xl max-[1050px]:text-6xl">
                {{ careerData?.heading }}
            </p>

            <p class=" text-2xl pl-2 max-[550px]:text-lg max-[1050px]:pt-4 ">
                {{ careerData?.subtitle }}
            </p>
            <img src="/assets/shapes.png" alt="Hero Image" class=" h-96 w-96 absolute top-0 right-0 object-cover rotate-180 max-[1450px]:hidden" />
        </div>

    </div>
</template>

<!-- <div class="relative w-full bg-purple-300 text-white text-center py-32">
        
    <div class="flex flex-col items-center justify-center gap-4 px-[30%] z-50">
        <h1 class="text-6xl font-bold text-black">Your partner in software innovation</h1>
        <p class="text-lg font-Inter font-thin text-black">Stay ahead of the competition with cutting-edge development, seamless integration, and collaborative tools from ITS SquareHub.</p>
        <button class="bg-white text-black font-semibold px-4 py-2 rounded mt-4">Get Started</button>
    </div>
    
    </div> -->