<script lang="ts" setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Review {
    comment: string
    name: string
    position: string
    stars: number
}

interface ReviewsData {
    heading: string
    subtitle: string
    reviews: Review[]

}

const query = groq`*[_type == "homepage"][0]{
  reviewsSection {
    heading,
    subtitle,
    reviews[] {
      name,
      position,
      comment,
      stars,
    }
  }
}`

const { data: reviewsData } = await useSanityQuery<ReviewsData>(query)

// Initialize AOS
onMounted(() => {
    AOS.init({
        duration: 1000, // Animation duration in ms
        easing: 'ease-in-out', // Easing type
        once: false // Whether animation should happen only once
    });
});

// Coomputed property to safely handle the data
const safeReviewsData = computed(() => reviewsData.value || {
    heading: '',
    subtitle: '',
    reviews: Array(5).fill({
        comment: '',
        name: '',
        position: ''
    })
})
</script>

<!-- Version 2 -->
<template>
    <div class="py-16 font-InstrumentSans">
        <div class="mx-auto px-12 lg:px-32">
            <h2 class="text-4xl font-semibold mb-12 text-center" data-aos="fade-up">{{
                safeReviewsData.reviewsSection.heading }}</h2>

            <div data-aos="fade-down">
                <img class="z-50 absolute -rotate-[10deg] -translate-x-16 translate-y-40 hidden xl:block lg:w-24 md:w-28"
                    src="/assets/messagebox.png">
            </div>

            <div class="grid lg:grid-cols-3 lg:grid-rows-3 grid-cols-1 gap-4">

                <div class="-z-10 lg:col-span-1 lg:row-span-2 bg-white p-6 rounded-lg shadow-lg flex flex-col border-2 border-purple-300"
                    data-aos="fade-up">
                    <p class="text-gray-600 mb-4">{{ safeReviewsData.reviewsSection.reviews[0].comment }}</p>
                    <div class="mt-auto ">

                        <div class=" md:-mb-2 flex justify-between text-center items-center">
                            <p class="font-semibold">{{ safeReviewsData.reviewsSection.reviews[0].name }}</p>
                            <div class=" flex">
                                <div v-for="n in safeReviewsData.reviewsSection.reviews[0].stars" >
                                    <Icon name="material-symbols-light:star-rounded" class=" -mx-2 max-md:hidden md:visible md:w-10 md:h-10 bg-yellow-500" />
                                </div>
                            </div>
                        </div>
                
                        <p class="text-gray-500">{{ safeReviewsData.reviewsSection.reviews[0].position }}</p>

                        <div class=" flex">
                                <div v-for="n in safeReviewsData.reviewsSection.reviews[0].stars" >
                                    <Icon name="material-symbols-light:star-rounded" class=" md:hidden w-7 h-7 bg-yellow-500" />
                                </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-1 lg:row-span-1 bg-white p-6 rounded-lg shadow-lg flex flex-col border-2 border-purple-300"
                    data-aos="zoom-in">
                    <p class="text-gray-600 mb-4">{{ safeReviewsData.reviewsSection.reviews[1].comment }}</p>
                    <div class="mt-auto">
                        <p class="font-semibold">{{ safeReviewsData.reviewsSection.reviews[1].name }}</p>
                        <p class="text-gray-500">{{ safeReviewsData.reviewsSection.reviews[1].position }}</p>
                        
                        <div class=" flex">
                            <div v-for="n in safeReviewsData.reviewsSection.reviews[1].stars">
                                <Icon name="material-symbols-light:star-rounded" class=" w-7 h-7 md:w-14 md:h-14 bg-yellow-500" />
                            </div>
                        </div>

                    </div>
                </div>

                <div class="lg:col-span-1 lg:row-span-1 bg-white p-6 rounded-lg shadow-lg flex flex-col border-2 border-purple-300"
                    data-aos="zoom-in">
                    <p class="text-gray-600 mb-4">{{ safeReviewsData.reviewsSection.reviews[2].comment }}</p>
                    <div class="mt-auto">
                        <p class="font-semibold">{{ safeReviewsData.reviewsSection.reviews[2].name }}</p>
                        <p class="text-gray-500">{{ safeReviewsData.reviewsSection.reviews[2].position }}</p>

                        <div class=" flex">
                            <div v-for="n in safeReviewsData.reviewsSection.reviews[2].stars">
                                <Icon name="material-symbols-light:star-rounded" class=" w-7 h-7 md:w-14 md:h-14 bg-yellow-500" />
                            </div>
                        </div>

                    </div>
                </div>

                <div class="lg:col-span-1 lg:row-span-3 bg-white p-6 rounded-lg shadow-lg flex flex-col border-2 border-purple-300"
                    data-aos="zoom-in">
                    <p class="text-gray-600 mb-4">{{ safeReviewsData.reviewsSection.reviews[3].comment }}</p>
                    <div class="mt-auto">
                        <p class="font-semibold">{{ safeReviewsData.reviewsSection.reviews[3].name }}</p>
                        <p class="text-gray-500">{{ safeReviewsData.reviewsSection.reviews[3].position }}</p>

                        <div class=" flex">
                            <div v-for="n in safeReviewsData.reviewsSection.reviews[3].stars">
                                <Icon name="material-symbols-light:star-rounded" class=" w-7 h-7 md:w-14 md:h-14 bg-yellow-500" />
                            </div>
                        </div>

                    </div>
                </div>

                <div class="lg:col-span-1 lg:row-span-3 bg-purple-600 text-white py-16 px-6 rounded-lg shadow-lg flex items-center justify-center lg:justify-start"
                    data-aos="fade-up">
                    <p
                        class="text-[1.7rem] leading-8 lg:leading-10 lg:text-[2rem] text-center lg:text-left font-semibold">
                        {{ safeReviewsData.reviewsSection.subtitle }}
                    </p>
                </div>

                <div class="lg:col-span-1 lg:row-span-2 bg-white p-6 rounded-lg shadow-lg border-2 border-purple-300"
                    data-aos="zoom-in">
                    <p class="text-gray-600 mb-4">{{ safeReviewsData.reviewsSection.reviews[4].comment }}</p>
                    <div class="mt-auto">
                        <p class="font-semibold">{{ safeReviewsData.reviewsSection.reviews[4].name }}</p>
                        <p class="text-gray-500">{{ safeReviewsData.reviewsSection.reviews[4].position }}</p>

                        <div class=" flex">
                            <div v-for="n in safeReviewsData.reviewsSection.reviews[4].stars">
                                <Icon name="material-symbols-light:star-rounded" class=" w-7 h-7 md:w-14 md:h-14 bg-yellow-500" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div class="flex justify-end " data-aos="fade-up" data-aos-duration="500">
                <img class="z-50 absolute -rotate-[-21deg] translate-x-12 -translate-y-28 hidden xl:block lg:w-24 md:w-28"
                    src="/assets/checkbox.png" width="120px" height="120px">
            </div>

        </div>
    </div>
</template>

<style>
/* Import AOS styles */
@import 'aos/dist/aos.css';
</style>