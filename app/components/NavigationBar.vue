<script setup lang="ts">
  interface Navbar {
    logo: {
      asset: {
        _ref: string;
        url: string;
      };
      alt: string;
    }
  }
  const query = groq`*[_type == "navbar"][0]{
  logo {
    asset-> {
    _ref,
    url
    },
    alt
  }
  }`
  // Fetch data from Sanity
  const { data: navbarData } = await useSanityQuery<Navbar>(query)
  const isMenuOpen = ref(false)
  const isFeaturesOpen = ref(false)
  const isMobileFeaturesOpen = ref(false)
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    isMobileFeaturesOpen.value = false
  }
  const toggleFeaturesDropdown = () => {
    isFeaturesOpen.value = !isFeaturesOpen.value
  }
  const closeFeaturesDropdown = () => {
    isFeaturesOpen.value = false
  }
  const toggleMobileFeaturesDropdown = () => {
    isMobileFeaturesOpen.value = !isMobileFeaturesOpen.value
  }
  const closeMobileMenu = () => {
    isMenuOpen.value = false
    isMobileFeaturesOpen.value = false
  }
  const saasProducts = [
    { name: 'Human Resource Information System', link: '/products' },
    { name: 'Payroll System', link: '/products/payroll' },
    // { name: 'Performance Tracking', link: '/products/performance' },
    // { name: 'Recruitment Tools', link: '/products/recruitment' },
    // { name: 'Training & Development', link: '/products/training' }
  ]
  // Close dropdowns when clicking outside
  onMounted(() => {
    const closeDropdowns = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.features-dropdown')) {
        isFeaturesOpen.value = false
      }
    }
    document.addEventListener('click', closeDropdowns)
    return () => {
      document.removeEventListener('click', closeDropdowns)
    }
  })
</script>
<style>
.drop-fade-enter-active {
  transition: all 0.7s ease-out;
}
.drop-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.drop-fade-enter-from,
.drop-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
<template>
  <nav class="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
    <div class="mx-auto px-5 md:px-7 sm:px-5">
      <div class="flex h-16 justify-between">
        <div class="flex flex-row justify-center items-center gap-3">
          <div>
            <img v-if="navbarData?.logo" :src="navbarData.logo.asset.url" :alt="navbarData.logo.alt"
              class="h-10 w-auto" />
          </div>
          <NuxtLink to="/" class="flex-shrink-0 items-center flex">
            <p class="leading-4">Human Resources<br><span class="font-bold">Information System</span></p>
          </NuxtLink>
        </div>
        <button @click="toggleMenu" class="lg:hidden">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="hidden lg:flex items-center space-x-10">
          <!-- Home -->
          <div class="relative">
            <NuxtLink to="/" class="px-4 py-2 text-gray-800 hover:text-purple-600 transition-colors">
              Home
              <div v-if="$route.path === '/'"
                class="absolute bottom-0 -mb-3 left-0 w-full h-1 bg-purple-600 rounded-t-sm">
              </div>
            </NuxtLink>
          </div>

          <!-- Products -->
          <div class="relative" @click.stop="toggleFeaturesDropdown">
            <div class="px-4 py-2 text-gray-800 hover:text-purple-600 transition-colors cursor-pointer flex items-center">
              Products
              <svg class="ml-2 h-4 w-4 transform transition-transform duration-200" 
                 :class="isFeaturesOpen ? 'rotate-180' : ''" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <div v-if="$route.path === '/products'"
                class="absolute bottom-0 -mb-3 left-0 w-full h-1 bg-purple-600 rounded-t-sm">
              </div>
            </div>
            <div 
              v-if="isFeaturesOpen" 
              class="absolute bg-white shadow-lg rounded-lg mt-5 w-[20.3rem] right-0 border border-gray-100 
                  transform origin-top-right transition-all duration-300 ease-out 
                  opacity-100 scale-100"
              @click.stop
            >
              <div class="py-2 px-2">
                <NuxtLink 
                  v-for="(saas, index) in saasProducts" 
                  :key="index" 
                  :to="saas.link" 
                  class="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  @click="closeFeaturesDropdown"
                >
                  {{ saas.name }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Pricing -->
          <div class="relative">
            <NuxtLink to="/pricing" class="px-4 py-2 text-gray-800 hover:text-purple-600 transition-colors">
              Pricing
              <div v-if="$route.path === '/pricing'"
                class="absolute bottom-0 -mb-3 left-0 w-full h-1 bg-purple-600 rounded-t-sm">
              </div>
            </NuxtLink>
          </div>

          <!-- Careers -->
          <div class="relative">
            <NuxtLink to="/career" class="px-4 py-2 text-gray-800 hover:text-purple-600 transition-colors">
              Careers
              <div v-if="$route.path === '/career'"
                class="absolute bottom-0 -mb-3 left-0 w-full h-1 bg-purple-600 rounded-t-sm">
              </div>
            </NuxtLink>
          </div>

          <!-- Contact Us -->
          <div class="relative">
            <NuxtLink to="/contact" class="px-4 py-2 text-gray-800 hover:text-purple-600 transition-colors">
              Contact Us
              <div v-if="$route.path === '/contact'"
                class="absolute bottom-0 -mb-3 left-0 w-full h-1 bg-purple-600 rounded-t-sm">
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <Transition name="drop-fade">
        <div v-if="isMenuOpen" class="lg:hidden">
          <div class="flex flex-col space-y-4 px-4 py-5">

            <NuxtLink class="text-gray-800 hover:text-purple-600 py-2" to="/" @click="isMenuOpen = false">
              Home
            </NuxtLink>

            <div class="relative">
              <div 
                class="text-gray-800 hover:text-purple-600 py-2 flex justify-between items-center"
                @click="toggleMobileFeaturesDropdown"
              >
                Products
                <svg class="h-4 w-4 transform transition-transform duration-200" 
                   :class="isMobileFeaturesOpen ? 'rotate-180' : ''" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div v-if="isMobileFeaturesOpen" class="pl-4 mt-2 space-y-5">
                <NuxtLink 
                  v-for="(saas, index) in saasProducts" 
                  :key="index" 
                  :to="saas.link" 
                  class="block text-gray-700 hover:text-purple-600"
                  @click="closeMobileMenu"
                >
                  {{ saas.name }}
                </NuxtLink>
              </div>
            </div>

            <NuxtLink class="text-gray-800 hover:text-purple-600 py-2" to="/pricing"
              @click="isMenuOpen = false">
              Pricing
            </NuxtLink>

            <NuxtLink class="text-gray-800 hover:text-purple-600 py-2" to="/career"
              @click="isMenuOpen = false">
              Careers
            </NuxtLink>

            <NuxtLink class="text-gray-800 hover:text-purple-600 py-2" to="/contact"
              @click="isMenuOpen = false">
              Contact Us
            </NuxtLink>
            
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>