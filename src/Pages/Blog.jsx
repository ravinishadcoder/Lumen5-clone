import React from 'react';
import styles from "./blogstyle.module.css";
import {Avatar} from "@chakra-ui/react";
import facebook from "../logos/facebook.png";
import linkedin from "../logos/linkedin.png";
import twitter from "../logos/twitter.svg";
import linklogo from "../logos/link-45deg.svg";
const Blog = () => {
  return<>
{/* 1 */}
 <div className={styles.flex} >  

    <div className={styles.imgDiv}>

       <img className={styles.firstImg} src="https://lumen5.com/learn/wp-content/uploads/2022/06/Blog-Mask-Turquoise-Triangle-600x500.png"/>
        <div className={styles.card}>
                <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p> </div>
                <br/>
                <div><a href="#">The Rise of Long-Form Video: A New Opportunity for B2B Marketers</a></div>
                <br/>
                <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                <div style={{display:"flex",gap:"10px"}}>
                <div>
                    <Avatar name='Dan Abrahmov' src='https://lumen5.com/learn/wp-content/uploads/2022/05/mquon-50x50.png'/>
                </div>
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
        {/* 2nd div */}
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
        </div>
        

</div>

{/* 2 */} 

<div style={{padding:"40px"}}><h1 className={styles.heading}>Level up your marketing</h1>
        <br/>
        <div className={styles.btndiv}>
            <div>Marketing Strategy</div>
            <div>Market Research</div>
            <div>Podcasts & Webinars</div>
        </div>
        <br/>
        <div className={styles.grid}>
            <div>
                 <div className={styles.p} style={{width:"fit-content",margin:"auto"}}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p></div>
                 <br/>
                <div><a href="#">The Rise of Long-Form Video: A New Opportunity for B2B Marketers</a></div>
                <img src="https://lumen5.com/learn/wp-content/uploads/2022/06/Blog-Mask-Turquoise-Triangle-390x260.png"/>
            </div>
            <div>
                <div className={styles.p} style={{width:"fit-content",margin:"auto"}}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p></div>
                 <br/>
                <div><a href="#">3 Tips To Repurpose B2B Video Content To Improve Video Marketing Strategies</a></div>
                <img src="https://lumen5.com/learn/wp-content/uploads/2022/05/3-Tips-To-Repurpose-B2B-Video-Content-To-Improve-Video-Marketing-Strategies-390x260.png"/>
            </div>
            <div>
                <div className={styles.p} style={{width:"fit-content",margin:"auto"}}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p></div>
                <br/>
                <div><a href="#">Why Video Should Be a Big Part of Your B2B Business Strategy in 2022</a></div>
                <img src="https://lumen5.com/learn/wp-content/uploads/2022/03/Why-Video-Should-Be-a-Big-Part-of-Your-B2B-Business-Strategy-in-2022-3-390x260.jpg"/>
            </div>
        </div>
</div> 

{/* 3 */}

<div style={{padding:"40px",backgroundColor:"#f0f2f5"}}><h1 className={styles.heading}>Giudes to help you grow</h1>
    <br/>
        <div className={styles.btndiv}>
            <div>Guides & Tips</div>
            <div>Reviews & Tools</div>
        </div>
        <br/>
        <div style={{display:"flex",gap:"30px"}}>
            <div style={{width:"40%"}}>
                <div className={styles.imgDiv} style={{width:"100%"}}>

                    <img className={styles.firstImg} src="https://lumen5.com/learn/wp-content/uploads/2022/05/3-Tips-To-Repurpose-B2B-Video-Content-To-Improve-Video-Marketing-Strategies-495x300.png"/>
                    <div className={styles.card}>
                        <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p> </div>
                        <br/>
                        <div><a href="#">3 Tips To Repurpose B2B Video Content To Improve Video Marketing Strategies</a></div>
                        <br/>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                        <div style={{display:"flex",gap:"10px"}}>
                        <div>
                        <Avatar name='Dan Abrahmov' src='https://lumen5.com/learn/wp-content/uploads/2022/05/mquon-50x50.png'/>
                        </div>
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
                <div className={styles.imgDiv} style={{width:"100%"}}>

                    <img className={styles.firstImg} src="https://lumen5.com/learn/wp-content/uploads/2022/03/Repurpose-Your-Zoom-Calls-to-Fuel-Your-Content-Marketing-Efforts-1-495x300.jpg"/>
                    <div className={styles.card}>
                        <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p> </div>
                        <br/>
                        <div><a href="#">Repurpose Your Zoom Calls to Fuel Your Content Marketing Efforts</a></div>
                        <br/>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                        <div style={{display:"flex",gap:"10px"}}>
                        <div>
                        <Avatar name='Dan Abrahmov' src='https://lumen5.com/learn/wp-content/uploads/2022/05/mquon-50x50.png'/>
                        </div>
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
                
            </div>
            <div style={{width:"60%"}}>
                <div className={styles.imgDiv} style={{width:"100%"}}>

                    <img className={styles.firstImg} src="https://lumen5.com/learn/wp-content/uploads/2021/06/How-to-Increase-Your-Video-Marketing-Conversion-Rates-705x660.jpg"/>
                    <div className={styles.card}>
                        <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p> </div>
                        <br/>
                        <div><a href="#">How to Increase Your Video Marketing Conversion Rates</a></div>
                        <br/>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                        <div style={{display:"flex",gap:"10px"}}>
                        <div>
                        <Avatar name='Dan Abrahmov' src='https://lumen5.com/learn/wp-content/uploads/2022/05/mquon-50x50.png'/>
                        </div>
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
            </div>
        </div>
</div>

{/* 4 */}
<div style={{padding:"40px"}}><h1 className={styles.heading}>Lumen5 Stories</h1>
        <br/>
        <div style={{display:"flex",gap:"30px"}}>
            <div style={{width:"50%"}}>
                <div className={styles.imgDiv} style={{width:"100%"}}>

                    <img className={styles.firstImg} src="https://lumen5.com/learn/wp-content/uploads/2022/06/Blog-Mask-Turquoise-Triangle-600x500.png"/>
                    <div className={styles.cardabs}>
                        <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p> </div>
                        <br/>
                        <div><a href="#">The Rise of Long-Form Video: A New Opportunity for B2B Marketers</a></div>
                        <br/>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                        <div style={{display:"flex",gap:"10px"}}>
                        <div>
                        <Avatar name='Dan Abrahmov' src='https://lumen5.com/learn/wp-content/uploads/2022/05/mquon-50x50.png'/>
                        </div>
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
            </div>
            <div className={styles.gridbox}>
                <div>
                    <img src="https://lumen5.com/learn/wp-content/uploads/2022/01/Kicking-it-into-Hyper-Growth-in-2022-at-Lumen5-300x200.jpg"/>
                    <br/>
                    <div className={styles.p} style={{width:"fit-content"}}> <p>Lumen5 Stories</p></div>
                  
                    <div><a href="#">Kicking it into Hyper Growth in 2022 at Lumen5</a></div>
                    
                </div>
                <div>
                    <img src="https://lumen5.com/learn/wp-content/uploads/2021/10/Giving-Thanks-%E2%80%93-How-Lumen5-is-Supporting-Local-Charities-With-Video-Marketing-285x190.jpg"/>
                    <br/>
                    <div className={styles.p} style={{width:"fit-content"}}> <p>Lumen5 Stories</p> </div>
                   
                    <div><a href="#">Giving Thanks – How Lumen5 is Supporting Local Charities With Video Marketing</a></div>
                    
                </div>
                <div>
                    <img src="https://lumen5.com/learn/wp-content/uploads/2021/10/No-Tricks-Only-Treats-for-Lumen5-Users-This-October-285x190.jpg"/>
                    <br/>
                    <div className={styles.p} style={{width:"fit-content"}}> <p>Lumen5 Stories</p></div>
                    
                    <div><a href="#">No Tricks, Only Treats for Lumen5 Users This October</a></div>
                    
                </div>
                <div>
                    <img src="https://lumen5.com/learn/wp-content/uploads/2021/09/How-Lumen5-Supports-Thought-Leadership-285x190.jpg"/>
                    <br/>
                    <div className={styles.p} style={{width:"fit-content"}}> <p>Lumen5 Stories</p></div>
                    
                    <div><a href="#">How Lumen5 Supports Thought Leadership</a></div>
                   
                </div>
            </div>
        </div>

        <div className={styles.gridbox} style={{display:"flex",gap:"30px",width:"100%"}}>
                <div style={{width:"25%"}}>
                    <img src="https://lumen5.com/learn/wp-content/uploads/2021/09/Back-to-Work-Video-Product-Update-for-You-285x190.jpg"/>
                    <br/>
                    <div className={styles.p} style={{width:"fit-content"}}> <p>Lumen5 Stories</p></div>
                  
                    <div><a href="#">Back to Work Video Product Update for You</a></div>
                    
                </div>
                <div style={{width:"25%"}}>
                    <img src="https://lumen5.com/learn/wp-content/uploads/2021/04/Templates_Launch-285x190.jpg"/>
                    <br/>
                    <div className={styles.p} style={{width:"fit-content"}}> <p>Lumen5 Stories</p> </div>
                   
                    <div><a href="#">Introducing the Next Generation of Lumen5 Templates</a></div>
                    
                </div>
                <div style={{width:"25%"}}>
                    <img src="https://lumen5.com/learn/wp-content/uploads/2021/01/How-to-Achieve-Technical-Excellence-with-a-Hybrid-Team-Model-285x190.jpg"/>
                    <br/>
                    <div className={styles.p} style={{width:"fit-content"}}> <p>Lumen5 Stories</p></div>
                    
                    <div><a href="#">How to Achieve Technical Excellence with a Hybrid Team Model</a></div>
                    
                </div>
                <div style={{width:"25%"}}>
                    <img src="https://lumen5.com/learn/wp-content/uploads/2020/12/How-Lumen5-uses-AI-to-Solve-Problems-285x190.jpg"/>
                    <br/>
                    <div className={styles.p} style={{width:"fit-content"}}> <p>Lumen5 Stories</p></div>
                    
                    <div><a href="#">How Lumen5 uses AI to Solve Problems</a></div>
                   
                </div>
            </div>

</div>

{/* 5 */}
<div style={{padding:"40px"}}><h1 className={styles.heading}>Recent Posts</h1>
    <br/>
    <div>
        <div style={{display:"flex",gap:"30px"}}>
            <div style={{width:"25%"}}>
                <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src="https://lumen5.com/learn/wp-content/uploads/2022/06/Blog-Mask-Turquoise-Triangle-390x260.png"/>
            </div>
            <div style={{width:"75%"}}>
                <div className={styles.cardabs} style={{border:"0.5px solid #f0f2f5"}}>
                        <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p> </div>
                        <br/>
                        <div><a href="#">The Rise of Long-Form Video: A New Opportunity for B2B Marketers</a></div>
                        <br/>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                        <div style={{display:"flex",gap:"10px"}}>
                        <div>
                        <Avatar name='Dan Abrahmov' src='https://lumen5.com/learn/wp-content/uploads/2022/05/mquon-50x50.png'/>
                        </div>
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
        </div>
    </div>
    <br/>
    <div>
        <div style={{display:"flex",gap:"30px"}}>
            <div style={{width:"25%"}}>
                <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src="https://lumen5.com/learn/wp-content/uploads/2022/06/supercharge-1024-%C3%97-683-px-390x260.png"/>
            </div>
            <div style={{width:"75%"}}>
                <div className={styles.cardabs} style={{border:"0.5px solid #f0f2f5"}}>
                        <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p> </div>
                        <br/>
                        <div><a href="#">The Competitive Landscape of B2B Marketing: Supercharge Your B2B Content Strategy [Podcast Recommendation]</a></div>
                        <br/>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                        <div style={{display:"flex",gap:"10px"}}>
                        <div>
                        <Avatar name='Dan Abrahmov' src='https://lumen5.com/learn/wp-content/uploads/2022/04/download-50x50.png'/>
                        </div>
                        <div>
                        <div style={{fontWeight:"700",fontSize:"16px",lineHeight:"20px"}}>Lumen5 Team</div>
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
        </div>
    </div>
    <br/>
    <div>
        <div style={{display:"flex",gap:"30px"}}>
            <div style={{width:"25%"}}>
                <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src="https://lumen5.com/learn/wp-content/uploads/2022/06/Blog-Mask-Orange-Triangle-390x260.png"/>
            </div>
            <div style={{width:"75%"}}>
                <div className={styles.cardabs} style={{border:"0.5px solid #f0f2f5"}}>
                        <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p> </div>
                        <br/>
                        <div><a href="#">Improve Your B2B Marketing Strategies with These 8 Video Types</a></div>
                        <br/>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                        <div style={{display:"flex",gap:"10px"}}>
                        <div>
                        <Avatar name='Madeline Quon' src='https://lumen5.com/learn/wp-content/uploads/2022/05/mquon-50x50.png'/>
                        </div>
                        <div>
                        <div style={{fontWeight:"700",fontSize:"16px",lineHeight:"20px"}}>Lumen5 Team</div>
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
        </div>
    </div>
    <br/>
    <div>
        <div style={{display:"flex",gap:"30px"}}>
            <div style={{width:"25%"}}>
                <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src="https://lumen5.com/learn/wp-content/uploads/2022/05/3-Tips-To-Repurpose-B2B-Video-Content-To-Improve-Video-Marketing-Strategies-390x260.png"/>
            </div>
            <div style={{width:"75%"}}>
                <div className={styles.cardabs} style={{border:"0.5px solid #f0f2f5"}}>
                        <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p> </div>
                        <br/>
                        <div><a href="#">3 Tips To Repurpose B2B Video Content To Improve Video Marketing Strategies</a></div>
                        <br/>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                        <div style={{display:"flex",gap:"10px"}}>
                        <div>
                        <Avatar name='Madeline Quon' src='https://lumen5.com/learn/wp-content/uploads/2022/05/mquon-50x50.png'/>
                        </div>
                        <div>
                        <div style={{fontWeight:"700",fontSize:"16px",lineHeight:"20px"}}>Lumen5 Team</div>
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
        </div>
    </div>
    <br/>
    <div>
        <div style={{display:"flex",gap:"30px"}}>
            <div style={{width:"25%"}}>
                <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src="https://lumen5.com/learn/wp-content/uploads/2022/03/Why-Video-Should-Be-a-Big-Part-of-Your-B2B-Business-Strategy-in-2022-3-390x260.jpg"/>
            </div>
            <div style={{width:"75%"}}>
                <div className={styles.cardabs} style={{border:"0.5px solid #f0f2f5"}}>
                        <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p> </div>
                        <br/>
                        <div><a href="#">Why Video Should Be a Big Part of Your B2B Business Strategy in 2022</a></div>
                        <br/>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                        <div style={{display:"flex",gap:"10px"}}>
                        <div>
                        <Avatar name='Madeline Quon' src='https://lumen5.com/learn/wp-content/uploads/2022/05/mquon-50x50.png'/>
                        </div>
                        <div>
                        <div style={{fontWeight:"700",fontSize:"16px",lineHeight:"20px"}}>Lumen5 Team</div>
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
        </div>
    </div>
    <br/>
    <div>
        <div style={{display:"flex",gap:"30px"}}>
            <div style={{width:"25%"}}>
                <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src="https://lumen5.com/learn/wp-content/uploads/2022/03/Shapes_3-390x260.jpg"/>
            </div>
            <div style={{width:"75%"}}>
                <div className={styles.cardabs} style={{border:"0.5px solid #f0f2f5"}}>
                        <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p> </div>
                        <br/>
                        <div><a href="#">Why Decentralization of Content is a Good Strategy</a></div>
                        <br/>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                        <div style={{display:"flex",gap:"10px"}}>
                        <div>
                        <Avatar name='Madeline Quon' src='https://lumen5.com/learn/wp-content/uploads/2022/05/mquon-50x50.png'/>
                        </div>
                        <div>
                        <div style={{fontWeight:"700",fontSize:"16px",lineHeight:"20px"}}>Lumen5 Team</div>
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
        </div>
    </div>
    <br/>
    <div>
        <div style={{display:"flex",gap:"30px"}}>
            <div style={{width:"25%"}}>
                <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src="https://lumen5.com/learn/wp-content/uploads/2022/03/Repurpose-Your-Zoom-Calls-to-Fuel-Your-Content-Marketing-Efforts-1-300x200.jpg"/>
            </div>
            <div style={{width:"75%"}}>
                <div className={styles.cardabs} style={{border:"0.5px solid #f0f2f5"}}>
                        <div className={styles.p}> <p>Lumen5 Stories,</p> <p>Marketing Strategy</p> </div>
                        <br/>
                        <div><a href="#">Repurpose Your Zoom Calls to Fuel Your Content Marketing Efforts</a></div>
                        <br/>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                        <div style={{display:"flex",gap:"10px"}}>
                        <div>
                        <Avatar name='Regina Contreras' src='https://lumen5.com/learn/wp-content/uploads/2022/04/T024FG18M-U02QBKNBP9U-585c2d74150f-512-50x50.png'/>
                        </div>
                        <div>
                        <div style={{fontWeight:"700",fontSize:"16px",lineHeight:"20px"}}>Lumen5 Team</div>
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
        </div>
    </div>
</div>

    </>
};

export default Blog;