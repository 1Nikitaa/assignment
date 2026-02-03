<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="$emit('close')">
    <div class="relative flex items-center justify-center">
      <button v-if="badge" class="absolute" style="top:-60px; right:-80px; z-index:50; padding:0; background:transparent; border:0; transition:opacity 0.5s; opacity:1;" @click="$emit('close')" aria-label="Close">
        <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#fff" fill-opacity=".3"/><path d="M33 16.813 31.187 15 24 22.187 16.813 15 15 16.813 22.187 24 15 31.187 16.813 33 24 25.813 31.187 33 33 31.187 25.813 24 33 16.813Z" fill="#fff"/></svg>
      </button>
      <div :class="[
        'bg-white p-4 sm:p-6 relative flex items-center justify-center w-[90vw] max-w-[400px] h-[320px] sm:h-[400px] rounded-lg',
        'transition-all duration-300',
        show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      ]">
        <img
          v-if="badge && !imageError"
          :src="badge"
          alt="Season badge"
          class="transition-opacity duration-500 opacity-0 w-full h-full object-contain rounded shadow-md border border-gray-100"
          @load="onImageLoad"
          @error="onImageError"
          :class="{ 'opacity-100': imageLoaded }"
        />
        <div v-else-if="imageError" class="flex flex-col items-center justify-center w-full h-full">
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-2">
            <circle cx="60" cy="60" r="56" fill="#e41827" fill-opacity="0.08" />
            <rect x="35" y="50" width="50" height="30" rx="8" fill="#fff" stroke="#e41827" stroke-width="2" />
            <path d="M50 65 l10 10 10-10" stroke="#e41827" stroke-width="2" fill="none" stroke-linecap="round" />
            <circle cx="60" cy="60" r="4" fill="#e41827" />
          </svg>
          <span class="text-theme font-semibold text-base">No badge available</span>
        </div>
        <div v-else class="w-full h-full flex items-center justify-center">
          <ImageSkeleton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageSkeleton from './ImageSkeleton.vue'
import { cacheManager } from '../cache/cacheManager'
export default {
  components: { ImageSkeleton },
  props: ['league'],
  data() {
    return {
      badge: null,
      imageLoaded: false,
      imageError: false,
      show: false
    }
  },
  methods: {
    onImageLoad() {
      this.imageLoaded = true
    },
    onImageError() {
      this.imageError = true
    }
  },
  async created() {
    const key = `badge_${this.league.idLeague}`
    let badge = cacheManager.get(key)
    if (!badge) {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=${this.league.idLeague}`
      )
      const data = await res.json()
      badge = data.seasons?.[0]?.strBadge || null
      cacheManager.set(key, badge)
    }
    this.badge = badge
    if (!badge) {
      this.imageError = true
    }
  },
  mounted() {
    // Trigger popover animation after mount
    setTimeout(() => {
      this.show = true
    }, 10)
  }
}
</script>