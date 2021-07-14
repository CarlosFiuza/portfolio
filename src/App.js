import './css/style.css';
import MyPhoto from './assets/myPhoto.svg';
import Hortum from './assets/hortum.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    let tl = gsap.timeline();
    tl
    .from(".menu-1",{
      duration: 1,
      opacity: 0,
      delay: 0.5
    })
    .from(".menu-2",{
      duration: 1,
      opacity: 0,
    }, "-=0.8")
    .from(".menu-3",{
      duration: 1,
      opacity: 0,
    }, "-=0.8")
    .from(".menu-4",{
      duration: 1,
      opacity: 0,
    }, "-=0.8")
    .from(".menu-5",{
      duration: 1,
      opacity: 0,
    }, "-=0.8")
    .from(".container-item div",{
      duration: 1,
      opacity: 0,
      stagger:{each: 0.2},
    }, "-=0.8")
    .from(".container-item img",{
      duration: 1.5,
      opacity: 0,
    }, "-=0.8")
    .from(".bg-hero",{
      duration: 5,
      opacity: 0,
      ease: "power2.out",
      y: 500,
    }, "-=0.8")

    gsap.registerPlugin(ScrollTrigger);

    
    gsap.from("#section-01 div", {
      duration: 1,
      opacity: 0,
      stagger: {each: 0.2},
      scrollTrigger: {
        trigger: "#section-01",
      }
    })
    gsap.from("#section-02", {
      duration: 1,
      opacity: 0,
      stagger: {each: 0.2},
      scrollTrigger: {
        trigger: "#section-01",
      }
    })
  });

  return (
    <body>

      {/* header */}

      <header class="menu">

        <div class="menu-left">
          <a href="" class="link menu-1">Home</a>
          <a href="" class="link menu-2">About</a>
        </div>

        <div class="menu-logo menu-3">
          <h5>Carlos Fiuza.</h5>
        </div> 

        <div class="menu-right">
          <a href="" class="link menu-4">Works</a>
          <a href="" class="link menu-5">Contact</a>
        </div> 

      </header>

      {/* background */}

      <div class="relative">
        <div class="bg-hero">
          <svg class="svg-hero" viewBox="0 0 2664 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 2">
            <rect width="2560" height="1440" transform="translate(27 46)" fill="#070707"/>
            <circle id="circulo2" cx="1819" cy="662" r="299.5" stroke="#FF4D00"/>
            <g id="losango1">
            <path id="Vector 3" d="M333.564 369.142L305.982 309.151L368.919 333.787L390.834 394.004L333.564 369.142Z" fill="url(#paint0_linear)" stroke="#E74500"/>
            </g>
            <g id="losango2">
            <path id="Vector 3_2" d="M523.443 1329.94L506.77 1232.31L588.395 1292.44L596.77 1388.2L523.443 1329.94Z" fill="url(#paint1_linear)" stroke="#E74500"/>
            </g>
            <g id="losango3">
            <path id="Vector 3_4" d="M2286.77 857.256L2388.39 772.917L2373.38 907.256L2268.39 980.763L2286.77 857.256Z" fill="url(#paint3_linear)" stroke="#E74500"/>
            </g>
            <path id="circulo1" d="M28 270C258.009 623.715 123.837 1018.05 28 1171" stroke="#E74500"/>
            <g id="Vector 1125" filter="url(#filter0_f)">
            <path d="M2165.73 426.084C2405.35 492.66 2240.61 808.02 1926.1 799.844C1710.81 799.844 651.213 451.78 402.226 476.308C194.425 417.908 1825.01 331.421 2165.73 426.084Z" fill="#FF4D00" fill-opacity="0.11"/>
            </g>
            <g id="Vector 1127" filter="url(#filter1_f)">
            <path d="M498.273 1173.92C258.646 1107.34 423.39 791.98 737.899 800.156C953.189 800.156 2012.79 1148.22 2261.77 1123.69C2469.57 1182.09 838.992 1268.58 498.273 1173.92Z" fill="#FF4D00" fill-opacity="0.11"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_f" x="-0.00012207" y="0" width="2664" height="1184" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="192" result="effect1_foregroundBlur"/>
            </filter>
            <filter id="filter1_f" x="0" y="416" width="2664" height="1184" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="192" result="effect1_foregroundBlur"/>
            </filter>
            <linearGradient id="paint0_linear" x1="308.444" y1="308.667" x2="392.555" y2="392.778" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E24000" stop-opacity="0"/>
            <stop offset="0.9999" stop-color="#FF5B16"/>
            <stop offset="1" stop-color="#FF733C"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="510.526" y1="1232.57" x2="599.738" y2="1387.09" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E24000" stop-opacity="0"/>
            <stop offset="0.9999" stop-color="#FF5B16"/>
            <stop offset="1" stop-color="#FF733C"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="1279.85" y1="250.581" x2="1228.34" y2="280.318" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E24000" stop-opacity="0"/>
            <stop offset="0.9999" stop-color="#FF5B16"/>
            <stop offset="1" stop-color="#FF733C"/>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="2390.6" y1="777.424" x2="2271.65" y2="983.452" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E24000" stop-opacity="0"/>
            <stop offset="0.9999" stop-color="#FF5B16"/>
            <stop offset="1" stop-color="#FF733C"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/** */}

      <section class="container hero">
        <div class="container-item">
          <div>
            <h1>Carlos Eduardo</h1>
          </div>
          <div>
            <h2 class="mask text-right mt-7">Software Enginner Student</h2>
          </div>
          <div>
            <h2 class="mask">Front-End Developer</h2>
          </div>

          <div class="flex-end pr-9">
            <a href="" class="square text-center">WORKS</a>
          </div>

        </div>

        <div class="container-item">
          <img src={MyPhoto} style={{maxWidth: 400}}/>
        </div>
      </section>

      <section class="list" id="section-01">

        <div class="list-item">
          <h2>Selected Works</h2>
        </div>

        <div class="list-item py-6">
          <h5 class="color-gray mr-2" >01.</h5>
          <a href="" taget='_blank'> <h3>Hortum-Backend</h3> </a>
          <img class="img-project" src={Hortum} alt=""/>
        </div>

        <div class="bb-gray"/>

        <div class="list-item py-6">
          <h5 class="color-gray mr-2" >02.</h5>
          <a href="" taget='_blank'> <h3>Hortum-Frontend</h3> </a>
          <img class="img-project" src={Hortum} alt=""/>
        </div>
        <div class="bb-gray"/>
      </section>

      <section class="get mt-7" id="section-02">
        <h2>Get in touch</h2>
        <h3 class="mask text-center mt-9">carlosfiuza1234@gmail.com</h3>
      </section>

    </body>
  );
}

export default App;
