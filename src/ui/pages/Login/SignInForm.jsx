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
} from "@chakra-ui/react";
import * as React from "react";
import { LogoIcon } from "./Logo";
import { GoogleIcon } from "./ProviderIcons";

export const SignInForm = (props) => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });
  return (
    <Stack spacing="8" {...props}>
      <Stack spacing="6">
        {isMobile && <LogoIcon />}
        <Stack
          spacing={{
            base: "2",
            md: "3",
          }}
          textAlign="start"
        >
          <Heading
            size={useBreakpointValue({
              base: "xs",
              md: "sm",
            })}
            fontSize="32px"
          >
            Inicio de Sesión
          </Heading>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" placeholder="Enter your email" type="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <Input id="password" placeholder="********" type="password" />
          </FormControl>
        </Stack>
        <HStack>
          <Checkbox defaultChecked>Recuérdame</Checkbox>
        </HStack>
        <HStack>
          <Button variant="link" colorScheme="blue" size="sm">
            ¿Has olvidado tu contraseña?
          </Button>
        </HStack>
        <Stack spacing="4">
          <Button bgColor="#23375B" color="white" variant="primary">INICIAR SESIÓN</Button>
        </Stack>
        <HStack spacing="1" justify="center">
          <Text color="muted">¿No tienes una cuenta aún?</Text>
          <Button variant="link" colorScheme="blue">
            Regístrate
          </Button>
        </HStack>
      </Stack>
    </Stack>
  );
};
