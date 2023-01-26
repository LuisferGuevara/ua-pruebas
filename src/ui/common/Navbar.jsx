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
import React, { useState } from "react";
import { FiUser, FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/mario.png";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const [searchTerm, setSearchTerm] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleSearch() {
    // hacer la función mamahuevos
  }

  return (
    <Box as="section" w="85%" m="0 auto" color="#23375B">
      <Box as="nav">
        <Flex justify="space-between" py="30px">
          <HStack>
            <Image src={logo} alt="Dan Abramov" />
          </HStack>
          <HStack>
            {isDesktop && (
              <ButtonGroup
                spacing="2"
                p="8px"
                borderRadius="50px"
                bg="whitesmoke"
              >
                <Button
                  as={NavLink}
                  to="/"
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
                  />
                </Flex>
                <IconButton
                  as={NavLink}
                  to="/cart"
                  icon={<FiShoppingCart fontSize="1.25rem" />}
                  aria-label="Cart"
                  borderRadius="50px"
                />

                <IconButton
                  as={NavLink}
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
            <Box display="flex" position="relative">
              <Collapse
                in={isOpen}
                zIndex="9999"
                style={{ position: "absolute", top: "0px", right: "50px" }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  bg="whitesmoke"
                  borderRadius="10px"
                >
                  <Button>Option 1</Button>
                  <Button>Option 2</Button>
                  <Button>Option 3</Button>
                  <Button>Option 1</Button>
                  <Button>Option 2</Button>
                  <Button>Option 3</Button>
                  <Button>Option 1</Button>
                  <Button>Option 2</Button>
                  <Button>Option 3</Button>
                </Box>
              </Collapse>
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
                relative
                onClick={() => setIsOpen(!isOpen)}
              />
            </Box>
          )}
        </Flex>
      </Box>
    </Box>
  );
};
