import { cacheManager } from '../cache/cacheManager'

const KEY = 'all_leagues'

export async function fetchLeagues() {
  const cached = cacheManager.get(KEY)
  if (cached) return cached

  const res = await fetch('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php')
  const data = await res.json()
  cacheManager.set(KEY, data.leagues)
  return data.leagues
}
