import {
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export const PasswordField = () => {
  const [isHidden, setIsHidden] = useState();

  return (
    <FormControl>
      <InputGroup>
        <InputRightElement>
          <IconButton
            onClick={() => setIsHidden(!isHidden)}
            color="white"
            bg="transparent"
            icon={isHidden ? <HiEyeOff /> : <HiEye />}
          >
            {isHidden ? "Mostrar contraseñas" : "Ocultar contraseñas"}
          </IconButton>
        </InputRightElement>
        <Input
          id="password"
          type={isHidden ? "password" : "text"}
          maxW={{ md: "xl" }}
        />
      </InputGroup>
    </FormControl>
  );
};
