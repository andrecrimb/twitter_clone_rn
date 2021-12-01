import { useMutation, useQueryClient } from 'react-query'

type ReqVars = {
  email: string
  password: string
}

const useLogin = () => {
  const client = useQueryClient()

  return useMutation(
    async (vars: ReqVars) => {
      return true
    },
    {
      onSuccess: () => {
        client.setQueryData('user', { name: 'John' })
      }
    }
  )
}

export default useLogin
