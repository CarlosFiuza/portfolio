import './css/style.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

import Header from './components/Header';
import Background from './components/Background';
import ContainerInfo from './components/ContainerInfo';
import AboutMe from './components/AboutMe';
import SelectedList from './components/SelectedList';
import GetInTouch from './components/GetInTouch';

export default () => {

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
    gsap.from("#section-02 div", {
      duration: 1,
      opacity: 0,
      stagger: {each: 0.2},
      scrollTrigger: {
        trigger: "#section-02",
      }
    })
    gsap.from("#section-03 div", {
      duration: 1,
      opacity: 0,
      stagger: {each: 0.2},
      scrollTrigger: {
        trigger: "#section-03",
      }
    })
  });

  return (
    <body>
      <Header/>
      <Background/>
      <ContainerInfo/>
      <SelectedList/>
      <AboutMe/>
      <GetInTouch/>
    </body>
  );
};
