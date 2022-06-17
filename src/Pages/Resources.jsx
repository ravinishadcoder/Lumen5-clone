import React from "react";
import styles from "./casestudiesstyle.module.css";
import resoursestyle from "./resourcesstyle.module.css";
import arrowright from "../logos/arrow-right.svg";
import arrow from "../logos/caret-right-fill.svg";
import { Button } from "@chakra-ui/react";
export const Resources=()=>{
    return<>
    <div style={{ marginTop:" 160px"}}>
        <h1 className={styles.heading}>podcasts</h1>
    </div>
    <div className={styles.siemens}>
        <div style={{width:"50%",textAlign:"justify",padding:"40px"}}>
            <h5 className={resoursestyle.links}><a href="https://pod.co/supercharge-marketing/win-the-content-landscape-how-to-repurpose-your-content-in-a-digital-world"><img src={arrow}/>Episode 1</a> 
            | Win the Content Landscape: How to repurpose your content in a digital world</h5>
            <h5 className={resoursestyle.links}><a href="https://pod.co/supercharge-marketing/win-the-content-landscape-how-to-repurpose-your-content-in-a-digital-world"><img src={arrow}/>Episode 2</a> 
            | Virtual Events as the New Normal: How to build a successful event and drive pipeline</h5>
            <h5 className={resoursestyle.links}><a href="https://pod.co/supercharge-marketing/win-the-content-landscape-how-to-repurpose-your-content-in-a-digital-world"><img src={arrow}/>Episode 3</a> 
            | The Future of PR: How to bypass the traditional channels and stand out</h5>
        </div>
        <div style={{width:"50%",textAlign:"justify",padding:"40px"}}>
        <h5 className={resoursestyle.links}><a href="https://pod.co/supercharge-marketing/win-the-content-landscape-how-to-repurpose-your-content-in-a-digital-world"><img src={arrow}/>Episode 4</a> 
            | The Evolution of Field Marketing: How to create a personalized experience in a digital world</h5>
            <h5 className={resoursestyle.links}><a href="https://pod.co/supercharge-marketing/win-the-content-landscape-how-to-repurpose-your-content-in-a-digital-world"><img src={arrow}/>Episode 5</a> 
            | Thought Leadership as a Buzzword: How to elevate your content strategy</h5>
            <h5 className={resoursestyle.links}><a href="https://pod.co/supercharge-marketing/win-the-content-landscape-how-to-repurpose-your-content-in-a-digital-world"><img src={arrow}/>Episode 6</a> 
            | Emotion in the B2B World: How marketers can increase conversions using emotional targeting</h5>
        </div>
    </div>
    <div className={resoursestyle.cardscontainer}>
    <h1 className={styles.heading}>Ebooks</h1> 
    <div className={resoursestyle.cards}>
        <div><img src="https://images.ctfassets.net/5ltrds677kah/64mQMnEFOqdT3D7YUM3V4X/6b719832235af2d1775172133d902f0d/Resources_page_template__4_.png?w=300"/>
        <p style={{marginLeft:"15px"}}>Ebook</p>
        <h2 className={resoursestyle.cardheading}>The Key Ingredients of</h2>
        <h2 className={resoursestyle.cardheading}>Thought Leadership</h2>
        <br/>
        <p style={{textAlign:"right",marginLeft:"50%",display:"flex"}}>click to download <img src={arrowright}/></p>
        </div>
        <div><img src="https://images.ctfassets.net/5ltrds677kah/2YUdT1ZVduLIx8Hk2SeFwy/ebe70f34043488934352a7c31294ce45/Resources_page_template__5_.png?w=300"/>
        <p style={{marginLeft:"15px"}}>Ebook</p>
        <h2 className={resoursestyle.cardheading}>The Art of Video</h2>
        <h2 className={resoursestyle.cardheading}>Storytelling</h2>
        <br/>
        <p style={{textAlign:"right",marginLeft:"50%",display:"flex"}}>click to download <img src={arrowright}/></p>
        </div>
        <div><img src="https://images.ctfassets.net/5ltrds677kah/2zJ4xb9KJgkU3qHPpNDd9Z/9f3709448d73cfd112d5461582c90334/Resources_page_template__6_.png?w=300"/>
        <p style={{marginLeft:"15px"}}>Ebook</p>
        <h2 className={resoursestyle.cardheading}>Ultimate Guide to</h2>
        <h2 className={resoursestyle.cardheading}>Repurposing Content</h2>
        <br/>
        <p style={{textAlign:"right",marginLeft:"50%",display:"flex"}}>click to download <img src={arrowright}/></p>
        </div>
        </div> 
    </div>
    <div className={resoursestyle.cardscontainer}>
    <h1 className={styles.heading}>Webinars</h1> 
    <div className={resoursestyle.cards}>
        <div><img src="https://images.ctfassets.net/5ltrds677kah/4NQs2ZtxmKMYU3YYOmR2DA/40365856ac4c621c6ea655b1d2fee359/Resources_page_template.png?w=300"/>
        <p style={{marginLeft:"15px"}}>Webinar</p>
        <h2 className={resoursestyle.cardheading}>How Top Marketing</h2>
        <h2 className={resoursestyle.cardheading}>Leaders Make Thought</h2>
        <h2 className={resoursestyle.cardheading}>Leadership Work</h2>
        <br/>
        <p style={{textAlign:"right",marginLeft:"50%",display:"flex"}}>click to watch <img src={arrowright}/></p>
        </div>
        <div><img src="https://images.ctfassets.net/5ltrds677kah/1w0oTSZNDPvlgLp3s0wYj6/0779dc7d979dc9142b6c809999be7075/Resources_page_template__8_.png?w=300"/>
        <p style={{marginLeft:"15px"}}>Webinar</p>
        <h2 className={resoursestyle.cardheading}>scaling your Content</h2>
        <h2 className={resoursestyle.cardheading}>Strategy Through</h2>
        <h2 className={resoursestyle.cardheading}>Repurposing Content</h2>
        <br/>
        <p style={{textAlign:"right",marginLeft:"50%",display:"flex"}}>click to watch <img src={arrowright}/></p>
        </div>
        <div><img src="https://images.ctfassets.net/5ltrds677kah/42w1kZA7TzhZNt59dVod9C/5d8181173b18a4c3e0cd69b52120ccc4/Resources_page_template__9_.png?w=300"/>
        <p style={{marginLeft:"15px"}}>Webinar</p>
        <h2 className={resoursestyle.cardheading}>Our next Webinar is</h2>
        <h2 className={resoursestyle.cardheading}>being planned and will be</h2>
        <h2 className={resoursestyle.cardheading}>announced soon</h2>
        <br/>
        <p style={{textAlign:"right",marginLeft:"50%",display:"flex"}}>coming soon</p>
        </div>
        </div> 
    </div>
    <div>
        <div className={styles.signupcard}>
            <div className={styles.heading} style={{color:"white"}}>Join 800,000+ companies that are using Lumen5 to tell their stories.</div>
            <div style={{color:"white",fontWeight:"400"}} className={styles.heading2}>Lumen5 is a video creation software that helps marketers, publishers, and brands create video content in a breeze, without any technical expertise.</div>
            <br/>
            <Button size={'lg'}fontSize={'md'} rounded={'full'}  bg={'white'} color={'#5846f6'} _hover={{ bg: 'white.400' }} _focus={{ bg: 'white.400' }}>Sign up free</Button>
        </div>
    </div>
    </>
};