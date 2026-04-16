useEffect(() => {
  const fetchCountries = async () => {
    if (!query) {
      setCountries([])
      return
    }

    try {
      setLoading(true)
      setError(null)

      const res = await fetch(
        `https://restcountries.com/v3.1/name/${query}`
      )

      if (!res.ok) throw new Error('Country not found')

      const data = await res.json()
      setCountries(data)
    } catch (err) {
      setError(err.message)
      setCountries([])
    } finally {
      setLoading(false)
    }
  }

  fetchCountries()
}, [query])