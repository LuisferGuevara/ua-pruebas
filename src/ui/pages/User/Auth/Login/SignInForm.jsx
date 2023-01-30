import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useState } from "react";

export const SignInForm = (props) => {
  const [isHidden, setIsHidden] = useState();
  return (
    <Stack spacing="8" {...props} minH="697px" borderRadius="0 28px  28px 0"  >
      <Stack spacing="6">
        <Stack
          spacing={{
            base: "2",
            md: "3",
          }}
          textAlign="center"
        >
          <Heading
            size={useBreakpointValue({
              base: "xs",
              md: "sm",
            })}
            fontSize="32px"
            color="#23375B"
          >
            Inicio de Sesión
          </Heading>
        </Stack>
      </Stack>
      <Stack spacing="2">
        <Stack spacing="16" mt="40px">
          <FormControl>
            <FormLabel htmlFor="email" color="#23375B" >
              Email
            </FormLabel>
            <Input id="email" placeholder="Introduce tu email" type="email" color="#23375B !important" border="1px solid #23375B"  borderRadius="8px"/>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password" color="#23375B">Contraseña</FormLabel>
            <InputGroup border="1px solid #23375B"  borderRadius="8px">
            <InputRightElement>
                    <IconButton
                      onClick={() => setIsHidden(!isHidden)}
                      color="#23375B"
                      bg="transparent"
                      icon={isHidden ? <HiEyeOff /> : <HiEye />}
                    >
                      {isHidden ? "Mostrar contraseñas" : "Ocultar contraseñas"}
                    </IconButton>
                  </InputRightElement>
            <Input id="password" placeholder="********" type={isHidden ? "password" : "text"} color="#23375B"/>
            </InputGroup>
          </FormControl>
        </Stack>
        <HStack color="#23375B" pt="40px">
          <Checkbox defaultChecked>Recuérdame</Checkbox>
        </HStack>
        <HStack>
          <Button variant="link" colorScheme="blue" size="sm">
            ¿Has olvidado tu contraseña?
          </Button>
        </HStack>
        <Stack spacing="6" pt="40px">
          <Button bgColor="#23375B" color="white" variant="primary">
            INICIAR SESIÓN
          </Button>
        </Stack>
        <Stack  pt="8em">
          <HStack spacing="1">
            <Text color="#23375B">¿No tienes una cuenta aún?</Text>
            <NavLink to="/register" color="red">
              <Text color="#3182ce" fontWeight="medium">
                Regístrate
              </Text>
            </NavLink>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};
