import {
  Button,
  Container,
  FormErrorMessage,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  // Img,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Link, NavLink, /* useNavigate */ } from 'react-router-dom';

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting}, } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }
  // const navigate = useNavigate();


 /*  const submit = user => {
    // registerUseCase(user);
  }; */

  return (
    <Container
      maxW="md"
      borderRadius="0 28px  28px 0"
      py={{
        base: '6',
        md: '8',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="8"  minH="635px" maxH="700px">
          <Stack spacing="6" align="center" color="black">
            <Stack spacing="3" textAlign="center" color="black">
              <Heading color="black"

                size={useBreakpointValue({
                  base: 'md',
                  md: 'xl',
                })}
              >
                Crea tu cuenta
              </Heading>
              <Text color="black">Empieza a hacer realidad tus sueños</Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isInvalid={errors.name} >
                <FormLabel color="black" htmlFor="name">
                  Nombre
                </FormLabel>
                <Input bg="gray.100" id="name" placeholder='nombre'{...register('name', {required: 'Introduce un nombre', minLength: })} focusBorderColor="primary.300" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="black" htmlFor="name">
                  Apellido
                </FormLabel>
                <Input bg="gray.100" id="name" type="text" {...register('lastName')} focusBorderColor="primary.300" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="black" htmlFor="email">
                  Email
                </FormLabel>
                <Input bg="gray.100" id="email" type="email" {...register('email')} focusBorderColor="primary.300" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="black" htmlFor="password">
                  Contraseña
                </FormLabel>
                <Input
                  bg="gray.100"
                  id="password"
                  type="password"
                  {...register('password')}
                  focusBorderColor="primary.300"
                />
                <FormHelperText color="black">
                  Como mínimo 12 carácteres de longitud, 1 número y 1 símbolo
                </FormHelperText>
              </FormControl>
            </Stack>
            <Stack spacing="2">
              <Button bgColor="#23375B" color="white "type="submit" variant="solid" loadingText="Creando cuenta...">
                Crear cuenta
              </Button>
            </Stack>
          </Stack>
          <HStack justify="space-evenly" spacing="2">
            <Text fontSize="sm" color="black">
              Ya estás registrado?
            </Text>
            <NavLink  to="/login"  color="red" >
          <Text color="#3182ce" fontWeight="medium" >Iniciar Sesión</Text>
          </NavLink>

          </HStack>
        </Stack>
      </form>
    </Container>
  );
};

export default RegisterForm;