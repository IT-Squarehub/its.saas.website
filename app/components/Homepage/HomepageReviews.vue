<script lang="ts" setup>

interface Review {
    comment: string
    name: string
    position: string
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
    }
  }
}`

const { data: reviewsData } = await useSanityQuery<ReviewsData>(query)

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

<template>
    <div class="py-16 font-InstrumentSans">
        <div class="container mx-auto px-32">
            <h2 class="text-4xl font-semibold mb-12 text-center">{{ safeReviewsData.reviewsSection.heading }}</h2>

            <div>
                <img class="absolute -rotate-[28deg] -translate-x-14 translate-y-28"
                    src="/assets/messagebox.png" width="120px" height="120px">
            </div>

            <div class="grid grid-cols-3 gap-4 grid-rows-3">
                <!-- First review - larger size -->
                <div
                    class="col-span-1 row-span-2 bg-white p-6 rounded-lg shadow-lg flex flex-col border-2 border-purple-300">
                    <p class="text-gray-600 mb-4">{{ safeReviewsData.reviewsSection.reviews[0].comment }}</p>
                    <div class="mt-auto">
                        <p class="font-semibold">{{ safeReviewsData.reviewsSection.reviews[0].name }}</p>
                        <p class="text-gray-500">{{ safeReviewsData.reviewsSection.reviews[0].position }}</p>
                    </div>
                </div>

                <div
                    class="col-span-1 row-span-1 bg-white p-6 rounded-lg shadow-lg flex flex-col border-2 border-purple-300">
                    <p class="text-gray-600 mb-4">{{ safeReviewsData.reviewsSection.reviews[1].comment }}</p>
                    <div class="mt-auto">
                        <p class="font-semibold">{{ safeReviewsData.reviewsSection.reviews[1].name }}</p>
                        <p class="text-gray-500">{{ safeReviewsData.reviewsSection.reviews[1].position }}</p>
                    </div>
                </div>

                <div
                    class="col-span-1 row-span-1 bg-white p-6 rounded-lg shadow-lg flex flex-col border-2 border-purple-300">
                    <p class="text-gray-600 mb-4">{{ safeReviewsData.reviewsSection.reviews[2].comment }}</p>
                    <div class="mt-auto">
                        <p class="font-semibold">{{ safeReviewsData.reviewsSection.reviews[2].name }}</p>
                        <p class="text-gray-500">{{ safeReviewsData.reviewsSection.reviews[2].position }}</p>
                    </div>
                </div>

                <div
                    class="col-span-1 row-span-2 bg-white p-6 rounded-lg shadow-lg flex flex-col border-2 border-purple-300">
                    <p class="text-gray-600 mb-4">{{ safeReviewsData.reviewsSection.reviews[3].comment }}</p>
                    <div class="mt-auto">
                        <p class="font-semibold">{{ safeReviewsData.reviewsSection.reviews[3].name }}</p>
                        <p class="text-gray-500">{{ safeReviewsData.reviewsSection.reviews[3].position }}</p>
                    </div>
                </div>

                <!-- Subtitle card - purple background -->
                <div
                    class="col-span-1 row-span-2 bg-purple-600 text-white py-6 px-10 rounded-lg shadow-lg flex items-center justify-start">
                    <p class="text-[2rem] font-semibold">{{ safeReviewsData.reviewsSection.subtitle }}</p>
                </div>

                <div class="col-span-1 row-span-2 bg-white p-6 rounded-lg shadow-lg border-2 border-purple-300">
                    <p class="text-gray-600 mb-4">{{ safeReviewsData.reviewsSection.reviews[4].comment }}</p>
                    <div class="mt-auto">
                        <p class="font-semibold">{{ safeReviewsData.reviewsSection.reviews[4].name }}</p>
                        <p class="text-gray-500">{{ safeReviewsData.reviewsSection.reviews[4].position }}</p>
                    </div>
                </div>

            </div>

            <div class="flex justify-end ">
                <img class="absolute -rotate-[-21deg] translate-x-12 -translate-y-28" src="/assets/checkbox.png"
                    width="120px" height="120px">
            </div>

        </div>
    </div>
</template>