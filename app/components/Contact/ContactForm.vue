<script setup lang="ts">
import { ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface ContactForm {
  fullName: string
  workEmail: string
  company: string
  phoneNumber: string
  message: string
}

const formData = ref<ContactForm>({
  fullName: '',
  workEmail: '',
  company: '',
  phoneNumber: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission logic here
  console.log('Form submitted:', formData.value)
}

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 800, // Animation duration in ms
    easing: 'ease-in-out', // Easing type
    once: false // Whether animation should happen only once
  })
})
</script>

<template>
  <section class="w-full bg-white py-16 px-8">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Contact Form Section -->
      <div class="space-y-6" data-aos="fade-right">
        <div class="space-y-2">
          <h2 class="text-5xl font-bold text-gray-900">Get in touch</h2>
          <p class="text-gray-600">Our friendly team would love to hear from you</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
              <input v-model="formData.fullName" type="text" id="fullName"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div class="space-y-2">
              <label for="workEmail" class="block text-sm font-medium text-gray-700">Work Email</label>
              <input v-model="formData.workEmail" type="email" id="workEmail"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
              <input v-model="formData.company" type="text" id="company"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div class="space-y-2">
              <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
              <input v-model="formData.phoneNumber" type="tel" id="phoneNumber"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
            </div>
          </div>

          <div class="space-y-2">
            <label for="message" class="block text-sm font-medium text-gray-700">How Can We Help?</label>
            <textarea v-model="formData.message" id="message" rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"></textarea>
          </div>

          <button type="submit"
            class="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors duration-200">
            Submit
          </button>
        </form>
      </div>

      <!-- Testimonial Section -->
      <div class="h-[480px] md:h-[520px]" data-aos="fade-left">
        <div class="relative h-full w-full rounded-2xl overflow-hidden bg-purple-600">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20 z-10"></div>
          <img src="/assets/form-img.jpg" alt="Contact center team"
            class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute bottom-8 left-8 right-8 z-20 text-white">
            <p class="text-2xl font-semibold mb-2">One of the best services in the industry!</p>
            <div class="flex items-center gap-2">
              <span class="text-sm">- Klarence Catelan</span>
              <span class="text-sm text-gray-300">Founder, Moonryde</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>