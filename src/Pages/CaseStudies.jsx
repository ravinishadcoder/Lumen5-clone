import React from "react";
import styles from "./casestudiesstyle.module.css";
import { Button } from "@chakra-ui/react";

const CaseStudies = () => {
  return<>
  <div className={styles.mainCaseStudies}>
  <div style={{ marginTop:" 110px"}}><h1 className={styles.heading}>Case Studies & Customer Stories</h1></div>
  
  <div className={styles.siemens}>
      <div className={styles.para}>
          <h1 className={styles.heading}>How Siemens</h1> 
          <h1 className={styles.heading}>Transformed Digital</h1>
          <h1 className={styles.heading}>Communucations with</h1>
          <h1 className={styles.heading}>Lumen5</h1>
          <br/><br/>
          <p style={{fontSize:"20px",lineHeight:"31px"}}>“With the traditional agency, the time is usually about one week. But with Lumen5, it’s cut down from weeks to hours.”</p>
          <br/>
          <p style={{fontSize:"16px",lineHeight:"28px"}}>—Michelle Hsiao, Visual Content Director at Siemens AG</p>
          <br/>
          <Button  size={'lg'}fontSize={'md'} rounded={'full'}  bg={'#5846f6'} color={'white'} _hover={{ bg: '#4e3ded' }} _focus={{ bg: '#4e3ded' }}>Read Case Study</Button>
      </div>
      <div className={styles.image}><img src="https://images.ctfassets.net/5ltrds677kah/6bmIUsDjceTBBuLyIlQtPd/b4770d287c2a1e21de19eab7efeec52f/siemens1.png?w=800"/></div>
  </div>
  <div className={styles.grid}>
      <div><img src="https://images.ctfassets.net/5ltrds677kah/6bmIUsDjceTBBuLyIlQtPd/b4770d287c2a1e21de19eab7efeec52f/siemens1.png?w=400"/>
      <h2 className={styles.heading2}>Siemens</h2>
      <p>How Siemens Transformed Digital Communications With Lumen5</p></div>
      <div><img src="https://images.ctfassets.net/5ltrds677kah/5Yp4i7R522ebbvbJXtnwS/c35344519394d88875664257119c8880/berkshire4.png?w=400"/>
      <h2 className={styles.heading2}>Berkshire Hathaway</h2>
      <p>How Berkshire Hathaway HomeServices created 500 videos in 10 months</p></div>
      <div><img src="https://images.ctfassets.net/5ltrds677kah/4CEMG9nD5szpcNtznePJWx/57c08b81180c494eed8c0021ce72924a/mondadori1.png?w=400"/>
      <h2 className={styles.heading2}>Mondadori</h2>
      <p>Learn how Mondadori doubled social media engagement and tripled their video views with Lumen5.</p></div>
      <div><img src="https://images.ctfassets.net/5ltrds677kah/6qQh4D8FV5Tldbgr1D2XOc/278756ab5351d4952fe7ce26d72a7f3c/cms1.png?w=400"/>
      <h2 className={styles.heading2}>CMS Law</h2>
      <p>How Lumen5 is helping CMS get in front of their audience and reach their video marketing goals</p></div>
      <div><img src="https://images.ctfassets.net/5ltrds677kah/1PZVc3Lm5w8CdYIROtKYdQ/024aa5c270749e239a4603207f10667d/ncstate1.png?w=400"/>
      <h2 className={styles.heading2}>NC State University</h2>
      <p>How Lumen5 is helping NC State University boost their online presence and drive more traffic</p></div>
      <div><img src="https://images.ctfassets.net/5ltrds677kah/sHpNEfrQNeXZZPBN9SqAY/8a7485933bddc3ab99d832342f9b794f/taxevity1.png?w=400"/>
      <h2 className={styles.heading2}>Taxevity</h2>
      <p>How Lumen5 is helping Taxevity with brand consistency</p></div>
      <div><img src="https://images.ctfassets.net/5ltrds677kah/1vY85VxpSTeHf5v8JHpGTj/9324f772f8a894e54243862414863c7f/mitsubishi1.png?w=400"/>
      <h2 className={styles.heading2}>Mitsubishi</h2>
      <p>How Lumen5 is helping MHI expand their content strategy and speed up their workflow</p></div>
      <div><img src="https://images.ctfassets.net/5ltrds677kah/7IVEpPjwhpbvaW9GLk9okQ/457f4058deb29b711941ef66dfcff7e6/dnv1.png?w=400"/>
      <h2 className={styles.heading2}>DNV</h2>
      <p>How Lumen5 helped DNV GL level up their social media game</p></div>
  </div>
  <div>
      <div className={styles.signupcard}>
          <div className={styles.heading} style={{color:"white"}}>Join 800,000+ companies that are using Lumen5 to tell their stories.</div>
          <div style={{color:"white",fontWeight:"400"}} className={styles.heading2}>Lumen5 is a video creation software that helps marketers, publishers, and brands create video content in a breeze, without any technical expertise.</div>
          <br/>
          <Button size={'lg'}fontSize={'md'} rounded={'full'}  bg={'white'} color={'#5846f6'} _hover={{ bg: 'white.400' }} _focus={{ bg: 'white.400' }}>Sign up free</Button>
      </div>
  </div>
  </div>
  </>
}

export default CaseStudies;


