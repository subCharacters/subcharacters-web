import { Box, Button, Container, Heading, Text, VStack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Image, Flex, HStack, Link } from '@chakra-ui/react';

const projects = [
  { title: '좀비 디펜스 게임', image: 'https://picsum.photos/600/400?random=1' },
  { title: '토이 웹툴', image: 'https://picsum.photos/600/400?random=2' },
  { title: '텍스트 기반 인터랙티브', image: 'https://picsum.photos/600/400?random=3' },
  { title: 'AI 캐릭터 테스트', image: 'https://picsum.photos/600/400?random=4' },
  { title: '모바일 UI 데모', image: 'https://picsum.photos/600/400?random=5' },
];

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box minH="100vh" bg={bg} display="flex" flexDirection="column">
      {/* Glass Effect Navbar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        px={8}
        py={4}
        position="sticky"
        top={0}
        zIndex={100}
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(30px)"
        boxShadow="0px 0px 30px rgba(227, 228, 237, 0.37)"
        border="2px solid rgba(255, 255, 255, 0.18)"
        borderRadius="xl"
        m={4}
      >
        <Heading size="md">SubCharacters</Heading>
        <HStack spacing={16} fontWeight="medium">
          <Link href="#">Home</Link>
          <Link href="#">Projects</Link>
          <Link href="#">About</Link>
          <Link href="#">Terms</Link>
        </HStack>
        <Button onClick={toggleColorMode} size="sm">
          <SunIcon display={{ base: 'none', md: 'inline' }} />
          <MoonIcon display={{ base: 'inline', md: 'none' }} />
        </Button>
      </Flex>

      {/* Content Wrapper */}
      <Box flex="1" display="flex" flexDirection="column">
        {/* Hero Section */}
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading size="2xl">부업 프로젝트를 소개하는 공간</Heading>
          <Text fontSize="lg" maxW="xl">
            SubCharacters는 개인이 만든 게임, 앱, 실험적인 아이디어 등을 정리하고 소개하는 프로젝트 공간입니다.
          </Text>
          <Button colorScheme="teal" size="lg">첫 게임 보기</Button>
        </VStack>

        {/* Expandable Cards Section */}
        <Container maxW="6xl" flex="1">
          <Flex gap={4} justify="center" overflowX="auto">
            {projects.map((project, idx) => (
              <Box
                key={idx}
                position="relative"
                minW="70px"
                h="300px"
                borderRadius="lg"
                overflow="hidden"
                flex="1"
                transition="flex 0.5s ease"
                _hover={{ flex: 7 }}
              >
                <Image src={project.image} objectFit="cover" w="100%" h="100%" opacity={0.8} />
                <Box
                  position="absolute"
                  bottom={4}
                  left={4}
                  opacity={0}
                  transform="translateX(100%)"
                  transition="all 0.3s ease"
                  _groupHover={{ opacity: 1, transform: 'translateX(0)' }}
                >
                  <Heading size="md" color="white">{project.title}</Heading>
                </Box>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* Footer */}
      <Box mt="auto" py={6} borderTop="1px" borderColor="gray.600" textAlign="center" fontSize="sm" color="gray.500">
        © 2025 SubCharacters. 모든 권리 보유. | 이용약관 | 연락처
      </Box>
    </Box>
  );
}
