import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'

export function useHeroData() {
  const [hero, setHero] = useState(null)

  useEffect(() => {
    client.fetch(`*[_type == "hero"][0]`).then(setHero)
  }, [])

  return hero
}
