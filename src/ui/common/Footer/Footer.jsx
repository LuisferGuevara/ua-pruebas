import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Divider,
  Flex,
  Img,
  SimpleGrid,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import * as React from "react";
import { FaInstagram } from "react-icons/fa";
import { links } from "./_data";
import logo from "../../../assets/mario.png";
import { Link } from "react-router-dom";
export const Footer = () => (
  <Box as="section" w="100%" m="0 auto" bgColor="#121212">
    <Divider borderColor="bg-accent-subtle" />
    <Flex
      as="footer"
      role="contentinfo"
      flexDir="column"
      maxW="1440px"
      w="85%"
      m="0 auto"
      bg="salmon"
    >
      <Stack
        justify="space-around"
        align={{ base: "center" }}
        bg="red"
        direction={{
          base: "column",
          lg: "row",
        }}
        py={{
          base: "12",
          md: "14",
        }}
        spacing="8"
        borderBottom="1px solid whitesmoke"
      >
        <Stack
          bg="green"
          spacing={{
            base: "6",
            md: "8",
          }}
          align="center"
          width={{
            base: "100%",
            lg: "50%",
          }}
          color="whitesmoke"
          fontSize="large"
          h={{ base: "auto" }}
        >
          <Flex
            width={{
              base: "45%",
              lg: "80%",
            }}
          >
            <Img src={logo} w="100%" opacity="100%" bg="salmon" objectFit="contain" />
          </Flex>

          <Heading fontSize={"xl"} fontWeight="bold">
            Academia online para mejorar tu futuro profesional como policía nacional, tu inglés y
            ¡mucho más!
          </Heading>
          {/* NECESITAMOS APLICAR EL MAILTO: */}
          <Link href={`mailto:info@uniformeazul.com`}>info@uniformeazul.com</Link>
        </Stack>
        <SimpleGrid
          bg="tan"
          columns={{
            base: 2,
            md: 3,
          }}
          gap="6"
          display="flex"
justifyContent={"center"}
          width={{
            base: "full",
            lg: "",
          }}
        >
          {links.map((group, idx) => (
            <Stack
              bg="teal"

              key={idx}
              spacing="8"
              w="100%"
            >
              <Text fontSize="xl" color="whitesmoke" fontWeight="semibold">
                {group.title}
              </Text>
              <Stack spacing="2" shouldWrapChildren display={"flex"} align="start">
                {group.links.map((link, idx) => {
                  const target = idx >= group.links.length - 2 ? "_blank" : "_self";
                  return (
                    <Button
                      fontSize="large"
                      color="#FFFAF0"
                      key={idx}
                      as="a"
                      variant="link-on-accent"
                      href={link.href}
                      target={target}
                    >
                      {link.label}
                    </Button>
                  );
                })}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
      <Divider borderColor="bg-accent-subtle" />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{
          base: "column-reverse",
          md: "row",
        }}
        align="center"
      >
        <Text fontSize="sm" color="white">
          &copy; {new Date().getFullYear()} Rocket418, Inc. Todos los derechos reservados.
        </Text>
        <ButtonGroup variant="ghost-on-accent">
          <IconButton
            as="a"
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Flex>
  </Box>
);
