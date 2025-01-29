<template>
    <div class="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        <div class="w-full max-w-3xl mx-auto">
        <!-- Main Error Message -->
        <div class="space-y-2 text-center md:text-left mb-12">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
            Looks like there's not enough space for that
            <span class="inline-block border border-gray-300 rounded px-2">page</span>
          </h1>
          <p class="text-gray-600 text-lg">Error 404 Page not found</p>
        </div>
  
        <!-- Stylized "Squeezed" Visual Element -->
        <div class="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-12">
          <div class="flex justify-between items-center">
            <div
              v-for="i in 3"
              :key="i"
              class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-100 rounded-full transform hover:scale-105 transition-transform"
              :style="{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }"
            />
          </div>
        </div>
  
        <!-- Footer Message and Button -->
        <div class="max-w-3xl mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <p class="text-gray-600 text-center md:text-left text-lg md:flex-1">
              If you believe this is a mistake, please let us know and we'll get it sorted out.
            </p>
            <NuxtLink
              to="/"
              class="group flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 w-full md:w-auto whitespace-nowrap"
            >
              <span>Go back to home page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="transform transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: false
  });
  </script>