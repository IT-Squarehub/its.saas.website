<script setup lang="ts">
// You can add any interactive functionality here if needed
</script>

<template>
  <section class="w-full bg-[url('/assets/net-background.png')] bg-cover bg-center py-32">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Overview Label -->
      <div class="flex items-center justify-center mb-6">
        <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-100">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 1.6C4.464 1.6 1.6 4.464 1.6 8C1.6 11.536 4.464 14.4 8 14.4C11.536 14.4 14.4 11.536 14.4 8C14.4 4.464 11.536 1.6 8 1.6ZM8 13.2C5.128 13.2 2.8 10.872 2.8 8C2.8 5.128 5.128 2.8 8 2.8C10.872 2.8 13.2 5.128 13.2 8C13.2 10.872 10.872 13.2 8 13.2Z"
              fill="#9333EA" />
          </svg>
          <span class="text-purple-700 font-medium">Overview</span>
        </div>
      </div>

      <!-- Title with dotted border -->
      <div class="flex justify-center mb-6">
        <div class="inline-block rounded-lg px-6 py-3">
          <h2 class="text-6xl font-bold text-purple-700">Your HR Command Center</h2>
        </div>
      </div>

      <!-- Description -->
      <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
        Start your day with clarity. Our intelligent dashboard presents critical information at a glance—from daily
        activities to upcoming time-offs.
      </p>

      <!-- Dashboard Image Container -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Main Dashboard Image -->
        <div class="bg-white rounded-lg shadow-xl p-4">
          <img src="/assets/dashboard.png" alt="HR Command Center Dashboard" class="w-full rounded-lg" />
        </div>

        <!-- Decorative Elements -->
        <div class="absolute -left-8 bottom-16">
          <!-- <div class="bg-purple-100 rounded-lg p-4 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#9333EA" stroke-width="2"/>
              <path d="M12 6V12L16 14" stroke="#9333EA" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div> -->
          <img class="-rotate-[28deg] -translate-x-14 translate-y-28" src="/assets/clockbox.png" width="120px"
            height="120px">
        </div>

        <!-- Calendar Icon -->
        <div class="absolute -right-8 top-16">
          <!-- <div class="bg-purple-100 rounded-lg p-4 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="#9333EA" stroke-width="2"/>
              <path d="M16 2V6" stroke="#9333EA" stroke-width="2" stroke-linecap="round"/>
              <path d="M8 2V6" stroke="#9333EA" stroke-width="2" stroke-linecap="round"/>
              <path d="M3 10H21" stroke="#9333EA" stroke-width="2"/>
            </svg>
          </div> -->
          <img class="-rotate-[-21deg] translate-x-10 -translate-y-5" src="/assets/datebox.png" width="120px"
            height="120px">
        </div>
      </div>
    </div>
  </section>
</template>