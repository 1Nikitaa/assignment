<template>
  <ul class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
    <li v-for="l in leagues" :key="l.idLeague"
        class="group p-5 border-2 border-theme rounded-xl shadow-lg cursor-pointer bg-white hover:bg-theme hover:text-white transition-all duration-200 flex flex-col gap-2 focus:outline-none focus:ring-2 focus:ring-theme"
        tabindex="0"
        @click="$emit('select', l)">
      <div class="font-bold text-lg flex items-center gap-2">
        <span class="inline-block w-2 h-2 rounded-full bg-theme transition-colors duration-200 group-hover:bg-white"></span>
        {{ l.strLeague }}
      </div>
      <div class="text-sm font-semibold">Sport: <span class="text-theme">{{ l.strSport }}</span></div>
      <div v-if="l.strLeagueAlternate" class="text-xs italic opacity-80">Alternate: {{ l.strLeagueAlternate }}</div>
    </li>
  </ul>
</template>

<script>
export default { props: ['leagues'] }
</script>