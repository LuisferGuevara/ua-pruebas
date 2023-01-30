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
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { /* Link, */ NavLink /* useNavigate */ } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";

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

  const [isHidden, setIsHidden] = useState(true);

  /*  const submit = (user) => {
    // registerUseCase(user);
  }; */

  return (
    <Container
      maxW="md"
      borderRadius="0 28px  28px 0"
      py={{
        base: "6",
        md: "8",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="8">
          <Stack spacing="6" align="center">
            <Stack spacing="3" textAlign="center">
              <Heading
                color="#23375B"
                fontSize="32px"
                size={useBreakpointValue({
                  base: "md",
                  md: "xl",
                })}
              >
                Crea tu cuenta
              </Heading>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isRequired isInvalid={errors.name}>
                <FormLabel color="#23375B" htmlFor="name">
                  Nombre
                </FormLabel>
                <Input
                  bg="gray.100"
                  id="name"
                  type="text"
                  color="#23375B"
                  border="1px solid #23375B"
                  borderRadius="8px"
                  {...register("name", {
                    required: "Introduce un nombre",
                    minLength: {
                      value: 4,
                      message: "El nombre debe tener al menos 4 caracteres",
                    },
                  })}
                  focusbordercolor="primary.300"
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.lastName}>
                <FormLabel color="#23375B" htmlFor="lastName">
                  Apellido
                </FormLabel>
                <Input
                  bg="gray.100"
                  id="lastname"
                  type="text"
                  color="#23375B"
                  border="1px solid #23375B"
                  borderRadius="8px"
                  {...register("lastName", {
                    required: "Introduce un apellido",
                  })}
                  focusbordercolor="primary.300"
                />
                <FormErrorMessage>
                  {errors.lastName && errors.lastName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.email}>
                <FormLabel color="#23375B" htmlFor="email">
                  Email
                </FormLabel>
                <Input
                  bg="gray.100"
                  id="email"
                  type="email"
                  color="#23375B"
                  border="1px solid #23375B"
                  borderRadius="8px"
                  {...register("email", {
                    required: "Este campo es requerido",
                    /* error: "Introduce un formato válido", */
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Introduce una dirección de correo válida",
                    },
                  })}
                  focusbordercolor="primary.300"
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.password}>
                <FormLabel color="#23375B" htmlFor="password">
                  Contraseña
                </FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      onClick={() => setIsHidden(!isHidden)}
                      color="#23375B"
                      bg="transparent"
                      _hover="none"
                      icon={isHidden ? <HiEyeOff /> : <HiEye />}
                    >
                      {isHidden ? "Mostrar contraseñas" : "Ocultar contraseñas"}
                    </IconButton>
                  </InputRightElement>
                  <Input
                    bg="gray.100"
                    id="password"
                    type={isHidden ? "password" : "text"}
                    color="#23375B"
                    border="1px solid #23375B"
                    borderRadius="8px"
                    {...register("password", {
                      required: "Este campo es requerido",
                      pattern: {
                        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                        message:
                          "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y una mayúscula",
                      },
                    })}
                    focusbordercolor="primary.300"
                  />
                </InputGroup>
                <FormHelperText color="#23375B" align="start">
                  La contraseña debe tener entre 8 y 16 caracteres, al menos un
                  dígito, una minúscula y una mayúscula
                </FormHelperText>
                <FormErrorMessage>
                  {errors.password && errors.password?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.confirm_password}>
                <FormLabel color="#23375B" htmlFor="confirm_password">
                  Confirma tu contraseña
                </FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      onClick={() => setIsHidden(!isHidden)}
                      color="#23375B"
                      bg="transparent"
                      _hover="none"
                      icon={isHidden ? <HiEyeOff /> : <HiEye />}
                    >
                      {isHidden ? "Mostrar contraseñas" : "Ocultar contraseñas"}
                    </IconButton>
                  </InputRightElement>
                  <Input
                    bg="gray.100"
                    id="passwordConfirmation"
                    type={isHidden ? "password" : "text"}
                    color="#23375B"
                    border="1px solid #23375B"
                    borderRadius="8px"
                    {...register("confirm_password", {
                      required: "Este campo es requerido",
                      validate: (val) => {
                        if (watch("password") !== val) {
                          return "La contraseña de verificación no coincide";
                        }
                      },
                    })}
                    focusbordercolor="primary.300"
                  />
                </InputGroup>
                <FormHelperText color="#23375B" align="start">
                  Confirmar contraseña
                </FormHelperText>
                <FormErrorMessage>
                  {errors.confirm_password && errors.confirm_password?.message}
                </FormErrorMessage>
              </FormControl>
              {/* <RegisterPasswordField /> */}
            </Stack>
            <Stack spacing="2">
              <Button
                type="submit"
                _hover={":none"}
                variant="solid"
                isLoading={isSubmitting}
                loadingText="Creando cuenta..."
                bgColor="#23375B"
                color="white"
              >
                Crear cuenta
              </Button>
            </Stack>
          </Stack>
          <HStack spacing="2">
            <Text fontSize="sm" color="#23375B">
              ¿Ya estás registrado?
            </Text>
            <NavLink to="/login" color="#23375B">
              <Text color="#3182ce" fontWeight="medium">
                Iniciar Sesión
              </Text>
            </NavLink>
          </HStack>
        </Stack>
      </form>
    </Container>
  );
};

export default Register;
