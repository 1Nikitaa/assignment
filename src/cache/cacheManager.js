const memory = new Map()

export const cacheManager = {
  get(key) {
    if (memory.has(key)) return memory.get(key)
    const raw = localStorage.getItem(key)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    memory.set(key, parsed)
    return parsed
  },
  set(key, value) {
    memory.set(key, value)
    localStorage.setItem(key, JSON.stringify(value))
  }
}