import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  // FormHelperText,
  FormLabel,
  Input,
  // InputLeftAddon,
  Stack,
  StackDivider,
  Text,
  // Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
// import { Form } from 'react-router-dom'
import AddressOptions from "./AddressOptions";
import ProvincesOptions from "./ProvinceOptions";
import { Dropzone } from "./Dropzone";
import { PasswordField } from "./PasswordField";

const MyAccount = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [floor, setFloor] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se enviarían los datos modificados a alguna API o se guardarían en algún lugar
  };

  return (
    <Container
      maxW="60%"
      m="auto"
      bg="gray.700"
      bgopacity="25%"
      border="1px solid white"
      borderRadius={"15px"}
      mb="20px"
      py={{
        base: "4",
        md: "8",
      }}
    >
      <Stack spacing="5" onSubmit={handleSubmit}>
        <Stack
          spacing="4"
          direction={{
            base: "column",
            sm: "row",
          }}
          justify="space-between"
        >
          <Box>
            <Text color="white !important" fontSize="40px" fontWeight="medium">
              Mi perfil
            </Text>
            <Text color="white !important" fontSize="m">
              El camino a la gloria.
            </Text>
          </Box>
         <Avatar 
         size="lg"
         name={name}
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleRbucUSxE5ZRnmp4dEHrxvkhK-3WPZ7ObQ&usqp=CAU"/>
        </Stack>
        <Divider />
        <Stack spacing="5" divider={<StackDivider />}>
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            spacing={{
              base: "1.5",
              md: "8",
            }}
            justify="space-between"
          >
            <Text color="white !important" fontWeight="semibold">
              Datos personales
            </Text>
            <FormControl id="name">
              <FormLabel variant="inline">Nombre</FormLabel>
              <Input
                maxW={{ md: "3xl" }}
                // defaultValue="Mario"
                value={name} //user.name o lo que sea
                onChange={(e) => setName(e.target.value)}
                bg="gray.700"
              />
            </FormControl>
            <FormControl id="lastName">
              <FormLabel variant="inline">Apellidos</FormLabel>
              <Input
                maxW={{ md: "3xl" }}
                // defaultValue="Galletas de Chocolate"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                bg="gray.700"
              />
            </FormControl>
          </Stack>
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            spacing={{
              base: "1.5",
              md: "8",
            }}
            justify="space-between"
          >
            <Text color="white !important" fontWeight="semibold">
              Dirección
            </Text>

            <Stack>
              <Stack
                direction={{
                  base: "row",
                }}
                justify="space-between"
              >
                <FormControl id="address">
                  <FormLabel variant="inline">Tipo de vía</FormLabel>
                  <AddressOptions />
                  <Input
                    maxW={{
                      md: "lg",
                    }}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    bg="gray.700"
                  />
                </FormControl>
                <FormControl id="number" style={{maxWidth:'80px'}}>
                  <FormLabel variant="inline">Nº</FormLabel>
                  <Input
                    maxW={{
                      md: "xs",
                    }}
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    bg="gray.700"
                  />
                </FormControl>
                <FormControl id="floor" style={{maxWidth:'80px'}}>
                  <FormLabel variant="inline">Piso</FormLabel>
                  <Input
                    maxW={{
                      md: "3xl",
                    }}
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                    bg="gray.700"
                    
                  />
                </FormControl>
              </Stack>
              <Stack
                direction={{
                  base: "row",
                }}
                justify="space-between"
              >
                <FormControl id="postalCode" style={{maxWidth:'80px'}}>
                  <FormLabel variant="inline">CP:</FormLabel>
                  <Input
                    maxW={{
                      md: "3xl",
                    }}
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    bg="gray.700"
                  />
                </FormControl>
                <FormControl id="city">
                  <FormLabel variant="inline">Localidad</FormLabel>
                  <Input
                    maxW={{
                      md: "3xl",
                    }}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    bg="gray.700"
                  />
                </FormControl>
                <FormControl id="province">
                  <FormLabel variant="inline">Provincia</FormLabel>
                  <ProvincesOptions
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                  />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            spacing={{
              base: "1.5",
              md: "8",
            }}
            justify="space-between"
          >
            <Text color="white !important" fontWeight="semibold">
              Email y contraseña
            </Text>

            <FormControl id="email">
              <FormLabel variant="inline">Email</FormLabel>
              <Input
                type="email"
                maxW={{
                  md: "3xl",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="gray.700"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel variant="inline">Contraseña</FormLabel>
              <PasswordField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </Stack>

          <FormControl id="picture">
            <Stack
              direction={{
                base: "column",
                md: "row",
              }}
              spacing={{
                base: "1.5",
                md: "8",
              }}
              justify="space-between"
            >
              <FormLabel variant="inline">Foto</FormLabel>
              <Stack
                spacing={{
                  base: "3",
                  md: "5",
                }}
                direction={{
                  base: "column",
                  sm: "row",
                }}
                width="full"
                maxW={{
                  md: "3xl",
                }}
              >
                <Avatar /* --> GESTIONAR CAMBIO DE AVATAR <-- */
                  size="xl"
                  name={name}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleRbucUSxE5ZRnmp4dEHrxvkhK-3WPZ7ObQ&usqp=CAU"
                />
                <Dropzone width="full" />
              </Stack>
            </Stack>
          </FormControl>
          <Flex direction="row-reverse">
            <Button variant="primary" type="submit">Guardar cambios</Button>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
};
export default MyAccount;
