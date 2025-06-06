import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'



const App = () => {
  const [showContent, setShowContent] = useState(false)
  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%"
    })
    .to(".vi-mask-group",{
      scale: 10, 
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setShowContent(true)
          this.kill()
        }
      }
    })
  })

  useGSAP(()=>{
    if (!showContent) return;

    gsap.to(".main", {
      scale:1,
      rotate: 0,
      delay:-1,
      duration: 2,
      ease: "Expo.easeInOut"
    })
    gsap.to(".sky", {
      scale:1.1,
      rotate: 0,
      delay:-.8,
      duration: 2,
      ease: "Expo.easeInOut"
    })
    gsap.to(".bg", {
      scale:1.2,
      rotate: 0,
      delay:-.8,
      duration: 2,
      ease: "Expo.easeInOut"
    })
    gsap.to(".character", {
      scale:1.1,
      x: "-50%",
      bottom: "-40%",
      rotate: 0,
      delay:-.8,
      duration: 2,
      ease: "Expo.easeInOut"
    })

    const main = document.querySelector(".main")

    main?.addEventListener("mousemove", function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5)*40;
      gsap.to(".imagesdiv .text",{
        x: `${xMove*0.4}%`
      })
      gsap.to(".sky",{
        x: xMove,
      })
      gsap.to(".bg",{
        x: xMove,
      })
   
   
    })
  },[showContent])


  return (
    <>
      <div className='svg fixed top-0 left-0 z-[120] w-full h-screen overflow-hidden bg-black'>
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing overflow-hidden relative w-full h-screen bg-black'>
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
                <div className="logo flex gap-[3  0px]">
                  <div className="lines flex flex-col gap-1">
                    <div className='line w-10 h-1 bg-white' />
                    <div className='line w-8 h-1 bg-white' />
                    <div className='line w-5 h-1 bg-white' />
                  </div>
                  <h2 className='text-4xl -mt-[8px] leading-none  text-white'>Rockstar</h2>
                </div>
            </div>
            
            <div className='imagesdiv relative overflow-hidden w-full h-screen'>
                <img className='absolute sky top-0 left-0 w-full h-full object-cover scale-[1.7] rotate-[-20deg]' src="./sky.png" alt="Background image" />

                <img className='absolute bg top-0 left-0 w-full h-full object-cover scale-[2] rotate-[-15deg]' src="./bg.png" alt="Background image" />
                <div className='text text-white absolute left-1/2 top-0 -translate-x-1/2 '>
                  <h1 className='text-[10rem] leading-none ml-25 '>grand</h1>
                  <h1 className='text-[10rem] leading-none ml-140 '>theft</h1>
                  <h1 className='text-[10rem] leading-none ml-5'>auto</h1>
                </div>
                <img className='absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]' src="./girlbg.png" alt="main character" />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-20 px-10 bg-gradient-to-t from-black to-transparent" >
              <div className="flex gap-4 items-center">
              <i className="text-3xl ri-arrow-down-fill"></i>
                <h3 className='text-xl font-[Gelvetica_Now_Display]'>Scroll Down</h3>
              </div>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 h-[65px] -translate-y-1/2' src="./ps5.png" alt="" />
            </div>
          </div>
          <div className='w-full h-screen flex items-center justify-center bg-black'> 
            <div className='cntnr flex w-full h-[80%] '>
                <div className='limg relative w-1/2 h-full'>
                  <img className='absolute scale-[1.1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
                </div>
                <div className='rg text-white w-[30%] py-30'>
                    <h1 className='text-8xl'>Still Running</h1>
                    <h1 className='text-8xl'>Not Hunting</h1>
                    <p className='mt-10 font-[sans]'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi dignissimos illo animi quibusdam reiciendis suscipit quisquam! Animi officiis numquam ea adipisci maxime officia, quos alias fugiat similique blanditiis aperiam?
                    </p>
                    <p className='mt-10 font-[sans]'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi dignissimos illo animi quibusdam reiciendis suscipit quisquam! Animi officiis numquam ea adipisci maxime officia, quos alias fugiat similique blanditiis aperiam?
                    </p>
                    <button className='bg-yellow-500 px-10 py-5 mt-2 text-3xl text-black'>Download Now</button>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App