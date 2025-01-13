<script setup lang="ts">

const query = groq`*[_type == "homepage"][0]{
  hero {
    heading,
    image {
      asset-> {
        _ref,
        url
      },
      alt
    }
  }
}`

// Fetch data from Sanity
const { data: heroData, pending, error } = await useSanityQuery<HomepageHero>(query)

</script>

<template>
 <div class="min-h-screen pt-28 text-center flex flex-col items-center justify-center">
    <div v-if="pending" class="loading-spinner">
      Loading...
    </div>
    
    <div v-else-if="error" class="error-message">
      Error loading content
    </div>
    
    <div v-else class="flex flex-col items-center justify-center font-InstrumentSans">
      <h1 class="text-[4rem] font-Poppins font-bold min-h-[6rem] leading-tight w-[58rem] mb-3 bg-gradient-to-t from-slate-800 to-purple-500 bg-clip-text text-transparent">
        {{ heroData?.hero?.heading || 'Hero Title' }}
      </h1>
      
      <button class="bg-purple-700 p-3 rounded-md font-normal text-white flex justify-center items-center gap-2">
        <Icon name="mdi:eye" />
        <p>Enquire Now</p>
      </button>
      
      <img 
        class="h-[40rem]" 
        :src="heroData?.hero?.image ? urlFor(heroData.hero.image).width(1200).url() : '/assets/hero2.png'"
        :alt="heroData?.hero?.image?.alt || 'Hero image'"
      >
    </div>
  </div>
</template>