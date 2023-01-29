import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  StackDivider,
  Text,
  Textarea,
} from '@chakra-ui/react'
import AddressOptions from './AddressOptions'
import ProvincesOptions from './CitiesOptions'
import { Dropzone } from './Dropzone'

export const MyAccount = () => (
 
  <Container maxW='60%'
    m='auto'
    py={{
      base: '4',
      md: '8',
    }}
    
  >
    <Stack spacing="5">
      <Stack
        spacing="4"
        direction={{
          base: 'column',
          sm: 'row',
        }}
        justify="space-between"
      >
        <Box>
          <Text fontSize="40px" fontWeight="medium">
            Mi perfil
          </Text>
          <Text color="" fontSize="m">
            El camino a la gloria.
          </Text>
        </Box>
        <Button variant="primary" alignSelf="start">
          Guardar cambios
        </Button>
      </Stack>
      <Divider />
      <Stack spacing="5" divider={<StackDivider />}>
        <FormControl id="name">
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '1.5',
              md: '8',
            }}
            justify="space-between"
          >
            <FormLabel variant="inline">Nombre</FormLabel>
            <Input
              maxW={{
                md: '3xl',
              }}
              defaultValue="Mario"
              bg="gray.700"
            />
            <FormLabel variant="inline">Apellidos</FormLabel>
            <Input
              maxW={{
                md: '3xl',
              }}
              defaultValue="Galletas de Chocolate"
              bg="gray.700"
            />
          </Stack>
        </FormControl>
        <FormControl id="address">
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '1.5',
              md: '8',
            }}
            justify="space-between"
          >
            <Text color="white !important" fontWeight='semibold'>
              Dirección
            </Text>
            <FormLabel variant="inline">Tipo de vía</FormLabel>
            <AddressOptions />
            <Input
              maxW={{
                md: '3xl',
              }}
              defaultValue="C/Mamahuevo"
              bg="gray.700"
            />
            <FormLabel variant="inline">Nº</FormLabel>
            <Input
              maxW={{
                md: '3xl',
              }}
              defaultValue="10"
              bg="gray.700"
            />
            <FormLabel variant="inline">Piso</FormLabel>
            <Input
              maxW={{
                md: '3xl',
              }}
              defaultValue="3ºG"
              bg="gray.700"
            />
            </Stack>
            <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '1.5',
              md: '8',
            }}
            justify="space-between"
          >
            <FormLabel variant="inline">CP:</FormLabel>
            <Input
              maxW={{
                md: '3xl',
              }}
              defaultValue="15009"
              bg="gray.700"
            />
            <FormLabel variant="inline">Localidad</FormLabel>
            <Input
              maxW={{
                md: '3xl',
              }}
              defaultValue="Cuspedriños"
              bg="gray.700"
            />
            <FormLabel variant="inline">Provincia</FormLabel>
            <ProvincesOptions />
          </Stack>
        </FormControl>
        <FormControl id="email">
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '1.5',
              md: '8',
            }}
            justify="space-between"
          >
            <FormLabel variant="inline">Email</FormLabel>
            <Input
              type="email"
              maxW={{
                md: '3xl',
              }}
              defaultValue="chris@chakra-ui.com"
              bg="gray.700"
            />
          </Stack>

        </FormControl>
        <FormControl id="picture">
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '1.5',
              md: '8',
            }}
            justify="space-between"
          >
            <FormLabel variant="inline">Foto</FormLabel>
            <Stack
              spacing={{
                base: '3',
                md: '5',
              }}
              direction={{
                base: 'column',
                sm: 'row',
              }}
              width="full"
              maxW={{
                md: '3xl',
              }}
            >
              <Avatar size="lg" name="Christoph Winston" src="https://tinyurl.com/yhkm2ek8" />
              <Dropzone width="full" />
            </Stack>
          </Stack>
        </FormControl>
        <FormControl id="website">
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '1.5',
              md: '8',
            }}
            justify="space-between"
          >
            <FormLabel variant="inline">Website</FormLabel>
            <InputGroup
              maxW={{
                md: '3xl',
              }}
            >
              <InputLeftAddon>https://</InputLeftAddon>
              <Input defaultValue="www.chakra-ui.com" />
            </InputGroup>
          </Stack>
        </FormControl>
        <FormControl id="bio">
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '1.5',
              md: '8',
            }}
            justify="space-between"
          >
            <Box>
              <FormLabel variant="inline">Bio</FormLabel>
              <FormHelperText mt="0" color="muted">
                Write a short introduction about you
              </FormHelperText>
            </Box>
            <Textarea
              maxW={{
                md: '3xl',
              }}
              rows={5}
              resize="none"
            />
          </Stack>
        </FormControl>

        <Flex direction="row-reverse">
          <Button variant="primary">Guardar cambios</Button>
        </Flex>
      </Stack>
    </Stack>
  </Container>
)
export default MyAccount