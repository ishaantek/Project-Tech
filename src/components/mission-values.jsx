import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  chakra,
  Highlight,
  Tabs,
  Tooltip,
  Spacer,
  TabList,
  TabPanels,
  Tab,
  Divider,
  Image,
  TabPanel,
  TabIndicator,
  Stat,
  StatLabel,
  StatNumber,
  Link,
  StatHelpText,
  SimpleGrid,
  WrapItem,
} from "@chakra-ui/react";
import { Wrap } from "@chakra-ui/react";
import MissionValue from "../components/mission-value-card";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MissionValues() {
  return (
    <>
      <Flex direction="column" maxW="1000px" margin="auto" mb="2rem" mt="2rem">
        <Flex
          direction={["column", "row"]}
          justifyContent={"center"}
          alignItems="center"
        >
          <Box mt="1rem" direction="column">
            <Heading
              color="primary"
              fontSize={["4xl", "5xl"]}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Equality
            </Heading>
          </Box>
          <Spacer />
          <Button as="a" href="/donate">
            Donate to Make a Difference
          </Button>
        </Flex>
        <Flex
          alignItems="center"
          direction={["column", "row"]}
          justify="center"
        >
          <Box color="primary" maxW={["80%", "60%"]} pr={["0rem", "5rem"]}>
            <Heading py="10px" fontSize={["xl", "3xl"]} color="primary">
              Computer Science Education
            </Heading>

            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
              showIndicators={false}
              autoPlay={true}
              swipeable={true}
              interval={5000}
              transitionTime={500}
              stopOnHover={false}
              emulateTouch={true}
              dynamicHeight={true}
            >
              <chakra.div>
                <Link
                  _hover={{
                    textDecoration: "none",
                    color: "primary",
                  }}
                  href="https://advocacy.code.org/2022_state_of_cs.pdf"
                >
                  <Tooltip label="Click to view the full Source of Computer Science Teachers Association, 2020">
                    <Stat
                      borderLeft={"2px"}
                      borderColor="primary"
                      borderBottomRightRadius="md"
                      mb="8px"
                      py=".5rem"
                      data-aos="zoom-in"
                      data-aos-duration="500"
                    >
                      <StatNumber fontSize="2xl" color="primary">
                        54%
                      </StatNumber>

                      <Text px="3rem" pb="5px" fontSize="md">
                        of public schools in the U.S. do not offer computer
                        science courses.{" "}
                      </Text>
                      <StatHelpText fontSize="9px">
                        {" "}
                        (Computer Science Teachers Association, 2020)
                      </StatHelpText>
                    </Stat>
                  </Tooltip>
                </Link>
              </chakra.div>
              <chakra.div>
                <Link
                  _hover={{
                    textDecoration: "none",
                    color: "primary",
                  }}
                  href="https://www.bls.gov/ooh/computer-and-information-technology/home.htm"
                >
                  <Tooltip label="Click to view the full Source of Bureau of Labor Statistics">
                    <Stat
                      borderLeft={"2px"}
                      borderColor="primary"
                      borderBottomRightRadius="md"
                      mb="8px"
                      px="1rem"
                      py="1rem"
                      data-aos="zoom-in"
                      data-aos-duration="500"
                    >
                      <StatNumber fontSize="2xl" color="primary">
                        15%
                      </StatNumber>

                      <Text px="3rem" pb="5px" fontSize="md">
                        projected growth from 2021 to 2031 in computer and
                        information technology occupations.
                      </Text>
                      <StatHelpText fontSize="9px">
                        (Bureau of Labor Statistics, 2021)
                      </StatHelpText>
                    </Stat>
                  </Tooltip>
                </Link>
              </chakra.div>
              <chakra.div>
                <Link
                  _hover={{
                    textDecoration: "none",
                    color: "primary",
                  }}
                  href="https://www.create-learn.us/blog/stem-stats/"
                >
                  <Tooltip label="Click to view the full Source">
                    <Stat
                      borderLeft={"2px"}
                      borderColor="primary"
                      borderBottomRightRadius="md"
                      mb="8px"
                      py=".5rem"
                      data-aos="zoom-in"
                      data-aos-duration="500"
                    >
                      <StatNumber fontSize="2xl" color="primary">
                        74%
                      </StatNumber>

                      <Text px="3rem" pb="5px" fontSize="md">
                        of elementary schools and 62% of middle schools
                        don&apos;t offer computer science classes.
                      </Text>
                      <StatHelpText fontSize="9px">
                        {" "}
                        (Create Learn US 2021)
                      </StatHelpText>
                    </Stat>
                  </Tooltip>
                </Link>
              </chakra.div>
            </Carousel>

            <Divider borderColor="whiteAlpha.400" pt="13px" mb="14px" />
            <Text fontSize="sm">
              Project Tech is working hard to close this bridge this divide and
              make computer science education accessible for everyone.
            </Text>
            <Button mt="1rem" as="a" href="https://project-tech.org/courses">
              Check out our Learning Platform{" "}
              <ExternalLinkIcon mb="5px" marginLeft="10px" />
            </Button>
          </Box>

          <Box mt={["1rem", "0"]} maxW={["80%", "40%"]}>
            <Image
              borderRadius="md"
              src="/computer-science-education.png"
              alt="Computer Science Education"
            />
          </Box>
        </Flex>
        <Flex
          color="primary"
          direction={["column", "row"]}
          alignItems="center"
          mt="3rem"
        >
          <Box pr={["0rem", "5rem"]} maxW={["80%", "50%"]}>
            <Image
              borderRadius="md"
              src="digital-divide.jpeg"
              alt="Digital Divide"
            />
          </Box>
          <Box mt={["2rem", "0"]} maxW={["80%", "50%"]}>
            <Heading py="10px" fontSize={["xl", "3xl"]} color="primary">
              The Digital Divide
            </Heading>
            <Link
              _hover={{
                textDecoration: "none",
                color: "primary",
              }}
              href="https://www.un.org/en/delegate/itu-29-billion-people-still-offline"
            >
              <Tooltip label="Click to view the full Source of United Nations 2021">
                <Stat data-aos="zoom-in" data-aos-duration="1000">
                  <StatNumber fontSize="lg" color="primary">
                    37%
                  </StatNumber>
                  <Text pb="5px" fontSize="sm">
                    of the global population lack access to the Internet;
                    preventing them from accessing the tools to learn about
                    computer science.
                  </Text>
                  <StatHelpText fontSize="9px">
                    {" "}
                    (United Nations (2021))
                  </StatHelpText>
                </Stat>
              </Tooltip>
            </Link>
            <Divider borderColor="whiteAlpha.400" pt="5px" mb="14px" />
            <Text fontSize="sm">
              With your help, we can give technology, like Laptops/PCs, to those
              who need them, allowing them to thrive in the tech industry.
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex direction="column" textAlign={"center"} mt="4rem">
        <Heading
          fontWeight="medium"
          mb={["1rem"]}
          color="primary"
          fontSize={["3xl", "5xl"]}
        >
          Our Values
        </Heading>
      </Flex>
      <Wrap spacing={"30px"} justify="center" maxWidth={"1000px"} margin="auto">
        <WrapItem>
          <MissionValue
            title={"Diversity"}
            description="We embrace the power of diversity, striving to build an inclusive community that celebrates various ethnic, cultural, and social identities, fostering a more equitable society."
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title="Inclusivity"
            description={
              "By cultivating an inclusive mindset, we cultivate an environment that welcomes and includes everyone, promoting collaboration and fostering a strong sense of community at Project Tech."
            }
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title={"Passion"}
            description="Passion drives our inspiration and fuels our creativity. We are dedicated to igniting your desire to learn and explore, driven by our genuine compassion for both community and education."
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title={"Dependability"}
            description="Count on us for unwavering support. We are here to be your reliable source of guidance, providing a trustworthy community that you can always lean on and look forward to."
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title={"Quality"}
            description="We are committed to excellence, delivering high standards of quality in everything we do. By striving for quality, we empower you to achieve success and generate sustainable ideas."
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title={"Impactful"}
            description="We exist to make a difference. Our purpose is to leave a lasting impact on you, ensuring that Project Tech goes beyond being just an organization and becomes a transformative experience for you."
          />
        </WrapItem>
      </Wrap>
    </>
  );
}
