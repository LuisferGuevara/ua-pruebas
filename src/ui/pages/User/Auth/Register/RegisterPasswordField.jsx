import {
    FormErrorMessage,
    FormControl,
    FormHelperText,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useDisclosure,
    useMergeRefs,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { HiEye, HiEyeOff } from 'react-icons/hi'
  import { useForm } from "react-hook-form";
  
  export const RegisterPasswordField = React.forwardRef((/* props, */ register, ref) => {
    const { isOpen, onToggle } = useDisclosure()
    const inputRef = React.useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)
    const {watch, formState : { errors } } = useForm();
    const onClickReveal = () => {
      onToggle()
      if (inputRef.current) {
        inputRef.current.focus({
          preventScroll: true,
        })
      }
    }
    return (
          <FormControl>
        <FormControl isRequired isInvalid={errors.password}>
        <FormLabel htmlFor="password" color="#23375B">Contraseña</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="link"
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
              color="#23375B"
            />
          </InputRightElement>
          <Input
          
            id="password"
            ref={mergeRef}
            name="password"
            placeholder='Introduce tu contraseña'
            color="#23375B"
            type={isOpen ? 'text' : 'password'}
            // required
            // {...props}
            bg="gray.100"
            {...register("password", {
                required: "Este campo es requerido",
                pattern: {
                 value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                 message:
                   "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y una mayúscula",
               },
             })}
             focusBordercolor="primary.300"
          />
        </InputGroup>
        <FormHelperText color="#23375B" align="start">
                  La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una
                  minúscula y una mayúscula
                </FormHelperText>
                <FormErrorMessage>{errors.password && errors.password?.message}</FormErrorMessage>
      </FormControl>
      { <FormControl isRequired isInvalid={errors.confirm_password}>
       <FormLabel color="#23375B" htmlFor="confirm_password">
         Confirma tu contraseña
       </FormLabel>
       <InputGroup>
       <InputRightElement>
            <IconButton
              variant="link"
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
              color="#23375B"
            />
          </InputRightElement>
         <Input
         bg="gray.100"
         id="password"
         ref={mergeRef}
         type={isOpen ? 'text' : 'password'}
         {...register("confirm_password", {
           required: "Este campo es requerido",
           validate: (val) => {
             if (watch("password") !== val) {
               return "La contraseña de verificación no coincide";
             }
           },
         })}
         focusBordercolor="primary.300"
         />
         </InputGroup>
       <FormHelperText color="#23375B" align="start">
         Confirmar contraseña
       </FormHelperText>
       <FormErrorMessage>
         {errors.confirm_password && errors.confirm_password?.message}
       </FormErrorMessage>
     
     </FormControl>}
     </FormControl>
    )
  })
  RegisterPasswordField.displayName = 'RegisterPasswordField'