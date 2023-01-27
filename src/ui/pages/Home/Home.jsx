import React from 'react'
import { Box, Center, DarkMode, Flex, Heading, Stack, Text, ButtonGroup, Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex>
   <Box>
   <Heading
   >BIENVENID@S</Heading>
   <Text>Prepárate para mejorar tu escalafón</Text>
   <Text>
    En Uniforme Azul te queremos ayudar con nuestros cursos de exámenes
    tipo test, libros de resúmenes, esquemas y exámenes tipo test en papel
   </Text>
   </Box>
   <ButtonGroup display="flex" flexDirection="column" gap="5px">
    <Button>
      Asistente
    </Button>
    <Button>
      Acceder a los cursos
    </Button>
    <Button>
      Acceder a la tienda
    </Button>
   </ButtonGroup>
   </Flex>
  )
}

export default Home
