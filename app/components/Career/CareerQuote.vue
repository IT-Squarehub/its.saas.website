<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    easing: "ease-in-out", // Animation easing
    once: false, // Whether animation should happen only once
  });
});

const query = groq`*[_type == "careers"][0]`

const { data: careerData, pending, error } = await useSanityQuery(query)

</script>

<template>

    <div class=" mb-32 ">
      <p  data-aos="fade-left" 
      class=" text-6xl text-center font-bold px-64 max-[550px]:text-2xl max-[550px]:px-16 max-[1200px]:px-16 max-[1200px]:text-4xl">
        {{ careerData.review.comment }}
      </p>

      <p  data-aos="fade-right" data-aos-delay="200"
      class=" text-3xl text-center font-semibold px-64 mt-16 max-[550px]:text-lg max-[550px]:px-16 max-lg:px-16">
        {{ careerData.review.reviewerName }}
      </p>

      <p  data-aos="fade-right" data-aos-delay="200"
      class=" text-xl text-center font-regular px-64 max-[550px]:text-base max-[550px]:px-16 max-lg:px-16">
        {{ careerData.review.reviewerPosition }}
      </p>
    </div>

</template>