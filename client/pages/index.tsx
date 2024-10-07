import React from "react";
import data from "./data.json";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import imggg from "../public/imgg.jpeg";
import { FaCircleCheck } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Carousel } from "flowbite-react";
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareRss } from "react-icons/fa6";
import Link from 'next/link';
import { FaUserLarge } from "react-icons/fa6";
import Navbar from "./navbar";



export default function Home() {
  
  return (
    <>
<Navbar />

<section className="Hero_Section">
<div className="row" style={{maxWidth:"100%"}}>
        <div className="col-lg-6" id="head" style={{marginTop:"90px"}}>
          <h1  style={{fontSize:"40px",fontFamily: "Orbitron, sans-serif",fontOpticalSizing: "auto",fontWeight:"800",fontStyle: "normal"}} className="big-heading motion">{data.hero.headline}</h1><br/>
          <h3 style={{color:"#B4AEC4",paddingBottom:"20px",fontSize:"25px",fontFamily: "Orbitron, sans-serif",fontOpticalSizing: "auto",fontWeight:"800",fontStyle: "normal"}} className="big-heading">{data.hero.subheadline}</h3>
          <p style={{color:"#B4AEC4",fontSize:"20px",fontFamily: "Orbitron, sans-serif",fontOpticalSizing: "auto",fontWeight:"500",fontStyle: "normal"}} className="big-heading">{data.hero.text1}</p>
          <Link href="./login"><button type="button" style={{background:"#7AA93C",marginRight:"20px",marginTop:"20px",width:"120px"}}className="btn btn-dark btn-lg download-button"><FaUserLarge className="a2" /><span className="ctabutton">{data.hero.ctaButtons[0].text}</span></button></Link>
          <button type="button" style={{background:"#7AA93C",marginTop:"20px",width:"132px"}}className="btn btn-dark btn-lg download-button"><a className="a3" href="#"><FaUserLarge /></a><span className="ctabuttons">{data.hero.ctaButtons[1].text}</span></button>
        </div>
        <div className="col-lg-6 hero">
        <img className="heroimages"style={{height:"500px",width:"550px",float:"right"}} src={data.hero.img} alt="..."/>
        </div>
      </div>
  </section>

<section className="white-section"  id="features">
      <div className="container-fluid1">
    <div className="row">
      <div className="feature-box col-lg-4">
        <div className="icon"><FaCircleCheck size={50}/></div>
        <h3 className="feature-title">{data.features[0].title}</h3>
      </div>
      <div className="feature-box col-lg-4">
        <div className="icon"><FaBullseye size={50}/></div>
        <h3 className="feature-title">{data.features[1].title}</h3>
      </div>
      <div className="feature-box col-lg-4">
      <div className="icon"><FaHeart size={50}/></div>
        <h3 className="feature-title">{data.features[2].title}</h3>
      </div>
    </div>
    </div>

  </section>
  <section>
  <div className="h-56 sm:h-44 xl:h-80 2xl:h-96 full">
      <Carousel slideInterval={1500}>
      <table>
        <tbody>
            <tr>
            <td>
              <img className="imgs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRqw5Xb83PThdc3z2agFrXFqr4DH3J_B8nw&s" alt="..." />
              </td>
              <td>
              <img className="imgs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7pIoboM923NLP7gHsREu3PKPWbsmS7pj0A&s" alt="..." />
              </td>
              <td>
              <img className="imgs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmT0Pr550k78Lx0d2aBf8aLzDJENGN21AZKw&s" alt="..." />
              </td>
              <td>
              <img className="imgs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB04vwW90FBao1PcPqb2h4VwCLIJivxaLeiA&s" alt="..." />
              </td>
            </tr>
            </tbody>
          </table>
          <table>
          <tbody>
            <tr>
            <td>
              <img className="imgs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHFmhOXdc0ib3QUMzFznKoWFc8j6sl3LTMw&s" alt="..." />
              </td>
              <td>
              <img className="imgs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0BkEmRW622T2JjBWX0nloaIHzAIS6mOL8Q&s" alt="..." />
              </td>
              <td>
              <img className="imgs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UNnrlUW1xIOwuZ3oF2lkACXNbRQuJp4i0g&s" alt="..." />
              </td>
              <td>
              <img className="imgs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7pIoboM923NLP7gHsREu3PKPWbsmS7pj0A&s" alt="..." />
              </td>
            </tr>
            </tbody>
          </table>
      </Carousel>
    </div>
    <div className="abc">
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 full1">
      <Carousel slideInterval={3000} className="abc">
      {data.testimonials.map((data1,index)=>(
        <div className="imgsa">
          <div className="imgsaa"><h4 className=".imgsfeedback">{data.testimonials[index].feedback}</h4></div>
          <table>
            <tbody>
              <tr>
                <td>
                <img className="imgs2" src={data.testimonials[index].avatar} alt="..." />
                </td>
                <td>
                  <div className="imgp"><p>{data.testimonials[index].name}</p></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
        
      </Carousel>
    </div>
    </div>
    </section>
    <section className="full" id="pricing">
<div className="container-fluid">
<div className="row a1">

{data.pricing.map((data1,index)=>(
<>
<div className="col" style={{marginBottom:"25px"}}>
  <Card className="card43 border-dark" style={{background:"#F3F2E6", borderRadius:"15px"}}>
<div className="cd4">
<Card.Body>
<div className="cd41img" >
        <img style={{border: "8px solid #6d7778",height:"160px",width:"160px"}} className="cd4img" src={data.pricing[index].img} alt="card4c"></img>
        </div>
        <Card.Text style={{color:"black",paddingLeft:"15px",fontSize:"small",marginBottom:"5px"}}>
        Rs. {data.pricing[index].age}
          </Card.Text>
        <div className="card4Title" style={{paddingLeft:"15px"}} ><Card.Text style={{fontSize: "25px", fontFamily: "Bad Script, cursive" ,fontWeight:"400",fontStyle:"normal"}}>{data.pricing[index].name}
        </Card.Text></div> 
        <div className="card4Text" style={{paddingLeft:"15px"}}>
        <Card.Text>
        {data.pricing[index].content}
        </Card.Text>
        </div>
        <div className="card4Text" style={{paddingLeft:"15px"}}>
        <Link href="/login"><button type="button"  style={{background:"#00493A"}}className="btn btn-dark btn-sm download-button mt-[15px]">{data.pricing[index].price}</button></Link>

        </div>
      </Card.Body>
      </div>
    </Card>
    </div>
    </>
  ))}

</div>
</div>
</section>



<div className="cat">
            <img alt="walking cat" src="https://media2.giphy.com/media/TEmDO5sIhT6WXQdD8M/source.gif"/>
          </div>
        
<div className="imggg1">
<p className="imggga"> 12% off on purchases over ₹14,999  -  Free Shipping</p>
</div>

<section id="foot">
<footer className="footer">
    <div className="footer-container">
        <div className="footer-column">
            <h3>INFORMATION</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Product Videos</a></li>
                <li><a href="#">Media</a></li>
                <li><a href="#">Downloads</a></li>
                <li><a href="#">Store</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h3>CATEGORIES</h3>
            <ul>
                <li><a href="#">Kitchenware</a></li>
                <li><a href="#">Cookware</a></li>
                <li><a href="#">Cutlery</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Gift Sets</a></li>
            </ul>
        </div>
        
        <div className="footer-column newsletter">
            <h3>GET IN TOUCH</h3>
            <form>
                <input type="email" placeholder="Enter your email here..."/>
                <button type="submit">SEND MESSAGE</button>
            </form>
        </div>
    </div>
    <div className="footer-bottom" >
        <p>Copyright © 2022 <a href="#">S-TELL</a> | All Rights Reserved</p>
        <div className="social-icons" >
          <div className="iii">
          <table>
            <tbody>
          <tr>
            <td>
            <a className="a1" href="#"><FaFacebook /></a>
            </td>
            <td>
            <a href="https://x.com/Jaspree99070719"><FaTwitter /></a>
            </td>
            <td>
            <a href="https://github.com/Jaspreet-2209"><FaLinkedin /></a>
            </td>
            <td>
            <a href="#"><PiInstagramLogoFill /></a>
            </td>
            <td>
            <a href="#"><FaSquareRss /></a>
            </td>
          </tr>
          </tbody>
          </table>
          </div>
        </div>
    </div>
</footer>
</section>

</>
  );
}