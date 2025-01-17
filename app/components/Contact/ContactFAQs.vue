<script setup lang="ts">
// interface FAQ {
//   question: string
//   answer: string
// }

// const faqs: FAQ[] = [
//   {
//     question: 'How long does it take to implement the system?',
//     answer: 'Implementation timelines vary based on your organization\'s size and requirements. Typically, basic setup can be completed within a few days, while full implementation with custom configurations may take a few weeks. Our team works closely with you to ensure a smooth rollout.'
//   },
//   {
//     question: 'What kind of support do you provide?',
//     answer: 'We offer comprehensive support including technical assistance, system training, and dedicated account management. Our support team is available to help you maximize the value of your HRIS investment.'
//   },
//   {
//     question: 'Can we try the system before committing to a purchase?',
//     answer: 'Yes, we offer a free trial period that gives you full access to all features. This allows your team to experience the platform\'s capabilities and ensure it meets your organization\'s needs.'
//   }
// ]
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
</script>

<template>
  <section class="w-full bg-white py-20 px-10 lg:px-20">
    <div class="max-w-4xl">
      <h2 class="text-5xl font-bold mb-12 text-purple-700">Frequently Asked Questions</h2>
      
      <div class="space-y-12">
        <div v-for="(faq, index) in faqItems" :key="index" class="space-y-2">
          <h3 class="text-xl font-bold text-gray-900">{{ faq?.question }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ faq?.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>