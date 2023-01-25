import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    SimpleGrid,
    Stack,
    Flex,
    Text,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
  import { Logo } from './Logo'
  import { links } from './_data'
  
  export const Footer = () => (
      <Box>
      <Box>
        <Stack
            spacing={{
              base: '6',
              md: '8',
            }}
            align="start"
          >
            <Logo />
            <Text fontSize="lg" fontWeight="bold" color="white" >Uniforme Azul</Text>
            <Text color="white">Academia online para mejorar tu futuro profesional como policía nacional, tu inglés y ¡mucho más!</Text>
          </Stack>
      </Box>
      <Box as="footer" role="contentinfo" bg="#121212" w="100%" m="0 auto">
        <Stack
          justify="space-between"
          align="center"
          direction={{
            base: 'column',
            lg: 'column',
          }}
          py={{
            base: '12',
            md: '16',
          }}
          spacing="8"
        >
          <SimpleGrid
            columns={{
              base: 2,
              md: 4,
            }}
            gap="8"
            width={{
              base: 'full',
              lg: 'auto',
            }}
          >
            {links.map((group, idx) => (
              <Stack display="flex"
                key={idx}
                spacing="4"
                minW={{
                  lg: '40',
                }}
              >
                <Text fontSize="sm" fontWeight="semibold" color="white">
                  {group.title}
                </Text>
                <Stack spacing="3" 
                shouldWrapChildren
                direction={{
                    base: 'column',
                    md: 'column',
                  }}
                
                >
                  {group.links.map((link, idx) => (
                    <Button key={idx} 
                    as="a" variant="link" 
                    href={link.href}
                    color="white"
                    direction={{
                        base: 'column',
                        lg: 'column',
                        md: 'column',
                      }}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
        <Divider />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{
            base: 'column-reverse',
            md: 'row',
          }}
          align="center"
        >
          <Text fontSize="sm" color="white">
            &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
          </Text>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Box>
      </Box>

  )