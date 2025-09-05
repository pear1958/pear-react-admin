import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

const SmartCity = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch('https://api.github.com/repos/TanStack/query')
      return await response.json()
    }
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.full_name}</h1>
      <p>{data.description}</p>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  )
}

export default SmartCity
