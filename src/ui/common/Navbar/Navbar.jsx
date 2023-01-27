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
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { FiUser, FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import logo from "../../../assets/mario.png";
import logo2 from "../../../assets/mario-azul.png";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const [searchTerm, setSearchTerm] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

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

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleSearch() {
    // hacer la función mamahuevos
  }

  return (
    <Box as="section" className={`navbar ${hasScrolled ? "scrolled" : ""}`}>
      <Box as="nav" px="5px">
        <Flex justify="space-between" py="30px">
          <Flex>
            <NavLink to="/">
              {hasScrolled ? (
                <Image
                  src={logo2} // Luisfer: Intentar hacer las dos imagenes del mismo tamaño
                  //          porque al hacer scroll, se nos mueve el input
                  alt="Papi"
                  objectFit="contain"
                  w="180px"
                  h="100%"
                />
              ) : (
                <Image
                  src={logo}
                  alt="Dan Abramov"
                  objectFit="contain"
                  w="180px"
                  h="100%"
                />
              )}
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
    </Box>
  );
};
