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
import React, { useState, useEffect } from "react";
import { FiUser, FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import logo from "../../../assets/mario.png";
import { /* Link, */ NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const [searchTerm, setSearchTerm] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   setIsOpen(false);
  // }, [pathname]);

  function handleSearch() {
    // hacer la función mamahuevos
  }

  return (
    <Box as="section" w="85%" m="0 auto" maxWidth="1440px" color="#23375B">
      <Box as="nav">
        <Flex justify="space-between" py="30px">
          <Flex>
            <NavLink to="/">
              <Image src={logo} alt="Dan Abramov" w="200px" objectFit="contain" h="100%" />
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
                  _hover={{
                    borderRadius: "50px",
                    bg: "#23375B",
                    color: "white",
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
                <Flex flexDirection="column">
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
                  {/* <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar..."
                    display={showInput ? "block" : "none"}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                  /> */}
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

                  // to="/myaccount"  --> Cuando podamos privatizar la ruta con el token
                  to="/login"
                  icon={<FiUser fontSize="1.25rem" />}
                  aria-label="MyAccount"
                  borderRadius="50px"
                  _hover={{
                    bg: "whitesmoke",
                    color: "#23375B",
                  }}
                />
              </ButtonGroup>
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Buscar..."
                display={showInput ? "block" : "none"}
                position="absolute"
                top="95px"
                right={"90px"}
                width="300px"
              />
              {/* <Avatar boxSize="10" name="Christoph Winston" src="/* token.user.photo *" /> */}
            </HStack>
          ) : (
            <Box display="flex" position="relative" zIndex="99">
              <Collapse in={isOpen} style={{ position: "absolute", top: "90px", right: "0" }}>
                <Box
                  // in={isOpen ? "block" : "none"}
                  display="flex"                 
                  alignItems="center"
                  flexDirection="column"
                  pt="5%"
                  // w="220px"
                  // minW="365px"
                  width="85vw"
                  // h="450px"
                  h="58vh"
                  bg="whitesmoke"
                  borderRadius="10px"
                  border="1px solid #23375B"
                  color="#23375B"
                >
                  <Flex>
                    <Input
                      value={searchTerm}
                       onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                        }
                      }}
                      textAlign="center"
                      m="10px"
                      w="200%"
                      border="1px solid #23375B"
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar"
                      color="black"
                      // display={showInput ? "block" : "none"}
                     
                    />
                    {/* <IconButton
                    onClick={() => setShowInput(!showInput)}
                    icon={<FiSearch fontSize="1.25rem" />}
                    aria-label="Search"
                    borderRadius="50px"
                  /> */}
                  </Flex>
                  <Button
                    onClick={() => setIsOpen(false)}
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
                    onClick={() => setIsOpen(false)}
                    as={NavLink}
                    to="/courses"
                    bg="transparent"
                    borderRadius="50px"
                    m="10px 0"
                    transition="All 0.0s linear"
                    _hover={{                     
                      p: "6px",
                      w: "90%",
                      borderRadius: "4px",
                      bg: "#23375B",
                      color: "white",
                      // transform: "scale(1.05)"
                    }}
                  >
                    Cursos
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={NavLink}
                    to="/freetests"
                    bg="transparent"
                    borderRadius="50px"
                    m="10px 0"
                    transition="All 0.0s linear"
                    _hover={{
                      p: "6px",
                      w: "90%",
                      borderRadius: "4px",
                      bg: "#23375B",
                      color: "white",                     
                      // transform: "scale(1.05)"
                    }}
                  >
                    Tests Gratis
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={NavLink}
                    to="/shop"                    
                    borderRadius="50px"
                    m="10px 0"
                    transition="All 0.0s linear"
                    bg="transparent"
                    _hover={{
                      p: "6px",
                      w: "90%",
                      borderRadius: "4px",
                      bg: "#23375B",
                      color: "white",
                      // transform: "scale(1.05)"
                    }}
                  >
                    Tienda
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={NavLink}
                    to="/contact"
                    m="10px 0"
                    transition="All 0.0s linear"
                    borderRadius="50px"
                    bg="transparent"
                    _hover={{
                      p: "6px",
                      w: "90%",
                      borderRadius: "4px",
                      bg: "#23375B",
                      color: "white",
                      // transform: "scale(1.05)"
                    }}
                  >
                    Contacto
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={NavLink}
                    to="/cart"                  
                    m="10px 0"
                    transition="All 0.0s linear"
                    borderRadius="50px"
                    bg="transparent"
                    _hover={{
                      p: "6px",
                      w: "90%",
                      borderRadius: "4px",
                      bg: "#23375B",
                      color: "white",
                      // transform: "scale(1.05)"
                    }}
                  >
                    Carrito
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={NavLink}
                    to="/login"
                    m="10px 0"
                    bg="transparent"
                    borderRadius="50px"
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
