<template>
  <label for="sport-filter" class="block mb-1 font-bold text-theme text-lg">{{ label }}</label>
  <div class="relative">
    <select
      id="sport-filter"
      name="sport-filter"
      class="appearance-none border-2 border-theme p-2 w-full mb-4 rounded-lg bg-white text-gray-800 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-theme focus:border-theme transition-all duration-200 pr-10 hover:border-theme/80 hover:shadow-md"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="" class="text-gray-400">All Sports</option>
      <option v-for="s in sports" :key="s" :value="s" class="text-gray-700">{{ s }}</option>
    </select>
    <span class="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-theme">
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/></svg>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    sports: Array,
    modelValue: String,
    label: {
      type: String,
      default: 'Filter by Sport'
    }
  }
}
</script>