import {
  //   Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  Image,
  Input,
  Collapse,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiUser, FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/mario.png";
import { /* Link, */ NavLink } from "react-router-dom";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const [searchTerm, setSearchTerm] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleSearch() {
    // hacer la función mamahuevos
  }

  return (
    <Box as="section" w="85%" m="0 auto" color="#23375B" maxWidth="1440px">
      <Box as="nav">
        <Flex justify="space-between" py="30px">
          <Flex bg="salmon">
            <NavLink to="/" >
              <Image src={logo} alt="Dan Abramov" w="200px" objectFit="contain" h="100%"/>
            </NavLink>
          </Flex>
          <HStack>
            {isDesktop && (
              <ButtonGroup spacing="2" p="8px" borderRadius="50px" bg="whitesmoke" m="0 10px">
                <Button
                  as={NavLink}
                  to="/"
                  _focus={{ outline: "none" }}
                  bg="transparent"
                  borderRadius="50px"
                  // _hover={{bg: "none"}}
                  _hover={{
                    bg: "#23375B",
                    color: "white",
                    borderRadius: "50px",
                    // transform: "scale(1.05)"
                  }}
                >
                  Inicio
                </Button>
                <Button
                  as={NavLink}
                  to="/courses"
                  bg="transparent"
                  borderRadius="50px"
                  _hover={{
                    bg: "#23375B",
                    color: "white",
                    borderRadius: "50px",
                    // transform: "scale(1.05)"
                  }}
                >
                  Cursos
                </Button>
                <Button
                  as={NavLink}
                  to="/freetests"
                  bg="transparent"
                  borderRadius="50px"
                  _hover={{
                    bg: "#23375B",
                    color: "white",
                    borderRadius: "50px",
                    // transform: "scale(1.05)"
                  }}
                >
                  Tests Gratis
                </Button>
                <Button
                  as={NavLink}
                  to="/shop"
                  bg="transparent"
                  borderRadius="50px"
                  _hover={{
                    bg: "#23375B",
                    color: "white",
                    borderRadius: "50px",
                    // transform: "scale(1.05)"
                  }}
                >
                  Tienda
                </Button>
                <Button
                  as={NavLink}
                  to="/contact"
                  bg="transparent"
                  borderRadius="50px"
                  _hover={{
                    bg: "#23375B",
                    color: "white",
                    borderRadius: "50px",
                    // transform: "scale(1.05)"
                  }}
                >
                  Contacto
                </Button>
              </ButtonGroup>
            )}
          </HStack>
          {isDesktop ? (
            <HStack spacing="4">
              <ButtonGroup color="white" variant="ghost" spacing="1">
                <Flex>
                  <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="mamahuevos"
                    display={showInput ? "block" : "none"}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                  />
                  <IconButton
                    onClick={() => setShowInput(!showInput)}
                    icon={<FiSearch fontSize="1.25rem" />}
                    aria-label="Search"
                    borderRadius="50px"
                    _hover={{
                    bg: "whitesmoke",
                    color: "#23375B",
                  }}
                  />
                </Flex>
                <IconButton
                  as={NavLink}
                  to="/cart"
                  icon={<FiShoppingCart fontSize="1.25rem" />}
                  aria-label="Cart"
                  borderRadius="50px"
                  _hover={{
                    bg: "whitesmoke",
                    color: "#23375B",
                  }}
                />

                <IconButton
                  as={NavLink}
                  _hover={{
                    bg: "whitesmoke",
                    color: "#23375B",
                  }}
                  // to="/myaccount"  --> Cuando podamos privatizar la ruta con el token
                  to="/login"
                  icon={<FiUser fontSize="1.25rem" />}
                  aria-label="MyAccount"
                  borderRadius="50px"
                />
              </ButtonGroup>
              {/* <Avatar boxSize="10" name="Christoph Winston" src="/* token.user.photo *" /> */}
            </HStack>
          ) : (
            <Box display="flex" position="relative" zIndex="99">
              <Collapse in={isOpen} style={{ position: "absolute", top: "50px", right: "0px" }}>
                <Box
                  display="flex"
                  color="#23375B"
                  alignItems="center"
                  flexDirection="column"
                  bg="whitesmoke"
                  borderRadius="10px"
                  w="220px"
                  h="450px"
                  border="1px solid #23375B"
                >
                  <Flex>
                    <Input
                      value={searchTerm}
                      textAlign="center"
                      m="10px"
                      border="1px solid #23375B"
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar"
                      color="black"
                      // display={showInput ? "block" : "none"}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                        }
                      }}
                    />
                    {/* <IconButton
                    onClick={() => setShowInput(!showInput)}
                    icon={<FiSearch fontSize="1.25rem" />}
                    aria-label="Search"
                    borderRadius="50px"
                  /> */}
                  </Flex>
                  <Button
                    as={NavLink}
                    to="/"
                    bg="transparent"
                    borderRadius="50px"
                    m="10px 0"
                    transition="All 0.0s linear"
                    _hover={{
                      bg: "#23375B",
                      color: "white",
                      p: "6px",
                      w: "90%",
                      borderRadius: "4px",
                      // transform: "scale(1.05)"
                    }}
                  >
                    Inicio
                  </Button>
                  <Button
                    as={NavLink}
                    to="/courses"
                    bg="transparent"
                    borderRadius="50px"
                    m="10px 0"
                    transition="All 0.0s linear"
                    _hover={{
                      bg: "#23375B",
                      color: "white",
                      p: "6px",
                      w: "90%",
                      borderRadius: "4px",
                      // transform: "scale(1.05)"
                    }}
                  >
                    Cursos
                  </Button>
                  <Button
                    as={NavLink}
                    to="/freetests"
                    bg="transparent"
                    borderRadius="50px"
                    m="10px 0"
                    transition="All 0.0s linear"
                    _hover={{
                      bg: "#23375B",
                      color: "white",
                      p: "6px",
                      w: "90%",
                      borderRadius: "4px",
                      // transform: "scale(1.05)"
                    }}
                  >
                    Tests Gratis
                  </Button>
                  <Button
                    as={NavLink}
                    to="/shop"
                    bg="transparent"
                    borderRadius="50px"
                    m="10px 0"
                    transition="All 0.0s linear"
                    _hover={{
                      bg: "#23375B",
                      color: "white",
                      p: "6px",
                      w: "90%",
                      borderRadius: "4px",
                      // transform: "scale(1.05)"
                    }}
                  >
                    Tienda
                  </Button>
                  <Button
                    as={NavLink}
                    to="/contact"
                    bg="transparent"
                    borderRadius="50px"
                    m="10px 0"
                    transition="All 0.0s linear"
                    _hover={{
                      bg: "#23375B",
                      color: "white",
                      p: "6px",
                      w: "90%",
                      borderRadius: "4px",
                      // transform: "scale(1.05)"
                    }}
                  >
                    Contacto
                  </Button>
                  <Button
                    as={NavLink}
                    to="/cart"
                    bg="transparent"
                    borderRadius="50px"
                    m="10px 0"
                    transition="All 0.0s linear"
                    _hover={{
                      bg: "#23375B",
                      color: "white",
                      p: "6px",
                      w: "90%",
                      borderRadius: "4px",
                      // transform: "scale(1.05)"
                    }}
                  >
                    Carrito
                  </Button>
                  <Button
                    as={NavLink}
                    to="/login"
                    bg="transparent"
                    borderRadius="50px"
                    m="10px 0"
                    transition="All 0.0s linear"
                    _hover={{
                      bg: "#23375B",
                      color: "white",
                      p: "6px",
                      w: "90%",
                      borderRadius: "4px",
                      // transform: "scale(1.05)"
                    }}
                  >
                    Mi cuenta
                  </Button>
                </Box>
              </Collapse>
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
                relative
                bg="white"
                onClick={() => setIsOpen(!isOpen)}
              />
            </Box>
          )}
        </Flex>
      </Box>
      <Divider
        borderColor="#2a3d60" /*He puesto un divider para probar cómo quedaría al ser navbar, main y footer del mismo color. Yago */
      />
    </Box>
  );
};
