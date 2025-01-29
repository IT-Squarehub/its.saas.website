<script setup lang="ts">
    interface FAQSection{
      faqs: {
        faq: FAQ[]
      }
    }

    interface FAQ {
      question: string
      answer: string
    }

    const query = groq`*[_type == "contactUs"][0] {
        faqs[] {
          question,
          answer
        } 
      }`

    // Fetch data from Sanity
    const { data: faqData } = await useSanityQuery<{ faqs: FAQ[] }>(query)

    // Explicitly type faqItems to avoid TypeScript warnings
    const faqItems = computed<FAQ[]>(() => faqData.value?.faqs || [])

  import AOS from 'aos';
  import 'aos/dist/aos.css';

  onMounted(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-out', // Easing type
      once: false // Whether animation should happen only once
    });
  });
</script>

<template>
  <section class="w-full bg-white py-20 px-10 lg:px-20">
    <div class="max-w-4xl">
      <h2 class="text-5xl font-bold mb-12 text-purple-700" data-aos="fade-up">Frequently Asked Questions</h2>

      <div class="space-y-12">
        <div v-for="(faq, index) in faqItems" :key="index" class="space-y-2" data-aos="fade-up">
          <h3 v-if="faq?.question != null"
              class="text-xl font-bold text-gray-900">{{ faq?.question }}</h3>
          <p  v-if="faq?.answer != null"
              class="text-gray-600 leading-relaxed">{{ faq?.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>