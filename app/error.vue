<template>
    <div class="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950">
        <div class="w-full max-w-3xl mx-auto">
            <!-- Main Error Message -->
            <div class="space-y-4 text-center mb-8 md:mb-12">
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight max-w-2xl mx-auto">
                    {{ getErrorTitle }}
                </h1>
                <p class="text-purple-200 text-lg sm:text-2xl max-w-xl mx-auto">
                    {{ error?.message || getErrorMessage }}
                </p>
            </div>

            <!-- Enhanced Visual Element -->
            <div class="relative bg-purple-800/30 backdrop-blur-sm rounded-xl shadow-2xl p-4 sm:p-8 md:p-12 mb-8 md:mb-12 border border-purple-700/50 overflow-hidden">
                <!-- Main glitch effect container -->
                <div class="relative flex justify-center items-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                    <!-- Dynamic error number -->
                    <div class="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 animate-pulse select-none">
                        {{ errorCode }}
                    </div>
                    
                    <!-- Rest of the visual elements remain the same -->
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="absolute w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent top-1/2 transform -translate-y-1/2 animate-[slide-left_3s_linear_infinite]"></div>
                        <div class="absolute w-0.5 sm:w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent left-1/2 transform -translate-x-1/2 animate-[slide-up_3s_linear_infinite]"></div>
                    </div>
                    
                    <div class="absolute inset-0 hidden sm:block">
                        <div v-for="i in 5" :key="i"
                            class="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-purple-400"
                            :style="{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float-particle ${2 + Math.random() * 3}s linear infinite`
                            }">
                        </div>
                    </div>
                </div>

                <div class="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent mix-blend-overlay"></div>
                <div class="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent mix-blend-overlay"></div>

                <div class="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-purple-500/50 rounded-tl-xl"></div>
                <div class="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-purple-500/50 rounded-br-xl"></div>
            </div>

            <!-- Footer Message and Button -->
            <div class="max-w-3xl mx-auto px-4">
                <div class="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-24">
                    <p class="text-purple-200 text-center md:text-left text-sm sm:text-base md:text-lg md:flex-1">
                        {{ getErrorFooter }}
                    </p>
                    <NuxtLink to="/"
                        class="group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-purple-500 hover:to-purple-400 transition-all duration-300 w-full md:w-auto whitespace-nowrap shadow-lg shadow-purple-900/50 text-sm sm:text-base">
                        <span>Return Home</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="transform transition-transform group-hover:translate-x-1">
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

const error = useError();

// Get the error code, default to 404 if not found
const errorCode = computed(() => {
    return error.value?.statusCode || 404;
});

// Define error messages and titles for different error codes
const errorMessages = {
    400: 'Bad Request - The server cannot process your request.',
    401: 'Unauthorized - Please log in to access this resource.',
    403: 'Forbidden - You don\'t have permission to access this resource.',
    404: 'Page Not Found - The requested page doesn\'t exist.',
    500: 'Internal Server Error - Something went wrong on our end.',
    502: 'Bad Gateway - The server received an invalid response.',
    503: 'Service Unavailable - The server is temporarily down.',
    504: 'Gateway Timeout - The server took too long to respond.'
};

const errorTitles = {
    400: 'Something\'s not quite right',
    401: 'Authentication Required',
    403: 'Access Denied',
    404: 'Oops! Page Not Found',
    500: 'Server Error Occurred',
    502: 'Gateway Error',
    503: 'Service Unavailable',
    504: 'Request Timeout'
};

const errorFooters = {
    404: 'Don\'t worry! You can head back to our homepage or let us know if this keeps happening.',
    401: 'Please sign in to access this page or return to the homepage.',
    403: 'Please contact your administrator if you believe this is a mistake.',
    default: 'Try refreshing the page or come back later. If the problem persists, please contact support.'
};

// Computed properties for dynamic content
const getErrorMessage = computed(() => {
    return errorMessages[errorCode.value] || 'An unexpected error occurred.';
});

const getErrorTitle = computed(() => {
    return errorTitles[errorCode.value] || 'Something Went Wrong';
});

const getErrorFooter = computed(() => {
    return errorFooters[errorCode.value] || errorFooters.default;
});

const handleError = () => {
    clearError({
        redirect: '/',
    });
};
</script>

<style scoped>
/* Keep existing animations */
@keyframes slide-left {
    from { transform: translateX(100%) translateY(-50%); }
    to { transform: translateX(-100%) translateY(-50%); }
}

@keyframes slide-up {
    from { transform: translateY(100%) translateX(-50%); }
    to { transform: translateY(-100%) translateX(-50%); }
}

@keyframes float-particle {
    0% {
        transform: translate(0, 0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translate(20px, -20px);
        opacity: 0;
    }
}
</style>