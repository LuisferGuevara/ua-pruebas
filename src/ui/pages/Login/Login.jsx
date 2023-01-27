import { Box, Center, DarkMode, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { SignInForm } from "../Login/SignInForm";
import myImage from "../../../assets/Poli.png";

export const Login = () => (
  <Flex
   maxWidth="1440px"
    m="20px auto"
    w="85%"
    h="100%" 
    minH={{
      base: "auto",
      md: "100%",
    }}
    borderRadius="28px"
    bgColor="whitesmoke"
  >
    <Flex mx="auto" width="full"   borderRadius="28px ">
      <Box 
        flex="1"
        display={{
          base: "none",
          md: "block",}}
          bgPosition="30%"
          bgSize="cover"
          objectFit="cover"
          borderRadius="28px  0 0 28px "
          bgImage={`url(${myImage})`}  
      >
        <DarkMode>
          <Flex 
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
                  <Heading mb="-25px" fontSize="3em"  color="white" textShadow="1px 2px 0 black">
                    Comienza el
                  </Heading>
                  <Heading spacing="0" fontSize="6em" textShadow="1px 2px 0 black" color="white">
                    Desafío.
                  </Heading>
                  <Text
                    textAlign="justify"
                    maxW="md"
                    fontSize="lg"
                    fontWeight="bold"
                    textShadow="1px 2px 0 black"
                    color="white !important"  
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
        <SignInForm
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
