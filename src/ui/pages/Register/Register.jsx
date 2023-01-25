import {
  Box,
  Center,
  DarkMode,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { SignInForm } from "../Login/SignInForm";
import myImage from "../../../assets/Poli.png";
import RegisterForm from "./RegisterForm";

export const Registro = () => (
  <Flex
    bgColor="#fff"
    color="#222"
    minH={{
      base: "auto",
      md: "100%",
    }}
    borderRadius="28px"
    maxWidth= "1440px"
    m="20px auto"
    w="85%"
    h="100%"
  >
    <Flex  mx="auto" width="full">
      <Box
        flex="1"
        borderRadius="28px  0 0 28px "
        display={{
          base: "none",
          md: "block",
        }}
      >
        <DarkMode>
          <Flex 

            bgPosition="30%"
            bgImage={`url(${myImage})`}
            bgSize="cover"
            borderRadius="28px 0 0 28px"
            objectFit="cover"
            direction="column"
            px={{
              base: "4",
              md: "8",
            }}
            height="full"
            color="on-accent"
          >
            <Flex flex="1" align="left" mt="10">
              <Stack spacing="8">
                <Stack spacing="0" textAlign="start">
                <Heading
                mb="-25px"
                    fontSize="3em"
                    color="white"
                    textShadow="1px 2px 0 black"
                  >
                    Comienza el
                  </Heading>
                <Heading
                    spacing="0"
                    color="white"
                    fontSize="6em"
                    textShadow="1px 2px 0 black"
                  >
                  Desafío.
                  </Heading>
                  <Text
                    fontSize="lg"
                    maxW="md"
                    fontWeight="bold"
                    color="white"
                    textShadow="1px 2px 0 black"
                    textAlign="justify"
                  >
                    Te ayudamos a preparar tus oposiciones para la Policia Nacional. Tu esfuerzo es
                    termporal, pero tu plaza es para toda la vida.
                  </Text>
                </Stack>
              </Stack>
            </Flex>
          </Flex>
        </DarkMode>
      </Box>
      <Center flex="1">
        <RegisterForm 
          px={{
            base: "4",
            md: "8",
          }}
          py={{
            base: "12",
            md: "12",
          }}
          width="full"
          maxW="md"
        />
      </Center>
    </Flex>
  </Flex>
);
