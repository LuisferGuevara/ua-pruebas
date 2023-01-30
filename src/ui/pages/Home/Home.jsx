import React from "react";
import { FaRobot } from "react-icons/fa";
import { FiBox, FiClipboard, FiHelpCircle, FiSettings } from "react-icons/fi";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  ButtonGroup,
  Button,
  Icon,
  Grid,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Box m="100px">
        <Flex>
          <Box>
            <Heading fontSize={50} letterSpacing={3}>
              BIENVENID@S
            </Heading>
            <Text m="80px 0 20px 0">Prepárate para mejorar tu escalafón</Text>
            <Text>
              En Uniforme Azul te queremos ayudar con nuestros cursos de
              exámenes tipo test, libros de resúmenes, esquemas y exámenes tipo
              test en papel
            </Text>
          </Box>
          <Box>
            <ButtonGroup display="flex" flexDirection="column"  alignItems="center" gap="30px">
              <Button
                p={7}
                w="100%"
                bg="#ffffffc4"
                color="#23375b"
                justifyContent="space-around"
                _hover={{
                  bg: "white",
                  transform:"scale(1.1)",
                  transition:"transform 500ms"
                }}
                
              >
                {<FaRobot fontSize="1.6rem" />} Asistente
              </Button>
              <Button
                as={NavLink}
                to="/courses"
                p={7}
                w="100%"
                bg="#ffffffc4"
                color="#23375b"
                justifyContent="space-around"
                _hover={{
                  bg: "white",
                  transform:"scale(1.1)",
                  transition:"transform 500ms"
                }}
              >
                Acceder a los cursos
              </Button>
              <Button
                as={NavLink}
                to="/shop"
                p={7}
                w="100%"
                bg="#ffffffc4"
                color="#23375b"
                justifyContent="space-around"
                _hover={{
                  bg: "white",
                  transform:"scale(1.1)",
                  transition:"transform 500ms"
                }}
              >
                Acceder a la tienda
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
      </Box>
      <Box bg="#ffffff4e" m="100px" p={7} borderRadius="20px">
        <Heading fontSize={20}>NUESTRA DIFERENCIA</Heading>
        <Grid templateColumns="1fr 1fr" gap={10} p="50px">
          <Flex
            bg="#215DBB"
            height="120px"
            alignItems="center"
            justifyContent="space-evenly"
            borderRadius="0 50px 0 50px"
          >
            <FiSettings fontSize="3rem" />
            <Heading fontSize={18}>Experiencia Propia</Heading>
          </Flex>
          <Flex
            bg="#602080"
            alignItems="center"
            justifyContent="space-evenly"
            borderRadius="50px 0 50px 0"
          >
            <FiHelpCircle fontSize="3rem" />
            <Heading fontSize={18}>Ayuda Online</Heading>
          </Flex>
          <Flex
            bg="#602080"
            height="120px"
            alignItems="center"
            justifyContent="space-evenly"
            borderRadius="50px 0 50px 0"
          >
            <FiClipboard fontSize="3rem" />
            <Heading fontSize={18}>Esquemas Clave</Heading>
          </Flex>
          <Flex
            bg="#215DBB"
            alignItems="center"
            justifyContent="space-evenly"
            borderRadius="0 50px 0 50px"
          >
            <FiBox fontSize="3rem" />
            <Heading fontSize={18}>Material Pre Ávila</Heading>
          </Flex>
        </Grid>
      </Box>
      <Box
        bg="#ffffffc4"
        m="100px 200px"
        p={10}
        spacing="5px"
        borderRadius="25px"
      >
        <Heading fontSize={20} color="#23375b">
          ¿ ALGUNA DUDA O CONSULTA ?
        </Heading>
        <Text color="whitesmoke" my={10}>
          No dudes en llamarnos o escribirnos. Estaremos encantados de ayudarte.
        </Text>
        <Button
          as={NavLink}
          to="/contact"
          bg="whitesmoke"
          color="#23375b"
          border="solid 1px #23375b"
          _hover={{ color: "whitesmoke", bg: "#23375b",  transform:"scale(1.05)",
                  transition:"transform 500ms"}}
        >
          CONTACTO
        </Button>
      </Box>
      <Stack paddingX={100} mb="100px">
        <Heading>OPINIONES</Heading>
        <Box bg="#23375b" border="1px" borderRadius="20px" p={6}>
          <Text>Material y Tests realmente fantástico</Text>
        </Box>
        <Box>
          <Icon></Icon>
          <Text>"Paquito"</Text>
        </Box>
        <Box></Box> {/* Función para que cambiando el resultado */}
      </Stack>
    </Box>
  );
};

export default Home;
