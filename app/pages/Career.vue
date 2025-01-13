<script setup lang="ts">

import CareerCards from '~/components/CareerCards.vue';

</script>

<template>
    <div>
        <!-- Career Hero section -->
        <div class=" bg-violet-400 px-32 pt-32 pb-44 max-[550px]:px-4 max-[1200px]:px-16">
            <p class=" text-[80px] max-[550px]:text-4xl max-[1050px]:text-6xl">
                Become part of our team!
            </p>

            <p class=" text-2xl pl-2 max-[550px]:text-lg max-[1050px]:pt-4 ">
                Join ITSquarehub and become part of a dynamic team driving innovation in technology solutions.
            </p>
        </div>

        <!-- Career cards section -->
        <!-- Subject to change as it is does not yet have a schema for v-for -->
         <CareerCards />
    </div>
</template>