import { Box, Flex,  Heading,  Icon,  Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react'
import {DiCodeigniter,DiAndroid,DiWebplatform} from 'react-icons/di'


const Profile = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex direction={isNotSmallerScreen ? "row":"column"} w="100%" maxWidth={{base:"100vh",md:"130vh" ,lq:"130vh",xl:"130vh"  }}>
    <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
            0+
        </Heading>

        <Text fontSize="2xl" color="gray.400">Years of Experience</Text>

    </Box >
    <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">Product Designer and Developer,Specialized in Deployment AWS &Firebase</Text>
        <Flex direction={isNotSmallerScreen ? "row":"column"} mt={8} >
          <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="40vh" w="40vh" justify="flex-end">
          < Icon color="white" p="4" as={DiAndroid} w="20" h="20"/>
          <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
            Android Apps
          </Text>
        </Flex>

        <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen?4:0} bg="gray.100" h="40vh" w="40vh" justify="flex-end" _hover={{bg:"teal.400"}} >
          < Icon color="black" p="4" as={DiCodeigniter} w="20" h="20"/>
          <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
             Code
          </Text>
        </Flex>

        <Flex rounded="xl" direction="column" mt={4}  ml={isNotSmallerScreen?4:0} bg="gray.100" h="40vh" w="40vh" justify="flex-end"
        _hover={{bg:"green.400"}}>
          < Icon  p="4" as={DiWebplatform} w="20" h="20"/>
          <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
            Android Apps
          </Text>
        </Flex>
        </Flex>

    </Box>
    </Flex>   

  )
}

export default Profile