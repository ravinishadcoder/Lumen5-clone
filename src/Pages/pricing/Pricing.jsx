import { Box, Button, Center, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { CheckIcon } from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import styles from "./pricing.module.css";
import { useEffect } from "react";
import PriceData from "./PriceData";
import PriceTable from "./PriceTable";
import cta from "../Images/cta-bg.png"

const Pricing = () => {
  const [cardData, setCardData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:8080/cardsData")
      .then((res) => setCardData(res.data));
    //console.log(cardData)
  }, []);
  const handleBgOfMontly = (e) => {
    setToggle(true);
    setToggle1(false);
  };
  const handleBgOfEarly = (e) => {
    setToggle1(true);
    setToggle(false);
  };
  const HandleClickStarter = (e) => {
    let amount = document.getElementById("starter").innerText;
    let duration = document.getElementById("duStarter").innerText;
    let obj = {amount,duration};
    localStorage.setItem("price",JSON.stringify(obj))
    navigate("upgrade")
  };
  const HandleClickProfes = (e) => {
    let amount = document.getElementById("proAmount").innerText;
    let duration = document.getElementById("duPro").innerText;
    let obj = {amount,duration};
    localStorage.setItem("price",JSON.stringify(obj))
    navigate("upgrade")
  };
  return (
    <div>
      <div className={styles.price_content}>
        <h4 style={{fontSize:"larger",fontWeight:"bold",letterSpacing:"1px"}}>PRICING</h4>
        <div style={{ width: "650px", margin: "auto" }}>
          <Text fontSize="4xl" fontWeight="bold">
            Plans for your video content creation strategy
          </Text>
        </div>
      </div>
      <div className={styles.price_switch}>
        <div className={styles.price_btn}>
          <div
            className={styles.price_monthly}
            style={
              toggle
                ? { backgroundColor: "#48505e", color: "white" }
                : { backgroundColor: "" }
            }
            onClick={handleBgOfMontly}
          >
            Bill monthly
          </div>
          <div
            className={styles.price_yearly}
            onClick={handleBgOfEarly}
            style={
              toggle1
                ? { backgroundColor: "#48505e", color: "white" }
                : { backgroundColor: "" }
            }
          >
            Bill yearly
          </div>
        </div>
      </div>
      <div className={styles.price_grid}>
        <div>
          <div>
            <Text fontSize="3xl" style={{ marginTop: "30px" }}>
              Community
            </Text>
            <small>For casual video enthusiasts</small>
            <Text fontSize="3xl" id="free" style={{ marginTop: "30px" }}>
              $0
            </Text>
            <small>forever free</small>
            <br />

            <Button
              colorScheme="blue"
              variant="outline"
              size="md"
              height="48px"
              width="200px"
              style={{ borderRadius: "30px", marginTop: "80px" }}
            >
              Get Started
            </Button>
          </div>
          <section style={{ marginTop: "50px" }}>
            <div className={styles.secContent}>
              <Text fontWeight="500">What's included:</Text>
              <p>
                <CheckIcon color="green" />
                Unlimited videos
              </p>
              <p>
                <CheckIcon color="green" />
                Contains Lumen5 watermark
              </p>
              <p>
                <CheckIcon color="green" />
                720p video resolution
              </p>
            </div>
          </section>
        </div>
        <div>
          <Text fontSize="3xl" style={{ marginTop: "30px" }}>
            Starter
          </Text>
          <small>For individual content creators</small>
          <Text fontSize="3xl" id="starter" style={{ marginTop: "30px" }}>
            {toggle1 ? "$59" : "$79"} USD
          </Text>
          <small id="duStarter">{toggle1 ? "per month, billed yearly" : "per month"}</small>
          <br />

          <Button
            colorScheme="blue"
            variant="outline"
            size="md"
            height="48px"
            width="200px"
            onClick={HandleClickStarter}
            style={{ borderRadius: "30px", marginTop: "80px" }}
          >
            Get Started
          </Button>
          <br />
          <section style={{ marginTop: "50px" }}>
            <div className={styles.secContent}>
              <Text fontWeight="500">Everything in Free, plus:</Text>
              <Text>
                <CheckIcon color="green" />
                No Lumen5 branding
              </Text>
              <Text>
                <CheckIcon color="green" />
                15M stock photos & videos
              </Text>
              <Text>
                <CheckIcon color="green" />
                Custom colors & styles
              </Text>
              <Text>
                <CheckIcon color="green" />
                1080p video resolution
              </Text>
              <Text>
                <CheckIcon color="green" />
                Access to icons
              </Text>
            </div>
          </section>
        </div>
        <div>
          <Text fontSize="3xl" style={{ marginTop: "30px" }}>
            Professional
          </Text>
          <small>For professional video storytellers</small>
          <Text fontSize="3xl" id="proAmount" style={{ marginTop: "30px" }}>
            {toggle1 ? "$199" : "$149"} USD
          </Text>
          <small id="duPro">{toggle1 ? "per month, billed yearly" : "per month"}</small>
          <br />

          <Button
            colorScheme="blue"
            variant="outline"
            size="md"
            height="48px"
            width="200px"
            onClick={HandleClickProfes}
            style={{ borderRadius: "30px", marginTop: "80px" }}
          >
            Get Started
          </Button>
          <br />
          <section style={{ marginTop: "50px" }}>
            <div className={styles.secContent}>
              <Text fontWeight="500">Everything in Starter, plus:</Text>
              <Text>
                <CheckIcon color="green" />
                Full Shutterstock libraries
              </Text>
              <Text>
                <CheckIcon color="green" />
                Upload watermarks & font
              </Text>
              <Text>
                <CheckIcon color="green" />
                Multiple saved templates
              </Text>
            </div>
          </section>
        </div>
        <div>
          <Text fontSize="3xl" style={{ marginTop: "30px" }}>
            Enterprise
          </Text>
          <small>For large-scale video teams</small>
          <Text fontSize="3xl" style={{ marginTop: "30px" }}>
            Custom
          </Text>
          <small></small>
          <br />

          <Button
            colorScheme="blue"
            variant="outline"
            size="md"
            height="48px"
            width="200px"
            style={{ borderRadius: "30px", marginTop: "80px" }}
          >
            Learn more
          </Button>
          <br />
          <section style={{ marginTop: "50px" }}>
            <div className={styles.secContent}>
              <Text fontWeight="500">Everything in Professional, plus:</Text>
              <Text>
                <CheckIcon color="green" />
                Lumen5 design team
              </Text>
              <Text>
                <CheckIcon color="green" />
                Bespoke branded templates
              </Text>
              <Text>
                <CheckIcon color="green" />
                Dedicated customer success
              </Text>
              <Text>
                <CheckIcon color="green" />
                Teams & collaboration
              </Text>
              <Text>
                <CheckIcon color="green" />
                Enterprise-level security
              </Text>
            </div>
          </section>
        </div>
      </div>
      <div style={{ position: "relative", marginTop: "200px" }}>
        <Text fontWeight="500" fontSize="20">
          Over 6 million videos created by thousands of businesses
        </Text>
      </div>
      <div>
        <div className={styles.twinsbtn}>
          <div>
            <Button
              colorScheme="blue"
              variant="outline"
              size="md"
              height="48px"
              width="200px"
              style={{ borderRadius: "30px" }}
            >
              Compare Plans
            </Button>
          </div>
          <div>
            <Text fontWeight="bold">Or</Text>
          </div>
          <div>
            <Button
              colorScheme="blue"
              variant="outline"
              size="md"
              height="48px"
              width="200px"
              style={{
                borderRadius: "30px",
                backgroundColor: "blue",
                color: "white",
              }}
            >
              Get started today
            </Button>
          </div>
        </div>
      </div>
      {/* cards section */}
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <div className={styles.priceCard}>
          {cardData.map((data) => {
            return <PriceData key={data.id} {...data} />;
          })}
        </div>
      </div>
      <div>
        <div>
          <Text fontSize="3xl">Choose the plan that's right for you</Text>
        </div>
        <div className={styles.priceBot}>
          <div>
            <Text fontSize="2xl">Community</Text>
            <br />
            <Text>forever free</Text>
            <br />
            <Button
              colorScheme="blue"
              variant="outline"
              size="md"
              height="48px"
              width="150px"
              style={{
                borderRadius: "30px",
              }}
            >
              Get started
            </Button>
          </div>
          <div>
            <Text fontSize="2xl">Starter</Text>
            <br />
            <Text>$79 USD/month</Text>
            <br />
            <Button
              colorScheme="blue"
              variant="outline"
              size="md"
              height="48px"
              width="150px"
              style={{
                borderRadius: "30px",
              }}
            >
              Get started
            </Button>
          </div>
          <div>
            <Text fontSize="2xl">Professional</Text>
            <br />
            <Text>$119 USD/month</Text>
            <br />
            <Button
              colorScheme="blue"
              variant="outline"
              size="md"
              height="48px"
              width="150px"
              style={{
                borderRadius: "30px",
              }}
            >
              Get started
            </Button>
          </div>
          <div>
            <Text fontSize="2xl">Enterprise</Text>
            <br />
            <Text>Let's talk!</Text>
            <br />
            <Button
              colorScheme="blue"
              variant="outline"
              size="md"
              height="48px"
              width="150px"
              style={{
                borderRadius: "30px",
              }}
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <PriceTable />
      <div style={{ marginTop: "70px" }}>
        <Text fontSize="2xl" fontWeight="400">
          A few frequently asked questions
        </Text>
      </div>
      <div className={styles.priceQue}>
        <div>
          <Text fontWeight="500">
            What if I only need Lumen5 for a set amount of time?
          </Text>
          <Text marginTop="50">
            That's fine! You can cancel your account anytime.
          </Text>
        </div>
        <div>
          <Text fontWeight="500">What happens to my videos if I cancel?</Text>
          <Text marginTop="50">
            All the videos you create are yours to keep forever and ever.
          </Text>
        </div>
        {/* </div> */}
        {/* <div className={styles.priceQue}> */}
        <div>
          <Text fontWeight="500">Do you have a non-profit discount?</Text>
          <Text marginTop="50">We do. Contact us for more information.</Text>
        </div>
        <div>
          <Text fontWeight="500">How do I pay for my plan?</Text>
          <Text marginTop="50">
            You can pay with Visa, Mastercard, and American Express. All prices
            are in USD. Invoiced billing is available on the Enterprise plan.
          </Text>
        </div>
      </div>
      <div id={styles.bgdiv}>
        <Image src={cta} position="absolute" id={styles.bgimage} />
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
        <Text id={styles.textp}>
          Lumen5 is a video creation software that helps marketers,
          <br /> publishers, and brands create video content in a breeze,
          <br /> without any technical expertise.
        </Text>
        <Button id={styles.button1}>Sign up free</Button>
      </div>
    </div>
  );
};

export default Pricing;
