import { useQuery, UseQueryOptions } from 'react-query'

type User = { name: string }

const useUser = (options?: UseQueryOptions<User, any, User>) =>
  useQuery('user', async () => undefined, {
    cacheTime: Infinity,
    staleTime: Infinity,
    refetchOnWindowFocus: false
  })

export default useUser
