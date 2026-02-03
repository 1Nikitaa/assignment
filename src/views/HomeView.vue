<template>
  <main class="p-4 max-w-5xl mx-auto">
    <template v-if="loading">
      <div class="fixed inset-0 flex flex-col items-center justify-center z-50" style="background: var(--theme-color);">
        <span class="mb-4">
          <svg width="300" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M201.656 7.12c-2.46 2.77-3.65 4.252-6.099 7.008-.365-.39-.692-.788-1.065-1.132-1.73-1.594-4.613-2-6.759-1.739-3.789.463-8.09 2.4-9.42 8.061-.336 1.723-.371 3.892.134 5.64.795 2.752 2.926 5.279 7.081 5.883 1.395.149 3.456.145 4.787-.243.076-.867.255-3.533.373-4.479l-5.794-.01c.385-3.124.758-4.894 1.136-7.965 5.353.01 9.288.026 14.664.036-.174 1.422-.189 1.556-.364 2.966-.609 4.92-1.223 9.84-1.822 14.763-.049.396-.172.65-.544.837-4.21 2.11-7.399 3.391-12.242 3.26-3.545-.095-6.993-.707-10.193-2.532-3.98-2.27-6.473-5.703-7.331-10.15-1.324-6.864-.016-13.085 4.238-18.345 3.601-4.453 8.445-6.672 14.236-6.914 3.625-.151 7.189.322 10.614 1.873 1.873.85 3.456 2.006 4.37 3.183" fill="#fff"/><mask id="a" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="272" y="15" width="28" height="33"><path fill-rule="evenodd" clip-rule="evenodd" d="M272.373 15.398H300V48h-27.627V15.398z" fill="#fff"/></mask><g mask="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M290.476 15.434c-4.306-.093-10.203.027-14.51.012-1.218 10.88-2.46 21.654-3.593 32.538l8.697.016 2.771-24.753c1.884-.151 3.63-.29 5.332.142 1.229.312 2.048 1.187 2.396 2.448.697 2.53-1.055 5.216-3.727 5.659-.779.129-1.571.18-2.594.294l1.549 7.578c.92-.104 1.716-.126 2.479-.294 2.459-.54 4.801-1.3 6.695-3.106 2.83-2.696 3.763-6.126 4.001-9.826.132-2.062-.185-4.088-1.225-5.91-1.811-3.171-4.66-4.72-8.271-4.798" fill="#fff"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M227.56 26.937c.292-2.342 2.262-4.125 4.612-4.169a3.682 3.682 0 0 1 3.759 3.605c0 .193-.001.386-.025.579-.292 2.341-2.262 4.124-4.612 4.168a3.682 3.682 0 0 1-3.759-3.604c-.024-.193 0-.386.025-.58m-7.627.228c-.708 6.517 4.007 11.813 10.507 11.825 6.499.012 12.337-5.264 13.02-11.781.683-6.518-4.008-11.814-10.507-11.826-6.499-.012-12.313 5.265-13.02 11.782m34.656 11.728c2.106.126 3.26.13 5.366.014 5.328-.295 10.197-4.402 10.922-9.266.587-3.94 1.186-9.226 1.657-13.18-2.946-.005-5.917-.006-8.76-.011-.426 3.4-1.151 8.559-1.54 11.963-.158 1.376-1.091 2.347-2.372 2.95-1.019.48-1.847.554-2.857.322-1.756-.403-2.512-1.59-2.414-3.288.113-1.94.275-3.878.425-5.816.153-1.978.319-3.956.497-6.147-3.048-.006-5.951-.02-8.768-.024-.232 2.814-.512 6.413-.727 9.228-.119 1.568-.319 3.14-.285 4.706.093 4.38 4.11 8.265 8.856 8.549zm-40.423-23.51c-5.511-.01-10.466 4.627-11.039 10.344l-1.371 13.248 8.205.016 1.32-12.687c.224-1.863 1.72-3.264 3.508-3.312l4.458-.017-1.554-7.585-3.527-.007z" fill="#fff"/><path d="M19.21 16.348h-4.038c-1.397-.05-2.487-1.242-2.436-2.663 0-.076.007-.155.018-.232.196-1.578 1.464-2.794 3.023-2.903h3.699L17.39.829h-1.094c-7.021.14-12.87 5.5-13.739 12.583-.786 6.097 3.437 11.686 9.431 12.486.553.073 1.108.104 1.663.092h4.046c1.396.054 2.484 1.25 2.43 2.671a3.47 3.47 0 0 1-.019.225c-.198 1.579-1.465 2.795-3.024 2.904h-3.697l2.109 9.685h1.093c7.015-.145 12.862-5.503 13.727-12.585.788-6.097-3.436-11.686-9.43-12.485a10.854 10.854 0 0 0-1.662-.092M27.535 0c2.951 0 5.344 2.414 5.344 5.39 0 2.978-2.393 5.39-5.344 5.39-2.952 0-5.343-2.414-5.343-5.39 0-2.974 2.396-5.39 5.343-5.39zM5.312 30.688C2.364 30.705-.015 33.133 0 36.11c.017 2.979 2.421 5.377 5.37 5.36 2.94-.015 5.315-2.424 5.315-5.389-.007-2.987-2.413-5.4-5.37-5.393m66.506-6.059c.32-2.654 2.514-4.658 5.136-4.695 2.247-.053 4.113 1.764 4.163 4.06.005.214-.007.425-.032.635-.326 2.651-2.519 4.651-5.136 4.689-2.244.058-4.112-1.751-4.168-4.043a4.219 4.219 0 0 1 .037-.668v.024-.002zm-8.433.27c-.824 6.425 3.614 12.314 9.91 13.156.584.077 1.175.111 1.763.098 7.369-.147 13.513-5.794 14.43-13.253.84-6.424-3.583-12.325-9.876-13.184a11.207 11.207 0 0 0-1.822-.099c-7.37.155-13.507 5.816-14.403 13.283h-.002v-.002zM35.665 12.441l-3.61 34.007h9.003L43.82 20.64h3.898c2.056-.017 3.732 1.671 3.747 3.767 0 .163-.007.328-.027.49-.295 2.396-2.269 4.21-4.636 4.258h-1.917l1.731 8.311c3.408-.204 6.845-1.282 9.026-3.25 2.424-2.187 3.845-5.274 4.252-9.245.411-3.97-.364-7.067-2.343-9.253-1.977-2.185-4.062-3.278-8.182-3.278H35.665v.001zm96.554-.039h-6.246l.778-7.428-9.319 2.934-.477 4.494h-5.17l1.759 8.053h2.567l-1.788 16.868h9.007l1.794-16.868h8.854l-1.759-8.053zm19.666.04-4.842 11.61-2.531-11.61h-8.89l5.582 25.32-3.665 8.684h8.889l14.674-34.006h-9.219l.002.001zm-47.253 0c-6.1.117-11.183 4.77-11.933 10.914l-1.463 13.967h8.883l1.411-13.368c.236-1.96 1.853-3.444 3.798-3.489h4.814l-1.707-7.982-3.803-.044v.001z" fill="#fff"/></svg>
        </span>
      </div>
    </template>
    <template v-else>
      <SearchBar v-model="query" />
      <SportFilter :sports="sports" v-model="sport" />
      <EmptyState v-if="!filteredLeagues.length" :message="i18n.emptyMessage" />
      <LeagueList
        v-else
        :leagues="filteredLeagues"
        @select="selectLeague"
      />
      <LeagueBadgeModal
        v-if="selected"
        :league="selected"
        @close="selected=null"
      />
    </template>
  </main>
