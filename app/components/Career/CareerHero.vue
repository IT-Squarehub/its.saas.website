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
        </div>
    </div>
</template>