import { useState, useEffect } from 'react'

function useCountry(code) {
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!code) return

    const fetchCountry = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}`
        )

        if (!res.ok) {
          throw new Error('Failed to fetch country')
        }

        const data = await res.json()
        setCountry(data[0])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCountry()
  }, [code])

  return { country, loading, error }
}

export default useCountry