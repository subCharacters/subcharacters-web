import { ChakraProvider, Box, Heading, Text, Button } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" py={20} px={6}>
        <Heading as="h1" size="2xl" mb={4}>
          subCharacters에 오신 걸 환영합니다!
        </Heading>
        <Text fontSize="lg" mb={6}>
          Chakra UI로 만든 첫 정적 페이지입니다.
          GitHub Actions 자동 배포 테스트.
        </Text>
        <Button colorScheme="teal" size="lg">
          시작하기
        </Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;