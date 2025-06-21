import React, { useEffect } from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  Container,
  SimpleGrid,
  VStack,
  Button,
  HStack,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const expandableProjects = [
  { title: '좀비 디펜스 게임', image: 'https://picsum.photos/600/400?random=1' },
  { title: '토이 웹툴', image: 'https://picsum.photos/600/400?random=2' },
  { title: '텍스트 기반 인터랙티브', image: 'https://picsum.photos/600/400?random=3' },
  { title: 'AI 캐릭터 테스트', image: 'https://picsum.photos/600/400?random=4' },
  { title: '모바일 UI 데모', image: 'https://picsum.photos/600/400?random=5' },
];

const projects = [
  {
    title: '아찌1',
    image: '/img/characters/a-jji1.png',
    background: '/img/background/a-jji1bg.png',
    imagePosition: { top: '30px', left: '0px', height: '100%' },
  },
  {
    title: '아찌2',
    image: '/img/characters/a-jji2.png',
    background: '/img/background/a-jji2bg.png',
    imagePosition: { top: '15px', left: '10px', height: '95%' },
  },
  {
    title: '햄스케',
    image: '/img/characters/hamsuke1.png',
    background: '/img/background/hamsuke1bg.png',
    imagePosition: { top: '70px', left: '40px', height: '80%' },
  },
];

export default function Home() {
  const { toggleColorMode } = useColorMode();

  useEffect(() => {
    const cards = document.querySelector('.cards');
    const images = document.querySelectorAll('.card__img');
    const backgrounds = document.querySelectorAll('.card__bg');
    const range = 30;

    const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1);
    let timeout;

    const handleMouseMove = ({ x, y }) => {
      if (timeout) cancelAnimationFrame(timeout);
      timeout = requestAnimationFrame(() => {
        const xVal = calcValue(x, window.innerWidth);
        const yVal = calcValue(y, window.innerHeight);

        if (cards) {
          cards.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
        }

        images.forEach((img) => {
          img.style.transform = `translateX(${-xVal}px) translateY(${yVal}px)`;
        });

        backgrounds.forEach((bg) => {
          bg.style.backgroundPosition = `${xVal * 0.5}px ${-yVal * 0.5}px`;
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const bg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.700');

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

      <Box flex="1" display="flex" flexDirection="column">
        <VStack spacing={4} textAlign="center" my={12}>
          <Heading size="2xl">SubCharacters</Heading>
          <Text fontSize="lg" maxW="xl">
            부업으로 이것저것 만들면서 재미 삼아 운영하는 페이지입니다.
          </Text>
          <Button colorScheme="teal">바로가기</Button>
        </VStack>

        <Container maxW="6xl" py={20}>
          <Heading as="h2" size="lg" mb={6}>SubCharacters 소개</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={20}>
            <Box p={5} bg={cardBg} borderRadius="xl" shadow="md">
              <Heading size="md" mb={2}>좀비 디펜스 게임</Heading>
              <Text fontSize="sm" color="gray.400">
                Unity 기반의 3D 좀비 디펜스 게임. 조립식 터렛과 AI 좀비가 등장.
              </Text>
            </Box>
            <Box p={5} bg={cardBg} borderRadius="xl" shadow="md">
              <Heading size="md" mb={2}>토이 웹툴</Heading>
              <Text fontSize="sm" color="gray.400">
                GitHub Pages + React로 만드는 간단한 웹 도구 모음.
              </Text>
            </Box>
            <Box p={5} bg={cardBg} borderRadius="xl" shadow="md">
              <Heading size="md" mb={2}>텍스트 기반 인터랙티브</Heading>
              <Text fontSize="sm" color="gray.400">
                사용자의 선택에 따라 이야기가 달라지는 텍스트 인터랙션 실험.
              </Text>
            </Box>
          </SimpleGrid>

          <Heading as="h2" size="lg" mb={6}>확장형 프로젝트 카드</Heading>
          <Flex gap={4} justify="center" overflowX="auto" mb={20}>
            {expandableProjects.map((project, idx) => (
              <Box
                key={`expand-${idx}`}
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

          <Heading as="h2" size="lg" mb={6}>3D 인터랙티브 카드</Heading>
          <Flex justify="center" align="center">
            <Box
              className="cards"
              display="flex"
              direction={{ base: 'column', md: 'row' }}
              gap="30px"
              p={10}
              borderRadius="20px"
              background="white"
              boxShadow="lg"
              transformStyle="preserve-3d"
              transition="transform 0.2s ease-out"
            >
              {projects.map((project, idx) => (
                <Box
                  key={`3d-${idx}`}
                  className="card"
                  w="200px"
                  h="300px"
                  position="relative"
                  borderRadius="15px"
                  overflow="hidden"
                  transformStyle="preserve-3d"
                >
                  <Box
                    className="card__bg"
                    position="absolute"
                    top="-30px"
                    left="-30px"
                    right="-30px"
                    bottom="-30px"
                    backgroundImage={`url(${project.background})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    transform="translateZ(-40px)"
                    zIndex={0}
                  />
                  <Image
                    className="card__img"
                    src={project.image}
                    alt={project.title}
                    objectFit="contain"
                    position="relative"
                    zIndex={1}
                    transition="transform 0.2s ease-out"
                    style={{
                      top: project.imagePosition?.top || '0px',
                      left: project.imagePosition?.left || '0px',
                      height: project.imagePosition?.height || '100%',
                      position: 'absolute'
                    }}
                  />
                  <Text
                    position="absolute"
                    bottom="10px"
                    left="10px"
                    bg="rgba(0,0,0,0.5)"
                    color="white"
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontWeight="bold"
                    zIndex={2}
                    className="card__title"
                  >
                    {project.title}
                  </Text>
                </Box>
              ))}
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box mt="auto" py={6} borderTop="1px" borderColor="gray.600" textAlign="center" fontSize="sm" color="gray.500">
        © 2025 SubCharacters. | 이용약관 | 연락처
      </Box>
    </Box>
  );
}
