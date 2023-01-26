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
} from "@chakra-ui/react";
import * as React from "react";
import { FaInstagram } from 'react-icons/fa'
import { links } from "./_data";
import logo from "../../../assets/mario.png";
// import { Link } from "react-router-dom";
export const Footer = () => (
  <Box
    as="section"
    bg="accent"
    color="on-acccent"
    w="100%"
    m="0 auto"
    bgColor="#121212"
  >
    <Divider borderColor="bg-accent-subtle" />
    <Flex
      as="footer"
      role="contentinfo"
      flexDir="column"
      maxW="1440px"
      w="85%"
      m="0 auto"
    >
      <Stack
        justify="space-around"
        align="start"
        direction={{
          base: "column",
          lg: "row",
        }}
        py={{
          base: "12",
          md: "14",
        }}
        spacing="8"
      >
        <Stack
          spacing={{
            base: "6",
            md: "8",
          }}
          align="center"
          maxW="600px"
        >
          <Img src={logo} w="60%" opacity="100%" />
          <Text color="white" fontSize={"xl"} fontWeight="bold">
            Academia online para mejorar tu futuro profesional como policía
            nacional, tu inglés y ¡mucho más!
          </Text>
        </Stack>
        <SimpleGrid
          columns={{
            base: 2,
            md: 3
          }}
          gap="8"
          width={{
            base: "full",
            lg: "auto",
          }}
        >
          {links.map((group, idx) => (
            <Stack
              key={idx}
              spacing="8"
              minW={{
                lg: "40",
              }}
            >
              <Text fontSize="xl" color="whitesmoke" fontWeight="semibold">
                {group.title}
              </Text>
              <Stack spacing="2" shouldWrapChildren>
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
          &copy; {new Date().getFullYear()} Rocket418, Inc. Todos los derechos
          reservados.
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