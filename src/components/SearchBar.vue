<template>
  <label for="search-leagues" class="block mb-1 font-bold text-theme text-lg">{{placeholder}}</label>
  <input
    id="search-leagues"
    name="search-leagues"
    class="border p-2 w-full mb-2"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    aria-label="Search leagues"
  />
</template>

<script>
import i18n from '../i18n/en.properties'
export default {
  props: ['modelValue'],
  data() { return { placeholder: i18n.searchPlaceholder } }
}
</script>