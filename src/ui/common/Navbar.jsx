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
} from "@chakra-ui/react";
import * as React from "react";
import { FiUser, FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/logoUA2.png";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
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
                <NavLink route="/">Inicio</NavLink>
                <Button>Cursos</Button>
                <Button>Test Gratis</Button>
                <Button>Tienda</Button>
                <Button>Contacto</Button>
              </ButtonGroup>
            )}
          </HStack>
          {isDesktop ? (
            <HStack spacing="4">
              <ButtonGroup color="white" variant="ghost" spacing="1">
                <IconButton icon={<FiSearch fontSize="1.25rem" />} aria-label="Search" />
                <IconButton icon={<FiShoppingCart fontSize="1.25rem" />} aria-label="Settings" />
                <IconButton icon={<FiUser fontSize="1.25rem" />} aria-label="Help Center" />
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
    </Box>
  );
};
