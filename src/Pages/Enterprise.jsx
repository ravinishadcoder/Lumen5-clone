import React from "react";
import styles from "../Pages/enterprice.module.css";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { useState } from "react";
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

const Enterprice = () => {
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
  return (
    <>
      <div className={styles.first}>
        <div className={styles.firsta}>
          <h6 className={styles.h6m}>ENTERPRICE</h6>
          <h3 className={styles.h3m}>
            Create engaging videos at scale while keeping on brand.
          </h3>
          <h5 className={styles.h5m}>
            {" "}
            Lumen5 is the easiest and fastest way to create videos with your own
            custom branded templates. Decentralize video creation on your teams
            with confidence.
          </h5>
          <button className={styles.btnm}>Request a Demo</button>
        </div>
        <div className={styles.firstb}>
          <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-header.png"></img>
        </div>
      </div>

      <h1 className={styles.h1m}>
        Over 6 million videos created by thousands of businesses
      </h1>
      <div className={styles.imm}>
        <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png"></img>
        <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png"></img>
        <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png"></img>
        <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png"></img>
        <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png"></img>
        <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png"></img>
        <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png"></img>
        <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png"></img>
      </div>
      <h3 className={styles.h3mm}>Bespoke custom templates</h3>
      <h5 className={styles.h5mm}>
        {" "}
        We work with your brand team every step of the way
      </h5>
      <div className={styles.vm}>
        <video
          className={styles.vb}
          src="https://storage.googleapis.com/lumen5-site-images/siemens_prev.mp4"
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
          width="840px"
          height="400px"
        ></video>
        <video
          className={styles.vb}
          src="https://storage.googleapis.com/lumen5-site-images/salesforce_prev.mp4"
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
          width="840px"
          height="300px"
        ></video>
        <video
          className={styles.vb}
          src="https://storage.googleapis.com/lumen5-site-images/viasat_prev.mp4"
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
          width="840px"
          height="300px"
        ></video>
        <video
          className={styles.vb}
          src="https://storage.googleapis.com/lumen5-site-images/storaenso_prev.mp4"
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
          width="840px"
          height="300px"
        ></video>
      </div>

      <div className={styles.avm}>
        <div className={styles.avm1}>
          <h3 className={styles.avm2}>
            Scale your content and break that bottleneck
          </h3>
          <h5 className={styles.avm3}>
            Content creation bottlenecks swell up when a marketing team relies
            too much on a small group of specialized pros to produce a large
            volume of video content. Instead, put the freedom of video creation
            directly into the hands of all your teams while ensuring brand
            control and watch your content library multiply.
          </h5>
        </div>
        <div className={styles.avm1}>
          <h3 className={styles.avm2}>
            Repurpose your already-amazing content
          </h3>
          <h5 className={styles.avm3}>
            Great video content speaks louder than words (literally), and
            doesn’t need to be made from scratch. Lumen5 makes it easy to
            repurpose all of your existing marketing assets and messaging into
            captivating bite-sized videos optimized for online distribution.
            Multiply the content you already have and work smarter, not harder.
          </h5>
        </div>
        <div className={styles.avm1}>
          <h3 className={styles.avm2}>
            Increase your customer engagement frequency
          </h3>
          <h5 className={styles.avm3}>
            The most engaging brands are consistent and frequent with their
            communication while sharing relevant content that capture their
            audiences eyes, minds, and hearts. With Lumen5, your team can
            produce engaging videos in minutes, allowing your brand to stay
            top-of-mind, up-to-date, and relevant.
          </h5>
        </div>
        <div className={styles.avm1}>
          <h3 className={styles.avm2}>Complement your agency with Lumen5</h3>
          <h5 className={styles.avm3}>
            Not every video needs a big budget. While agencies are great for
            your mega high-production campaigns, such as TV commercials, brands
            are turning to Lumen5 to meet the demands of daily or weekly video
            content, purpose-built for social media and corporate
            communications.
          </h5>
        </div>
      </div>
      <div className={styles.avm4}>
        <div>
          <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-scale.png"></img>
        </div>
        <div className={styles.avm6}>
          <h3 className={styles.avm5}>
            Produce videos at scale and in‑house. Seriously easy.
          </h3>
          <h3 className={styles.avm7}>
            Lumen5 is an unbelievably easy to use video creator built
            specifically for users without experience in video editing. The
            workflow is as simple as creating a PowerPoint presentation, and the
            output can be indistinguishable from professional agency-produced
            videos.
          </h3>
          <h3 className={styles.avm7}>
            You can create professional video from any text-based content and
            cut video creation time to an average of six minutes in Lumen5.
          </h3>
          <h3 className={styles.avm7}>
            Enable your global teams to produce localized content for their
            audience as well in a snap. Just don't tell your boss it was this
            easy.
          </h3>
        </div>
      </div>
      <div className={styles.avm9}>
        <div className={styles.avm10}>
          <h3 className={styles.avm11}>
            Maintain full control over content and branding.
          </h3>
          <h4 className={styles.avm7}>
            Our team of motion graphics designers work with your brand team to
            produce a custom template unique to your visual identity, ensuring
            your videos are always on-brand no matter who is creating them for
            you.
          </h4>
          <h4 className={styles.avm7}>
            With approval and permission level workflows in place, you can
            always make sure everyone's on the right path and on brand. Comment
            and leave revision requests right in the video itself, scene by
            scene, allowing for smooth team collaboration and a simple creation
            and video sharing process between team members, no matter if they're
            sitting next to you, or half a world away.
          </h4>
        </div>
        <div className={styles.avm10}>
          <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-control.png"></img>
        </div>
      </div>
      <div className={styles.avm4}>
        <div className={styles.avm13}>
          <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-support.png"></img>
        </div>
        <div className={styles.avm12}>
          <h3 className={styles.avm5}>
            Priority support customer success, and continuous training.{" "}
          </h3>
          <h3 className={styles.avm7}>
            Our strategic Customer Success team has worked with hundreds of
            brands on implementation and adoption. We have a strong track record
            of helping users across all departments of all enterprises become
            video creation experts. Paired with our easy-peasy UI and AI, your
            team will be pumping out expert eye catching videos in days
          </h3>
          <h3 className={styles.avm7}>
            Onboarding is just the beginning. We'll team up with you throughout
            our partnership to offer video analysis, creative direction, and
            industry best practices to help you continuously push the boundaries
            of producing more effective video content that actually generates
            results and drives growth. We got you.
          </h3>
        </div>
      </div>
      <div className={styles.avm14}>
        <div>
          <h1>Siemens</h1>
          <h2>
            “One of the goals of the company is to help our customers in their
            digital transformation, Lumen5 helps us in getting more digital in
            our communications—that’s part of the digital transformation.”
          </h2>
          <div className={styles.avm15}>
            <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/guenter-siemens.jpeg"></img>
            <div className={styles.avm16}>
              <h1>Guenter Gaugler</h1>
              <h2>Head of Content Production</h2>
            </div>
          </div>
        </div>
        <div>
          <h1>Mitsubishi</h1>
          <h2>
            “Thanks to Lumen5, we have been able to cut down on time and costs
            for video making. We don’t have to go through a third party which
            speeds everything up and makes our work a lot easier.”
          </h2>
          <div className={styles.avm15}>
            <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/adrian-mitsubishi.jpg"></img>
            <div className={styles.avm16}>
              <h1>Adrian Ngo</h1>
              <h2>Global Advertising and Sponsorships</h2>
            </div>
          </div>
        </div>
        <div>
          <h1>Mitsubishi</h1>
          <h2>
            “At Cisco we try to share lots of multimedia content and new types
            of content like memes, graphics and videos. And the videos by far
            give us the most engagement, thanks to Lumen5.”
          </h2>
          <div className={styles.avm15}>
            <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/eric-cisco.jpeg"></img>
            <div className={styles.avm16}>
              <h1>Eric Chu</h1>
              <h2>Social and Digital Content Manager</h2>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.h3mm}>Explore videos made with Lumen5</h1>
      <div className={styles.avm17}>
        <button>Content Marketing</button>
        <button>Communications</button>
        <button>Promotional</button>
        <button>People & Culture</button>
        <button>Localization</button>
      </div>
      <div className={styles.vm1}>
        <video
          className={styles.vb}
          src="https://storage.googleapis.com/lumen5-site-images/siemens_prev.mp4"
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
          width="840px"
          height="400px"
        ></video>
        <video
          className={styles.vb}
          src="https://storage.googleapis.com/lumen5-site-images/salesforce_prev.mp4"
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
          width="840px"
          height="300px"
        ></video>
        <video
          className={styles.vb}
          src="https://storage.googleapis.com/lumen5-site-images/viasat_prev.mp4"
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
          width="840px"
          height="300px"
        ></video>
        <video
          className={styles.vb}
          src="https://storage.googleapis.com/lumen5-site-images/storaenso_prev.mp4"
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
          width="840px"
          height="300px"
        ></video>
        <video
          className={styles.vb}
          src="https://storage.googleapis.com/lumen5-site-images/storaenso_prev.mp4"
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
          width="840px"
          height="300px"
        ></video>
        <video
          className={styles.vb}
          src="https://storage.googleapis.com/lumen5-site-images/storaenso_prev.mp4"
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
          width="840px"
          height="400px"
        ></video>
      </div>
      <h1 className={styles.h3mm}>Case studies and customer stories</h1>
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
      <div className={styles.avm18}>
        <h1>Tips and tricks for effortless video production</h1>
        <h2>
          Learn how our customers save time and boost engagement with Lumen5
        </h2>
      </div>
      <div className={styles.avm19}>
        <div>
          <img src="https://lumen5.com/learn/wp-content/uploads/2019/05/Video-Marketing-How-to-Get-Started.jpg"></img>
          <h1>BLOG</h1>
          <h2>Video Marketing: How to Get Started [Step by Step]</h2>
          <h3>Read story →</h3>
        </div>
        <div>
          <img src="https://lumen5.com/learn/wp-content/uploads/2019/08/Host-an-Instagram-Takeover-in-7-Simple-Steps.jpg"></img>
          <h1>BLOG</h1>
          <h2>How to Increase Your Facebook Video Views </h2>
          <h3>Read story →</h3>
        </div>
        <div>
          <img src="https://lumen5.com/learn/wp-content/uploads/2018/10/photo-1518406432532-9cbef5697723.jpeg"></img>
          <h1>BLOG</h1>
          <h2>The Importance of Video in Your Content Strategy</h2>
          <h3>Read story →</h3>
        </div>
      </div>
      <div className={styles.avm20}>
        <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/cta-bg.png"></img>
        <div>
          <h1>
            Join 800,000+ companies that are using Lumen5 to tell their stories.
          </h1>
          <h5>
            Lumen5 is a video creation software that helps marketers,
            publishers, and brands create video content in a breeze, without any
            technical expertise.
          </h5>
          <button>Request a Demo</button>
        </div>
      </div>
    </>
  );
};

export default Enterprice;
