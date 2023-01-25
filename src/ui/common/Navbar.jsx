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
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiUser, FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/mario.png";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const [searchTerm, setSearchTerm] = useState("");
  const [showInput, setShowInput] = useState(false);

  function handleSearch() {
    // hacer la función mamahuevos
  }

  return (
    <Box as="section" w="85%" m="0 auto">
      <Box as="nav">
        <Flex justify="space-between" py="30px">
          <HStack>
            <Image src={logo} alt="Dan Abramov" />
          </HStack>
          <HStack>
            {isDesktop && (
              <ButtonGroup spacing="2" p="8px" borderRadius="50px" bg="whitesmoke">
                <Button as={NavLink} to="/">
                  Inicio
                </Button>
                <Button as={NavLink} to="/courses">
                  Cursos
                </Button>
                <Button as={NavLink} to="/freetests">
                  Tests Gratis
                </Button>
                <Button as={NavLink} to="/shop">
                  Tienda
                </Button>
                <Button as={NavLink} to="/contact">
                  Contacto
                </Button>
              </ButtonGroup>
            )}
          </HStack>
          {isDesktop ? (
            <HStack spacing="4">
              <ButtonGroup color="white" variant="ghost" spacing="1">
                <IconButton
                  onClick={() => setShowInput(!showInput)}
                  icon={<FiSearch fontSize="1.25rem" />}
                  aria-label="Search"
                />
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
                  as={NavLink}
                  to="/cart"
                  icon={<FiShoppingCart fontSize="1.25rem" />}
                  aria-label="Cart"
                />

                <IconButton
                  as={NavLink}
                  // to="/myaccount"  --> Cuando podamos privatizar la ruta con el token
                  to="/login"
                  icon={<FiUser fontSize="1.25rem" />}
                  aria-label="MyAccount"
                />
              </ButtonGroup>
              {/* <Avatar boxSize="10" name="Christoph Winston" src="/* token.user.photo *" /> */}
            </HStack>
          ) : (
            <IconButton
              variant="ghost"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
            />
          )}
        </Flex>
      </Box>
      <Divider borderColor="bg-accent-subtle" /*He puesto un divider para probar cómo quedaría al ser navbar, main y footer del mismo color. Yago */ />
    </Box>
  );
};
