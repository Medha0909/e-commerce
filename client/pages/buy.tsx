import React from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import data from "./data.json";
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from "flowbite-react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareRss } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import Router from "next/router";
import Link from "next/link";
export default function Buy() {
  const setDarkMode=()=>{
    document.querySelector(".navbar")?.setAttribute("data-theme","dark"); 
  };
  const setLightMode=()=>{
    document.querySelector(".navbar")?.setAttribute("data-theme","light"); 
  };
  const togglTheme=(e:any)=>{
    if(e.target.checked){
       setDarkMode();
    }
    else{
      setLightMode();
    }
  };
  const handleLogout=()=>{
    localStorage.removeItem('token');
    Router.push("/");
  }

	const [responseId, setResponseId] = useState("");
	const [responseState, setResponseState] = useState<any>([]);
  
	const loadScript = (src:any) => {
	  return new Promise((resolve) => {
		const script = document.createElement("script");
  
		script.src = src;
  
		script.onload = () => {
		  resolve(true)
		}
		script.onerror = () => {
		  resolve(false)
		}
  
		document.body.appendChild(script);
	  })
	}
  
	const createRazorpayOrder = (amount:any) => {
	  let data = JSON.stringify({
		amount: amount * 100,
		currency: "INR"
	  })
  
	  let config = {
		method: "post",
		maxBodyLength: Infinity,
		url: "https://e-commerce-server-omav.onrender.com/payment/orders",
		headers: {
		  'Content-Type': 'application/json'
		},
		data: data
	  }
  
	  axios.request(config)
	  .then((response) => {
		console.log(JSON.stringify(response.data))
		handleRazorpayScreen(response.data.amount)
	  })
	  .catch((error) => {
		console.log("error at", error)
	  })
	}
  
	const handleRazorpayScreen = async(amount:any) => {
	  const res = await loadScript("https://e-commerce-five-lovat.vercel.app//checkout.razorpay.com/v1/checkout.js")
  
	  if (!res) {
		alert("Some error at razorpay screen loading")
		return;
	  }
  
	  const options = {
		key: 'rzp_test_I1l0QEnsgVqUEv',
		amount: amount,
		currency: 'INR',
		name: "S-TELL",
		description: "payment to papaya coders",
		image: "https://papayacoders.com/demo.png",
		handler: function (response:any){
		  setResponseId(response.razorpay_payment_id)
		},
		prefill: {
		  name: "S-TELL",
		  email: "stellmaghu@gmail.com"
		},
		theme: {
		  color: "#F4C430"
		}
	  }
  
	  const paymentObject = (window as any).Razorpay(options)
	  paymentObject.open()
	}
  
	const paymentFetch = (e:any) => {
	  e.preventDefault();
  
	  const paymentId = e.target.paymentId.value;
  
	  axios.get(`https://e-commerce-server-omav.onrender.com/payment/payment/${paymentId}`)
      .then((response) => {
		console.log(response.data);
		setResponseState(response.data)
	  })
	  .catch((error) => {
		console.log("error occures", error)
	  })
	}
  
	return (
	  <div className="App">

<nav className="bg-gray-800 navbar">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-[19px] w-[108px]" src="https://api.logo.com/api/v2/images?logo=lg_9nLJtcZZj3wM2cXSl9&format=webp&width=2000&background=transparent&fit=contain&quality=100&u=2024-10-05T12%3A53%3A32.193Z" alt="Your Company"/>
          <a href="/" id="steel" style={{textDecoration:"none"}}><span className=" block rounded-md px-3 py-1 text-xl font-medium" aria-current="page"></span></a>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4 mt-[5px]">
            <a href="#foot" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
            <a href="#pricing" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Pricing</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Download</a>
          </div>

        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        
      <label className="inline-flex items-center cursor-pointer">
  <input  type="checkbox" value="" className="sr-only peer" onClick={togglTheme}/>
  <div id="dark" className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span id="dark1" className="ms-3 text-sm font-medium text-900 dark:text-gray-300">Dark</span>
</label>


        <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
  
    <Link href="#foot" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</Link>
      <a href="#pricing" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Pricing</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Download</a>
    </div>
  </div>
  <button type = "button" style={{marginLeft:"5rem",width:"140px",height:"40px"}} onClick={handleLogout} className=" btn btn-danger btn-mid title_button"><span style={{marginBottom:"10px"}}> <FiLogOut style={{right:"10px" ,top:"33px",position:"absolute"}}/> LOGOUT</span></button>
</nav>
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
	<div className="cat">
            <img alt="walking cat" src="https://media2.giphy.com/media/TEmDO5sIhT6WXQdD8M/source.gif"/>
          </div>
        
<div className="imggg1">
<p className="imggga" style={{textAlign:"center"}}> -   Navrati Sale  -   12% off on purchases over ₹14,999  <br />-  Free Shipping</p>
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
        <div className="card4Text kreep" style={{paddingLeft:"15px"}}>
        <button type="button" onClick={() => createRazorpayOrder(data.pricing[index].age
)} style={{background:"#00493A"}}className="btn btn-dark btn-sm download-button mt-[15px]">{data.pricing[index].price}</button>

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

		{responseId && <p>{responseId}</p>}
		<form style={{display:"none"}}onSubmit={paymentFetch}>
			<div style={{visibility:"hidden"}}>
			<input type="text" name="paymentId" />
		  <button type="submit">Fetch Payment</button>
		  {responseState.length !==0 && (
			<ul>
			  <li>Amount: {responseState.amount / 100} Rs.</li>
			  <li>Currency: {responseState.currency}</li>
			  <li>Status: {responseState.status}</li>
			  <li>Method: {responseState.method}</li>
			</ul>
		  )}
			</div>
		 
		</form>
	  </div>
	);
  }
