import React from 'react';
import styles from "./blogstyle.module.css";
import {Avatar} from "@chakra-ui/react";
import facebook from "../logos/facebook.png";
import linkedin from "../logos/linkedin.png";
import twitter from "../logos/twitter.svg";
import linklogo from "../logos/link-45deg.svg";
const Blog = () => {
  return<div className={styles.main}>
     <div className={styles.flex} style={{border:"2px solid red",height:"auto"}}>
        <div style={{width:"60%"}}><img src="https://lumen5.com/learn/wp-content/uploads/2022/06/Blog-Mask-Turquoise-Triangle-600x500.png"/>
       {/* card */}
        <div className={styles.card}>
           <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p></div>
           <br/>
            <div><a href="#">The Rise of Long-Form Video: A New Opportunity for B2B Marketers</a></div>
            <br/>
            <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
            <div style={{display:"flex",gap:"10px"}}>
                <div>
            <Avatar name='Dan Abrahmov' src='https://lumen5.com/learn/wp-content/uploads/2022/05/mquon-50x50.png' /></div>
            <div>
            <div style={{fontWeight:"700",fontSize:"16px",lineHeight:"20px"}}>Madeline Quon</div>
            <div style={{fontSize:"12px",lineHeight:"18px"}}>June 15,2022 .7min read</div>
            </div>
            </div>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}} className={styles.logo}>
                <a href="#"><img src={facebook}/></a>
                <a href="#"><img src={twitter}/></a>
                <a href="#"><img src={linkedin}/></a>
                <a href="#"><img src={linklogo}/></a>
            </div>
            </div>
        </div>
        </div>
        <div className={styles.col}>
            <div className={styles.row}>
                <div><img src="https://lumen5.com/learn/wp-content/uploads/2022/06/supercharge-1024-%C3%97-683-px-150x150.png"/></div>
                <div><a href="https://lumen5.com/learn/the-competitive-landscape-of-b2b-marketing-supercharge-your-b2b-content-strategy-podcast-recommendation/">The Competitive Landscape of B2B Marketing:Supercharge Your B2B Content Strategy [Podcast Recommendation]</a></div>
                
            </div>
            <hr/>
            <div className={styles.row}>
                <div><img src="https://lumen5.com/learn/wp-content/uploads/2022/06/Blog-Mask-Orange-Triangle-150x150.png"/></div>
                <div><a href="https://lumen5.com/learn/the-competitive-landscape-of-b2b-marketing-supercharge-your-b2b-content-strategy-podcast-recommendation/">Improve Your B2B Marketing Strategies with These 8 Video Types</a></div>
                
            </div>
            <hr/>
            <div className={styles.row}>
                <div><img src="https://lumen5.com/learn/wp-content/uploads/2022/05/3-Tips-To-Repurpose-B2B-Video-Content-To-Improve-Video-Marketing-Strategies-150x150.png"/></div>
                <div><a href="https://lumen5.com/learn/the-competitive-landscape-of-b2b-marketing-supercharge-your-b2b-content-strategy-podcast-recommendation/">3 Tips To Repurpose B2B Video Content To Improve Video Marketing Strategies</a></div>
                
            </div>
            <hr/>
            <div className={styles.row}>
                <div><img src="https://lumen5.com/learn/wp-content/uploads/2022/03/Why-Video-Should-Be-a-Big-Part-of-Your-B2B-Business-Strategy-in-2022-3-150x150.jpg"/></div>
                <div><a href="https://lumen5.com/learn/the-competitive-landscape-of-b2b-marketing-supercharge-your-b2b-content-strategy-podcast-recommendation/">Why Video Should Be a Big Part of Your B2B Business Strategy in 2022</a></div>
                
            </div>
            <hr/>
        </div>
        
    </div>
    <div style={{border:"1px solid red"}}><h1 className={styles.heading}>Level up your marketing</h1>
    <div className={styles.grid}>
        <div>
        <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p></div>
           <br/>
            <div><a href="#">The Rise of Long-Form Video: A New Opportunity for B2B Marketers</a></div>
            <img src="https://lumen5.com/learn/wp-content/uploads/2022/06/Blog-Mask-Turquoise-Triangle-390x260.png"/>
        </div>
        <div></div>
        <div></div>
    </div>
    </div> 
    </div>
};

export default Blog;