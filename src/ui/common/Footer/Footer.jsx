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
  Route,
  Heading,
} from "@chakra-ui/react";
import * as React from "react";
import { FaInstagram } from "react-icons/fa";
import { links } from "./_data";
import logo from "../../../assets/mario.png";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => (
  <Box as="section" w="100%" m="0 auto" bgColor="#121212">
    <Flex
      as="footer"
      role="contentinfo"
      flexDir="column"
      maxW="1440px"
      w="85%"
      m="0 auto"
      // bg="salmon"
    >
      <Stack
        justify="space-around"
        align={{ base: "center" }}
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
        // bg="red"
      >
        <Stack
          align="center"
          spacing={{
            base: "6",
            md: "8",
          }}
          width={{
            base: "100%",
            lg: "50%",
          }}
          fontSize="large"
          h={{ base: "auto", md: "280px" }}
          color="whitesmoke"
        >
          <Flex
            width={{
              base: "45%",
              lg: "80%",
            }}
          >
            <Img src={logo} w="100%" objectFit="contain" opacity="100%" />
          </Flex>

          <Heading fontSize={"xl"} fontWeight="medium">
            Academia online para mejorar tu futuro profesional como policía
            nacional, tu inglés y ¡mucho más!
          </Heading>
          <Link href="/contact">info@uniformeazul.com</Link>
        </Stack>
        <SimpleGrid
          columns={{
            base: 2,
            md: 3,
          }}
          gap="0"
          display="flex"
          justifyContent={"center"}
          width={{
            base: "full",
          }}
          h="280px"
        >
          {links.map((group, idx) => (
            <Stack
              // bg="teal"

              key={idx}
              spacing="8"
              w="100%"
              mt="10px"
              // fontSize=""
            >
              <Heading
                fontSize={{ base: "lg", md: "large" }}
                fontWeight="bold"
                color="whitesmoke"
              >
                {group.title}
              </Heading>
              <Stack
                display={"flex"}
                align={"center"}
                spacing="2"
                shouldWrapChildren
              >
                {group.links.map((link, idx) => {
                  return group.title === "ENLACES" ? (
                    <Button
                      fontSize="large"
                      color="#FFFAF0"
                      key={idx}
                      as="a"
                      variant="link-on-accent"
                      href={link.href}
                      target="_blank"
                    >
                      {link.label}
                    </Button>
                  ) : (
                    <NavLink to={link.href} key={idx}>
                      {link.label}
                    </NavLink>
                  );
                })}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{
          base: "row",
          md: "row",
        }}
        align="center"
        textColor="gray"
      >
        <Heading
          fontSize="sm"
          textColor={"gray"}
          fontWeight="medium"
          textAlign="start"
        >
          &copy; {new Date().getFullYear()} Rocket418, Inc. Todos los derechos
          reservados.
        </Heading>
        <ButtonGroup variant="ghost-on-accent">
          <IconButton
            as="a"
            href="https://www.instagram.com/uniformeazul/"
            target={"_blank"}
            aria-label="Instagram"
            icon={<FaInstagram fontSize="1.6rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Flex>
  </Box>
);