</template>

<script>
import { fetchLeagues } from '../api/leagues.service'
import SearchBar from '../components/SearchBar.vue'
import SportFilter from '../components/SportFilter.vue'
import LeagueList from '../components/LeagueList.vue'
import LeagueBadgeModal from '../components/LeagueBadgeModal.vue'
import SkeletonLoader from '../components/SkeletonLoader.vue'
import EmptyState from '../components/EmptyState.vue'
import i18n from '../i18n/en.properties'

export default {
  components: {
    SearchBar,
    SportFilter,
    LeagueList,
    LeagueBadgeModal,
    SkeletonLoader,
    EmptyState
  },
  data() {
    return {
      leagues: [],
      query: '',
      debouncedQuery: '',
      sport: '',
      selected: null,
      loading: true,
      i18n,
      debounceTimeout: null
    }
  },
  async created() {
    try {
      this.leagues = await fetchLeagues()
    } finally {
      this.loading = false
    }
  },
  computed: {
    sports() {
      return [...new Set(this.leagues.map(l => l.strSport))]
    },
    filteredLeagues() {
      if (this.debouncedQuery.length < 2) return this.leagues.filter(l => !this.sport || l.strSport === this.sport)
      return this.leagues.filter(l =>
        (!this.sport || l.strSport === this.sport) &&
        l.strLeague.toLowerCase().includes(this.debouncedQuery.toLowerCase())
      )
    }
  },
  watch: {
    query(newVal) {
      clearTimeout(this.debounceTimeout)
      this.debounceTimeout = setTimeout(() => {
        this.debouncedQuery = newVal
      }, 300)
    }
  },
  methods: {
    selectLeague(l) {
      this.selected = l
    }
  }
}
</script>