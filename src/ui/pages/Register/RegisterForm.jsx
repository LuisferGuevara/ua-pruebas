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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link /* useNavigate */ } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  // const navigate = useNavigate();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 2000);
    });
  }

  /*  const submit = (user) => {
    // registerUseCase(user);
  }; */

  return (
    <Container
      maxW="md"
      py={{
        base: "6",
        md: "8",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="8" color="black">
          <Stack spacing="6" align="center">
            <Stack spacing="3" textAlign="center">
              <Heading
                color="white"
                size={useBreakpointValue({
                  base: "md",
                  md: "xl",
                })}
              >
                Crea tu cuenta
              </Heading>
              <Text color="gray.200">Empieza a hacer realidad tus sueños</Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isRequired isInvalid={errors.name}>
                <FormLabel color="white" htmlFor="name">
                  Nombre
                </FormLabel>
                <Input
                  bg="gray.100"
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "Introduce un nombre",
                    minLength: {
                      value: 4,
                      message: "El nombre debe tener al menos 4 caracteres",
                    },
                  })}
                  focusBorderColor="primary.300"
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.lastName}>
                <FormLabel color="white" htmlFor="lastName">
                  Apellido
                </FormLabel>
                <Input
                  bg="gray.100"
                  id="name"
                  type="text"
                  {...register("lastName", {
                    required: "Introduce un apellido",
                  })}
                  focusBorderColor="primary.300"
                />
                <FormErrorMessage>
                  {errors.lastName && errors.lastName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.email}>
                <FormLabel color="white" htmlFor="email">
                  Email
                </FormLabel>
                <Input
                  bg="gray.100"
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Este campo es requerido",
                    /* error: "Introduce un formato válido", */
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Introduce una dirección de correo válida',
                  },
                  })}
                  focusBorderColor="primary.300"
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.password}>
                <FormLabel color="white" htmlFor="password">
                  Contraseña
                </FormLabel>
                <Input
                  bg="gray.100"
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                      message: 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y una mayúscula',
                  },
                  })}
                  focusBorderColor="primary.300"
                />
                <FormHelperText color="gray.200">
                La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y una mayúscula
                </FormHelperText>
                <FormErrorMessage>
                  {errors.password && errors.password?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.confirm_password}>
                <FormLabel color="white" htmlFor="confirm_password">
                  Confirma tu contraseña
                </FormLabel>
                <Input
                  bg="gray.100"
                  id="password"
                  type="password"
                  {...register("confirm_password", {
                    required: "Este campo es requerido",
                    validate: (val) => {
                      if (watch("password") !== val) {
                        return "La contraseña de verificación no coincide"
                      }
                    }
                  })}
                  focusBorderColor="primary.300"
                />
                <FormHelperText color="gray.200">
                  Repetir contraseña
                </FormHelperText>
                <FormErrorMessage>
                  {errors.password && errors.confirm_password?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <Stack spacing="2">
              <Button
                type="submit"
                variant="solid"
                isLoading={isSubmitting}
                loadingText="Creando cuenta..."
                color="white"
              >
                Crear cuenta
              </Button>
            </Stack>
          </Stack>
          <HStack justify="center" spacing="2">
            <Text fontSize="sm" color="white">
              Ya estás registrado?
            </Text>
            <Button as={Link} to="/login" variant="link" size="sm">
              Log in
            </Button>
          </HStack>
        </Stack>
      </form>
    </Container>
  );
};

export default Register;
