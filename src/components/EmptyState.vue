
<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] w-full">
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-4">
      <circle cx="60" cy="60" r="56" fill="#fff" fill-opacity="0.12" />
      <ellipse cx="60" cy="80" rx="32" ry="10" fill="#e41827" fill-opacity="0.12" />
      <g>
        <rect x="40" y="40" width="40" height="30" rx="8" fill="#fff" stroke="#e41827" stroke-width="2" />
        <circle cx="50" cy="55" r="3" fill="#e41827" />
        <circle cx="70" cy="55" r="3" fill="#e41827" />
        <path d="M54 65 Q60 70 66 65" stroke="#e41827" stroke-width="2" fill="none" stroke-linecap="round" />
      </g>
      <path d="M60 30 l8 10 h-16z" fill="#e41827" fill-opacity="0.8" />
    </svg>
    <h2 class="text-2xl font-bold text-theme drop-shadow mb-1">No Leagues Found</h2>
    <p class="text-center text-white text-base opacity-80 max-w-xs mb-2">{{ message || 'Try adjusting your search or filter to find leagues.' }}</p>
    <span class="text-xs text-theme/80">Please check your spelling or try a different sport.</span>
  </div>
</template>

<script>
export default {
  props: { message: String }
}
</script>