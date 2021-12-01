import React from 'react'
import { Box, Text, Input, Button, Stack } from 'native-base'
import i18n from '../i18n'
import { useForm, Controller } from 'react-hook-form'
import useLogin from '../hooks/useLogin'

const defaultValues = {
  email: '',
  password: ''
}

const Login = () => {
  const login = useLogin()

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty }
  } = useForm({ defaultValues })

  const onSubmit = (data: typeof defaultValues) => login.mutate(data)

  return (
    <Stack flex="1" padding="2">
      <Box p="5">
        <Text fontWeight="bold" fontSize="xl" textAlign="center">
          {i18n.t('enter_email_username_password')}
        </Text>
        <Box mt="30" mb="30">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                autoFocus
                variant="underlined"
                size="lg"
                mb="4"
                placeholder={i18n.t('email_or_username')}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                variant="underlined"
                size="lg"
                mb="3"
                placeholder={i18n.t('password')}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
        </Box>
        <Box>
          <Button
            isDisabled={!isDirty || !!Object.keys(errors).length}
            _text={{ color: 'white' }}
            onPress={handleSubmit(onSubmit)}
            borderRadius="30"
            bgColor="singletons.twitterBlue">
            {i18n.t('login')}
          </Button>
        </Box>
      </Box>
    </Stack>
  )
}

export default Login
