import { Button, Checkbox, Input, Select, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./upgrade.module.css";
const Upgrade = () => {
  let data = JSON.parse(localStorage.getItem("price"));
  let amount = 0;
  let duration = "";
  if(data.amount=="$59 USD"){
    amount = 708.00;
    duration="per year"
  }
  if(data.amount=="$199 USD"){
    amount=2388.00;
    duration="per year"
  }
  if(data.amount=="$79 USD"){
    amount=79;
    duration="per month"
  }
  if(data.amount=="$149 USD"){
    amount=149;
    duration="per month"
  }
  console.log(amount)
  return (
    <div>
      <div className={styles.upgrade}>
        <div style={{ padding: "30px" }}>
          <div style={{ textAlign: "start", marginTop: "40px" }}>
            <Text color="gray">Subscribe to Starter - v2 (Annual)</Text>
            <Text fontSize="3xl" fontWeight="500">
              US$ {amount}.00 <small style={{fontWeight:"400",fontSize:"15px"}}>{duration}</small>
            </Text>
          </div>

          <div
            style={{
              display: "flex",
              width: "500px",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <div>
              <Text fontWeight="500">Starter - v2 (Annual)</Text>
              <Text fontSize="sm">Billed yearly</Text>
            </div>
            <div>
              <Text fontWeight="500">US${amount}.00</Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <div>
              <Text fontWeight="500">Subtotal</Text>
            </div>
            <div>
              <Text fontWeight="500">US${amount}.00</Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            {/* <hr /> */}
            <div>
              <Text>Tax</Text>
            </div>
            {/* <hr /> */}
            <div>
              <Text>US$0.00</Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <div>
              <Text fontWeight="500">Total due today</Text>
            </div>
            <div>
              <Text fontWeight="500">US${amount}.00</Text>
            </div>
          </div>
        </div>
        <div className={styles.Payment}>
          <div>
            <Text
              mb="8px"
              textAlign="start"
              fontSize="2xl"
              fontWeight="500"
              marginTop="30px"
            >
              Pay with Card
            </Text>
            <Input placeholder="email" size="md" backgroundColor="#a4a7ab" />
            <div>
              <Text
                style={{ marginTop: "20px", textAlign: "start", color: "gray" }}
              >
                Card information
              </Text>
              <div className={styles.cardName}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Input
                    placeholder="123 456 789"
                    size="sm"
                    borderTop="none"
                    borderRight="none"
                    borderLeft="none"
                  />
                  <span>
                    <img
                      src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg"
                      alt=""
                    />
                  </span>
                  <span>
                    <img
                      src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg"
                      alt=""
                    />
                  </span>
                  <span>
                    <img
                      src="https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg"
                      alt=""
                    />
                  </span>
                  <span>
                    <img
                      src="https://js.stripe.com/v3/fingerprinted/img/unionpay-8a10aefc7295216c338ba4e1224627a1.svg"
                      alt=""
                    />
                  </span>
                </div>

                <div style={{ display: "flex" }}>
                  <Input
                    placeholder="MM/YY"
                    size="sm"
                    borderTop="none"
                    borderBottom="none"
                    borderRight="none"
                    borderLeft="none"
                  />
                  <Input
                    placeholder="CVC"
                    size="sm"
                    borderTop="none"
                    borderBottom="none"
                  />
                </div>
              </div>
              <div>
                <Text
                  mb="8px"
                  style={{
                    marginTop: "20px",
                    textAlign: "start",
                    color: "gray",
                  }}
                >
                  Name on Card
                </Text>
                <Input placeholder="name" size="md" />
              </div>
              <div className={styles.billing}>
                <Text
                  mb="8px"
                  style={{
                    marginTop: "20px",
                    textAlign: "start",
                    color: "gray",
                  }}
                >
                  Billing Address
                </Text>
                <Select placeholder="Select option">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Input placeholder="Address" size="sm" />
                <Text color="gray" textAlign="start">
                  enter address manually
                </Text>
              </div>
              <div className={styles.saveInfo}>
                <div>
                  <Checkbox>Save my info for secure 1-click checkout</Checkbox>
                  <br />
                  <small>
                    pay faster on Lumen5 Technologies Ltd and thousands of sites
                  </small>
                </div>
              </div>
              <div style={{ marginTop: "50px" }}>
                <Button size="lg" backgroundColor="blue" width="100%">
                  Subscribe
                </Button>
              </div>
              <br />
              <small>
                By confirming your subscription, you allow Lumen5 Technologies
                Ltd to charge your card for this payment and future payments in
                accordance with their terms.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
