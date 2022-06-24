import {
  Box,
  Flex,
  Image,
  LinkOverlay,
  Text,
  Button,
  Grid,
  AspectRatio,
  Link,
} from "@chakra-ui/react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import {  IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
// import Image from "next/image";
import { Stack, useColorModeValue } from "@chakra-ui/react";
import React ,{useState}from "react";
import image1 from "../Pages/Images/lumen_intro.png";
import kpmg from "../Pages/Images/kpmg.png";
import sales from "../Pages/Images/salesforce.png";
import pwc from "../Pages/Images/logo-pwc-color.png";
import cisco from "../Pages/Images/logo-cisco-color.png";
import merk from "../Pages/Images/logo-merk-color.png";
import sap from "../Pages/Images/logo-sap-color.png";
import siemens from "../Pages/Images/logo-siemens-color1.png";
import mitsubishi from "../Pages/Images/logo-mitsubishi-color.png";
import meet2 from "../Pages/Images/lumen_intro2.png";
import meet3 from "../Pages/Images/lumen_intro4.png";
import meet4 from "../Pages/Images/lumen_intro3.png";
import style from "./Home.module.css";
import FeedIcon from "@mui/icons-material/Feed";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import user1 from "../Pages/Images/user1.jpg";
import user2 from "../Pages/Images/user2.jpg";
import user3 from "../Pages/Images/user3.jpg";
import cta from "../Pages/Images/cta-bg.png";

