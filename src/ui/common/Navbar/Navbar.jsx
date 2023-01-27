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
import React, { useState, useEffect, useRef } from "react";
import { FiUser, FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import logo from "../../../assets/mario.png";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const [searchTerm, setSearchTerm] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleSearch() {
    // hacer la función mamahuevos
  }

  return (

    <Box
      as="section"
      w="85%"
      h="150px"
      m="0 auto"
      color="#23375B"
      maxWidth="1440px"
    >

      <Box as="nav">
        <Flex justify="space-between" py="30px">
          <Flex>
            <NavLink to="/">
              <Image
                src={logo}
                alt="Dan Abramov"
                objectFit="contain"
                w="180px"
                h="100%"
              />
            </NavLink>
          </Flex>
          <HStack className="navigation--navbar">
            {isDesktop && (
              <ButtonGroup className="button--group">
                <Button as={NavLink} to="/" className="button">

                  Inicio
                </Button>
                <Button as={NavLink} to="/courses" className="button">
                  Cursos
                </Button>
                <Button as={NavLink} to="/freetests" className="button">
                  Tests Gratis
                </Button>
                <Button as={NavLink} to="/shop" className="button">
                  Tienda
                </Button>
                <Button as={NavLink} to="/contact" className="button">
                  Contacto
                </Button>
              </ButtonGroup>
            )}
          </HStack>
          {isDesktop ? (
            <HStack spacing="4" className="navigation--icons">
              <ButtonGroup color="white" variant="ghost" spacing="1">
                <Flex flexDirection="column">
                  <IconButton
                    onClick={() => setShowInput(!showInput)}
                    icon={<FiSearch fontSize="1.25rem" />}
                    className="icon"
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
                  className="icon"
                />
                <IconButton
                  as={NavLink}
                  // to="/myaccount"  --> Cuando podamos privatizar la ruta con el token
                  to="/login"
                  icon={<FiUser fontSize="1.25rem" />}
                  className="icon"
                />
              </ButtonGroup>
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input"
                placeholder="Buscar..."
                display={showInput ? "block" : "none"}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              {/* <Avatar boxSize="10" name="Christoph Winston" src="/* token.user.photo *" /> */}
            </HStack>
          ) : (
            <Box display="flex" position="relative" zIndex="99">
              <Collapse
                in={isOpen}
                style={{ position: "absolute", top: "100px", right: "0" }}
              >
                <Box className="hamburger--menu">
                  {/* <Flex>
                    <Input
                      value={searchTerm}
                      className="input"
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar.."
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
                  />
                  </Flex> */}
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={NavLink}
                    to="/"
                    className="button"
                  >
                    Inicio
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={NavLink}
                    to="/courses"
                    className="button"
                  >
                    Cursos
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={NavLink}
                    to="/freetests"
                    className="button"
                  >
                    Tests Gratis
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={NavLink}
                    to="/shop"
                    className="button"
                  >
                    Tienda
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={NavLink}
                    to="/contact"
                    className="button"
                  >
                    Contacto
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={NavLink}
                    to="/cart"
                    className="button"
                  >
                    Carrito
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={NavLink}
                    to="/login"
                    className="button"
                  >
                    Mi cuenta
                  </Button>
                </Box>
              </Collapse>
              <Box className="icons--hamburguer--menu">
                <Flex>
                  <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar..."
                    className="input"
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
                    variant="ghost"
                    color="whitesmoke"
                  />
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  onClick={() => setIsOpen(!isOpen)}
                  ref={menuRef}
                />
                </Flex>
              </Box>
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
