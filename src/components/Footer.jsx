import { Avatar, Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"}
        color={"whiteAlpha.700"}
        minH={"48"}
        px={"16"}
        py={["16","8"]}    
    >
            <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
                <VStack w={"full"} alignItems={["center","flex-start"]}>
                    <Text fontWeight={"bold"}>About Us</Text>
                    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>
                        Best Crypto Trading App In India
                    </Text>
                </VStack>
                <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                <Button variant={'link'} colorScheme={'whiteAlpha'}>
                    <a target={'blank'} href="https://linkedln.com/shubhamkumaragarwal2/">Linkedln</a>
                </Button>
                <Button variant={'link'} colorScheme={'whiteAlpha'}>
                    <a target={'blank'} href="https://leetcode.com/shubhamkumaragarwal2/">leetcode</a>
                </Button>
                <Button variant={'link'} colorScheme={'whiteAlpha'}>
                    <a target={'blank'} href="https://github.com/shubhamkumaragarwal2/">Github</a>
                </Button>
            </VStack>
                <VStack w={"full"} alignItems={["center","flex-end"]}>
                    <Avatar boxSize={"28"} mt={["4","0"]} />
                    <Text>Shubham Kumar Agarwal</Text>
                    <Text>Founder</Text>
                </VStack>
            </Stack>
    </Box>
  )
}

export default Footer