import unit1 from "../Pages/Images/uni1.png";
import unit2 from "../Pages/Images/uni2.png";
import unit3 from "../Pages/Images/uni3.png";
 
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Home = () => {
  const [slider, setSlider] = useState(0);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const cards = [
    "https://storage.googleapis.com/lumen5-site-images/carousel-mhi-bg.png",
    "https://storage.googleapis.com/lumen5-site-images/carousel-siemens-bg.png",
    "https://storage.googleapis.com/lumen5-site-images/carousel-dnv-bg.png",
    "https://storage.googleapis.com/lumen5-site-images/carousel-ncstate-bg.png",
    "https://storage.googleapis.com/lumen5-site-images/carousel-cms-bg.png",
  ];
const handlePlay=(e)=>{
  e.currentTarget.play()
}
  return (
    <div>
      {/*--------- introducion --------*/}
      <div className={style.intro}>
        <Flex color="#24282f" w="70%" m="auto" pb="20">
          <Box color="#24282f" w="50%">
            <Text
              fontSize="37px"
              fontWeight="700"
              lineHeight="50px"
              textAlign="left"
              w="70%"
              m="auto"
            >
              Video maker built to supercharge your <br /> content strategy
            </Text>
            <Text
              fontSize="25px"
              lineHeight="30px"
              fontWeight="400"
              pt="10"
              w="70%"
              m="auto"
              textAlign="left"
            >
              Easily make videos for
              <LinkOverlay fontWeight="500">
                content marketing, thought leadership, and brand awareness
              </LinkOverlay>
              in a snap.
            </Text>

            <Button
              // bg="blue"
              className={style.btn}
              bg="#5846f6"
              colorScheme="blue"
              borderRadius="30px"
              color="white"
              p="25px 25px"
              ml="20"
              mt="10"
            >
              Sign up free
            </Button>
          </Box>
          <Box w="50%">
            <Image src={image1} w="100%" h="auto" />
          </Box>
        </Flex>
      </div>
      {/* Businesss */}

      <div>
        <Text
          textAlign="center"
          fontSize="25px"
          pb="5"
          fontWeight="400"
          mt="10"
        >
          Over 6 million videos created by thousands of businesses
        </Text>
        <Flex w="70%" m="auto" justify="space-around">
          <Box>
            <Image src={sales} />
          </Box>
          <Box>
            <Image src={pwc} />
          </Box>
          <Box>
            <Image src={cisco} />
          </Box>
          <Box>
            <Image src={kpmg} />
          </Box>
          <Box>
            <Image src={merk} />
          </Box>
          <Box>
            <Image src={mitsubishi} />
          </Box>
          <Box>
            <Image src={sap} />
          </Box>
          <Box>
            <Image src={siemens} />
          </Box>
        </Flex>
      </div>
      <div>
        <Text
          fontSize="5xl"
          mt="10"
          color="#24282f"
          textAlign="center"
          fontWeight="700"
        >
          Captivating video templates
        </Text>
        <Text
          textAlign="center"
          fontWeight="400"
          fontSize="21px"
          pb={10}
          color="#24282f"
        >
          Drag and drop. No experience required.
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" w="70%" m="auto" gap={6}>
          <Box>
            <AspectRatio borderRadius="10px" style={{height:"190px"}}  >
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/tb_tracer.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4 "
                // onClick={e => e.currentTarget.play()}
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
          <Box>
            <AspectRatio borderRadius="10px" style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/tb_billow.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/prev_billow.mp4 "
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
          <Box>
            <AspectRatio borderRadius="10px" style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/tb_vertex.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/prev_vertex.mp4 "
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
          <Box>
            <AspectRatio borderRadius="10px" style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/tb_circuit.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4 "
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
          <Box>
            <AspectRatio borderRadius="10px" style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/tb_vault2.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/prev_vault.mp4 "
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
          <Box>
            <AspectRatio borderRadius="10px" style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/tb_notice.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/prev_notice.mp4 "
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
          <Box>
            <AspectRatio borderRadius="10px" style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/tb_notice.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/flux_prev.mp4"
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
          <Box>
            <AspectRatio borderRadius="10px" style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/flux_tn.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/unity_prev.mp4 "
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
          <Box>
            <AspectRatio borderRadius="10px" style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/unity_tn.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/looper_prev.mp4 "
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
        </Grid>
      </div>

      <div className={style.intro2}>
        <Flex w="70%" m="auto" mt={20}>
          <Box pt={20} pb={20} w="60%">
            <Image src={meet2} w="80%" h="500px" />
          </Box>

          <Box id={style.Box1} w="40%">
            <Box className={style.icon}>
              <FeedIcon id={style.feedicon} className={style.feed} />
            </Box>
            <Box>
              <Text fontSize="4xl" fontWeight="bold" pt="10">
                Transform blog posts into videos with A.I.
              </Text>

              <Text fontSize="1xl" pt={5} lineHeight="30px" fontWeight="300">
                Starting from a blank page is hard — and with Lumen5, you don’t
                have to. Our AI-powered technology helps you storyboard your
                ideas, fit your content to a layout, and find music and visuals
                that enhance your message.
              </Text>
              <Box className={style.link}>
                <Link>Get started for free →</Link>
              </Box>
              <Box id={style.hrline}>
                <hr />
              </Box>
              <Box id={style.text1}>
                <Text>
                  “Lumen5 has enabled us to create more videos
                  <br /> and drive more traffic, while having more time to
                  <br />
                  invest in other projects.”
                </Text>
              </Box>

              <Box id={style.cont} pt={10} pb={20} w="60%">
                <Image id={style.user1img} src={user1} w="30%" h="60px" />
                <Box id={style.txt_img}>
                  <Text w="200%">
                    <b>Drew Sykes,</b> Social Media Director
                  </Text>
                  <Image src={unit1} h="50px" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </div>

      <div className={style.intro2}>
        <Flex w="70%" m="auto" mt={20}>
          <Box id={style.Box1} w="40%">
            <Box className={style.icon} id={style.icon}>
              <ImageSearchIcon id={style.feedicon} className={style.feed} />
            </Box>
            <Box>
              <Text fontSize="4xl" fontWeight="bold" pt="10">
                Content library with millions of stock photos & videos
              </Text>

              <Text fontSize="1xl" pt={5} lineHeight="30px" fontWeight="300">
                The Lumen5 media library gives you easy access to millions of
                photos, video clips, and audio files, so you always have the
                elements you need to create the perfect video.
              </Text>
              <Box className={style.link}>
                <Link>View plans →</Link>
              </Box>
              <Box id={style.hrline}>
                <hr />
              </Box>
              <Box id={style.text1}>
                <Text>
                  “We promoted our downloadable study on top PPC skills for 2019
                  on social mediausing a short video created in Lumen5 in just
                  30 minutes, and decreased cost per download by 5x!”
                </Text>
              </Box>

              <Box id={style.cont} pt={10} pb={20} w="60%">
                <Image id={style.user1img} src={user2} w="30%" h="60px" />
                <Box id={style.txt_img}>
                  <Text w="200%">
                    <b>Julia Olennikova,</b> Product Marketing
                    <br /> Manager
                  </Text>
                  <Image src={unit2} h="20px" w="150px" />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box pt={20} pb={20} w="60%">
            <Image id={style.img2} src={meet4} w="80%" h="450px" />
          </Box>
        </Flex>
      </div>

      <div className={style.intro2}>
        <Flex w="70%" m="auto" mt={20}>
          <Box pt={20} pb={20} w="60%">
            <Image src={meet3} w="80%" h="500px" />
          </Box>

          <Box id={style.Box1} w="40%">
            <Box className={style.icon} id={style.serchicon}>
              <ColorLensIcon id={style.feedicon} className={style.feed} />
            </Box>
            <Box>
              <Text fontSize="4xl" fontWeight="bold" pt="10">
                Making it easy to stay on brand
              </Text>

              <Text fontSize="1xl" pt={5} lineHeight="30px" fontWeight="300">
                It has never been easier to stay on brand. With Lumen5
                templates, you can customize each video with your unique logo,
                watermark, fonts, colors, and more.
              </Text>
              <Box className={style.link}>
                <Link>Get started for free →</Link>
              </Box>
              <Box id={style.hrline}>
                <hr />
              </Box>
              <Box id={style.text1}>
                <Text>
                  “Whenever I got in touch with Lumen5 I felt like my
                  <br />
                  suggestions mattered and I was being listened to.
                  <br /> It’s like I’m co-creating in a tiny way. It’s a great
                  feeling.”
                </Text>
              </Box>

              <Box id={style.cont} pt={10} pb={20} w="60%">
                <Image id={style.user1img} src={user3} w="30%" h="60px" />
                <Box id={style.txt_img}>
                  <Text w="250%" pt={5}>
                    <b>Promod Sharma,</b>Actuary & Insurance Consultant
                  </Text>
                  <Image src={unit3} h="20px" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </div>

      <div>
        <Text
          fontSize="5xl"
          mt="10"
          color="#24282f"
          textAlign="center"
          fontWeight="700"
        >
          Explore videos made with Lumen5
        </Text>
        <Flex id={style.buttonv}>
          <Button id={style.button11}>Content Marketing</Button>
          <Button>Communications</Button>
          <Button>Promotional </Button>
          <Button>People & Culture </Button>
          <Button>Localization</Button>
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" w="70%" m="auto" gap={6}>
          <Box>
            <AspectRatio  style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Hydrogen%20Economy%20TN.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4 "
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
          <Box>
            <AspectRatio style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/siemens-content-TN.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/prev_billow.mp4 "
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
          <Box>
            <AspectRatio style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Responsible%20Investment%20TN.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/prev_vertex.mp4 "
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
          <Box>
            <AspectRatio style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Workplace%20Evolution%20TN.png"
                title="/"
                id={style.player1}
                src="https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4 "
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
          <Box>
            <AspectRatio style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/The%20Pandemic%20TN.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/prev_vault.mp4 "
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
          <Box>
            <AspectRatio style={{height:"190px"}}>
              <video
              poster="https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Supply%20Chain%20Resilience%20TN.png"
                id={style.player1}
                title="/"
                src="https://storage.googleapis.com/lumen5-site-images/prev_notice.mp4 "
                onMouseOver={e=>e.currentTarget.play()}
                onMouseOut={e=>e.currentTarget.pause()}
              />
            </AspectRatio>
          </Box>
        </Grid>
      </div>

      <div id={style.slider1}>
        <Text
          fontSize="4xl"
          mt="10"
          color="#24282f"
          textAlign="center"
          fontWeight="700"
        >
          Customer success stories
        </Text>
        <Text fontSize="2xl" mt="5" color="#24282f" textAlign="center">
          Discover how leading brands are getting results with Lumen5.
        </Text>
        <Box
        position={"relative"}
        height={"600px"}
        width={"1100px"}
        overflow={"hidden"}
        margin={"auto"}
        borderRadius={"15px"}
        marginTop
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          backgroundColor={"white"}
          padding={"10px"}
          fontSize={"33px"}
          color={"black"}
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          width={"70px"}
          height={"70px"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          width={"70px"}
          height={"70px"}
          backgroundColor={"white"}
          padding={"10px"}
          fontSize={"33px"}
          color={"black"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              height={"6xl"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>


      </div>

      <div id={style.cards}>
        <Text
          fontSize="4xl"
          mt="10"
          color="#24282f"
          textAlign="center"
          fontWeight="700"
        >
          Tips and tricks for amplifying <br /> your brand with video
        </Text>
        <Flex justify={"space-around"} mt={10}>
          <Box
            maxW={"230px"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"130px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                src={
                  "https://lumen5.com/learn/wp-content/uploads/2019/05/Video-Marketing-How-to-Get-Started.jpg"
                }
              />
            </Box>
            <Stack>
              <Text
                color={"black.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"lg"}
                mt={5}
                letterSpacing={1.1}
              >
                BLOG
              </Text>

              <Text color={"black.500"} fontSize={"lg"}>
                Video Marketing: How to Get Started [Step by Step]
              </Text>
            </Stack>
            <Link id={style.cardtxt}>Read story →</Link>
          </Box>

          <Box
            maxW={"230px"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"130px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                src={
                  "https://lumen5.com/learn/wp-content/uploads/2019/08/Host-an-Instagram-Takeover-in-7-Simple-Steps.jpg"
                }
              />
            </Box>
            <Stack>
              <Text
                color={"black.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"lg"}
                mt={5}
                letterSpacing={1.1}
              >
                BLOG
              </Text>

              <Text color={"black.500"} fontSize={"lg"}>
                How to Increase Your Facebook Video Views.
              </Text>
            </Stack>
            <Link id={style.cardtxt}>Read story →</Link>
          </Box>
          <Box
            maxW={"230px"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"130px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                src={
                  "https://lumen5.com/learn/wp-content/uploads/2018/10/photo-1518406432532-9cbef5697723.jpeg"
                }
              />
            </Box>
            <Stack>
              <Text
                color={"black.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"lg"}
                mt={5}
                letterSpacing={1.1}
              >
                BLOG
              </Text>

              <Text color={"black.500"} fontSize={"lg"}>
                The Importance of Video in Your Content Strategy
              </Text>
            </Stack>
            <Link id={style.cardtxt}>Read story →</Link>
          </Box>
        </Flex>
      </div>

      <div id={style.bgdiv}>
        <Image src={cta} position="absolute" id={style.bgimage} />
        <Text
          fontSize="4xl"
          color="white"
          fontWeight={700}
          textAlign="center"
          position="relative"
          pt={20}
        >
          Join 800,000+ companies that are
          <br /> using Lumen5 to tell their stories.
        </Text>
        <Text id={style.textp}>
          Lumen5 is a video creation software that helps marketers,
          <br /> publishers, and brands create video content in a breeze,
          <br /> without any technical expertise.
        </Text>
        <Button id={style.button1}>Sign up free</Button>
      </div>
    </div>
  );
};

