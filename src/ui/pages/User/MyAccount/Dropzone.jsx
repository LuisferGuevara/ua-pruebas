import {
    Button,
    Center,
    HStack,
    Icon,
    Square,
    Text,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react'
  import { FiUploadCloud } from 'react-icons/fi'
  
  export const Dropzone = (props) => (
    <Center
      borderWidth="1px"
      borderRadius="lg"
      px="6"
      py="4"
      bg={useColorModeValue('white', 'gray.700')}
      {...props}
    >
      <VStack spacing="3">
        <Square size="10" bg="bg-subtle" borderRadius="lg">
          <Icon as={FiUploadCloud} boxSize="5" color="muted" />
        </Square>
        <VStack spacing="1">
          <HStack spacing="1" whiteSpace="nowrap">
            <Button variant="link" colorScheme="blue" size="sm">
              Subir archivo
            </Button>
            <Text fontSize="sm" color="muted">
              o arrastra y suelta
            </Text>
          </HStack>
          <Text fontSize="xs" color="muted">
            PNG, JPG hasta XMB
          </Text>
        </VStack>
      </VStack>
    </Center>
  )