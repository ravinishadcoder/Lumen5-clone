import React from 'react';
import styles from "./blogstyle.module.css";
const Blog = () => {
  return (
    <>
     <div className={styles.flex}>
        <div style={{width:"60%"}}><img src="https://lumen5.com/learn/wp-content/uploads/2022/06/Blog-Mask-Turquoise-Triangle-600x500.png"/>
        <div className={styles.card}>
           <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p></div>
            <div><a href="#">The Rise of Long-Form Video: A New Opportunity for B2B Marketers</a></div>
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
    </>
  )
}

export default Blog;