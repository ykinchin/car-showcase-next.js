import { SearchBar } from '@/components'
import Hero from '@/components/Hero'
import { fetchData } from '@/utils'

export default async function Home() {
  const allCars1 = await fetchData()
  console.log(allCars1)

  return (
    <main>
      <Hero />
      <SearchBar />
    </main>
  )
}
