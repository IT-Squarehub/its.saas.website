<script setup>

</script>

<template>

    <div class=" flex max-[1050px]:flex-col max-[1050px]:items-center gap-8 pt-44 bg-violet-300">
    <!-- Close -->
    <NuxtLink :to="{ path: '/Career', }">
        <CareerCloseIcon class="absolute top-32 right-8 "/>
    </NuxtLink>
        
    <slot></slot>

    </div>
</template>