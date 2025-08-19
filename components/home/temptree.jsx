"use client";
import Image from "next/image";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Button from "../layout/Button";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useForm } from "react-hook-form";

gsap.registerPlugin(ScrollTrigger);

function BirdModel({ url, rotationRef, positionRef }) {
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, scene);
  const groupRef = useRef();

  useEffect(() => {
    if (animations.length) {
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions, animations]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.set(
        rotationRef.current.x,
        rotationRef.current.y,
        rotationRef.current.z
      );
      groupRef.current.position.set(
        positionRef.current.x,
        positionRef.current.y,
        positionRef.current.z
      );
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1} />
    </group>
  );
}

function Gratitudetree() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  // const [birdPosition, setBirdPosition] = useState([-2, 1.3, 1.2]);
  const [birdRotation, setBirdRotation] = useState([0, Math.PI / -1.8, 0]);
  const [birdPosition, setBirdPosition] = useState([-2, 1.4, 1.2]);
  // const birdPositionRef = useRef({ x: -2, y: 1.4, z: 1.2 });
  const birdPositionRef = useRef({ x: 0, y: 0, z: 0 });
  const birdRotationRef = useRef({ x: 0, y: Math.PI / -1.8, z: 0 });

  const treeRef = useRef(null);
  const svgRef = useRef(null);
  const leafRef = useRef(null);
  const birdWrapper = useRef(null);
  const containerRef = useRef(null);
  const birdLeafWrapper = useRef(null);
  const gratitudeRef = useRef(null);
  const gratitudeFormRef = useRef(null);
  const animationRef = useRef(null); // Ref to store our animation timeline

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Create the timeline but don't play it automatically
    const tl = gsap.timeline({ paused: true });
    const reverseTl = gsap.timeline({ paused: true });

    mm.add("(min-width: 1024px)", () => {
      // 1. Tree shrinks
      tl.to(
        treeRef.current,
        {
          scale: 0.5,
          transformOrigin: "center center",
          ease: "power2.out",
        },
        "<"
      );

      // 2. Move leaf towards bird's beak
      tl.fromTo(
        leafRef.current,
        {
          x: "-21vw",
          y: "-10vw",
        },
        {
          // x: "0",
          // y: "1.5vw",
          x: "-19vw",
          y: "-8vw",
          scale: 3,
          ease: "power2.inOut",
        },
        "<"
      );

      // 4. Bird + leaf move together to right
      tl.fromTo(
        birdWrapper.current,
        {
          x: "-30vw",
          y: "-13vw",
        },
        {
          // x: "5.7vw",
          // y: "3.2vw",
          x: "-21vw",
          y: "-8vw",
          ease: "power2.inOut",
        },
        "<"
      );

      // 3. Fade away bottom SVG
      tl.to(
        svgRef.current,
        {
          opacity: 0,
          ease: "power1.out",
        },
        "<"
      );

      tl.to(
        birdLeafWrapper.current,
        {
          x: "23vw",
          y: "3.2vw",
          ease: "power2.inOut",
        },
        ">"
      );

      tl.to(
        treeRef.current,
        {
          opacity: 0.6,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(
        svgRef.current,
        {
          opacity: 1,
          y: "5.729vw",
          ease: "power1.out",
        },
        "<"
      );

      tl.to(
        leafRef.current,
        {
          x: "+=14.063vw",
          y: "+=10.417vw",
          rotation: -50,
          scale: 50,
          opacity: 0.3,
          ease: "power3.out",
        },
        "start"
      );

      // // Fade out the gratitude text
      tl.to(
        gratitudeRef.current,
        {
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "start"
      );

      // // Fade in the gratitude form
      tl.to(
        gratitudeFormRef.current,
        {
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "start"
      );

      // Store the timeline in a ref so we can access it later
      // animationRef.current = tl;

      // Create the reverse timeline by reversing the forward one

      reverseTl.to(
        leafRef.current,

        {
          x: "-20.4vw",
          y: "-12vw",
          // x: "0.417vw",
          // y: "0.625vw",
          rotation: 1,
          scale: 5,
          opacity: 1,
          ease: "power3.out",
          duration: 1,
        },
        "rev1"
      );

      reverseTl.to(
        birdRotationRef.current,
        {
          x: 0,
          y: Math.PI / -0.7,
          z: 0,
          ease: "power2.inOut",
          onUpdate: () => {
            setBirdRotation([
              birdRotationRef.current.x,
              birdRotationRef.current.y,
              birdRotationRef.current.z,
            ]);
          },
        },
        "<"
      );
      // reverseTl.to(
      //   birdPositionRef.current,
      //   {
      //     x: 0,
      //     y: 0,
      //     z: 0,
      //     duration: 1,
      //     ease: "power2.inOut",
      //     onUpdate: () => {
      //       setBirdPosition([
      //         birdPositionRef.current.x,
      //         birdPositionRef.current.y,
      //         birdPositionRef.current.z,
      //       ]);
      //     },
      //   },
      //   "rev1"
      // );
      reverseTl.to(
        birdWrapper.current,
        {
          y: "-13vw",
        },
        "rev1"
      );

      reverseTl.to(
        gratitudeFormRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "rev1"
      );

      reverseTl.to(
        birdLeafWrapper.current,
        {
          x: 0,
          y: "-2vw",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "rev2"
      );

      reverseTl.to(
        gratitudeRef.current,
        {
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "rev2"
      );

      reverseTl.to(
        treeRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          transformOrigin: "center center",
          ease: "power2.out",
        },
        "rev2"
      );

      reverseTl.to(leafRef.current, {
        scale: 0.6,
        y: "2vw",
        opacity: 1,
        ease: "power1.out",
      });

      reverseTl.to(
        svgRef.current,
        {
          opacity: 0,
          ease: "power1.out",
        },
        "rev2"
      );

      reverseTl.to(
        birdRotationRef.current,
        {
          x: 0,
          y: Math.PI / -1.8,
          z: 0,
          duration: 1,
          ease: "power2.inOut",
          onUpdate: () => {
            setBirdRotation([
              birdRotationRef.current.x,
              birdRotationRef.current.y,
              birdRotationRef.current.z,
            ]);
          },
        },
        "end"
      );
      reverseTl.to(
        birdWrapper.current,
        {
          x: "-30vw",
          y: "-13vw",
        },
        "end"
      );
      // reverseTl.to(
      //   birdPositionRef.current,
      //   {
      //     x: -2,
      //     y: 1.4,
      //     z: 1.2,
      //     duration: 1,
      //     ease: "power2.inOut",
      //     onUpdate: () => {
      //       setBirdPosition([
      //         birdPositionRef.current.x,
      //         birdPositionRef.current.y,
      //         birdPositionRef.current.z,
      //       ]);
      //     },
      //   },
      //   "end"
      // );
    });

    mm.add("(min-width: 104px) and (max-width: 1023px)", () => {
      // 1. Tree shrinks
      tl.to(
        treeRef.current,
        {
          scale: 0.6,
          transformOrigin: "center center",
          ease: "power2.out",
        },
        "<"
      );

      // 2. Move leaf towards bird's beak
      tl.fromTo(
        leafRef.current,
        {
          x: "0",
          y: "-50px",
        },
        {
          scale: 1.5,
          x: -5,
          y: "-220px",
          ease: "power2.inOut",
        },
        "<"
      );

      // 4. Bird + leaf move together to right
      tl.fromTo(
        birdWrapper.current,
        {
          x: "-100px",
          y: "-290px",
        },
        {
          // x: "5.7vw",
          // y: "3.2vw",
          x: "-30px",
          y: "-220px",
          ease: "power2.inOut",
        },
        "<"
      );

      // 3. Fade away bottom SVG
      tl.to(
        svgRef.current,
        {
          opacity: 0,
          ease: "power1.out",
        },
        "<"
      );

      tl.to(
        birdLeafWrapper.current,
        {
          x: -20,
          y: -10,
          ease: "power2.inOut",
        },
        ">"
      );

      tl.to(
        treeRef.current,
        {
          opacity: 0,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(
        svgRef.current,
        {
          opacity: 1,
          // y: "5.729vw",
          ease: "power1.out",
        },
        "<"
      );

      tl.to(
        leafRef.current,
        {
          x: -50,
          y: 30,
          rotation: -50,
          scale: 50,
          opacity: 0.3,
          ease: "power3.out",
        },
        "start"
      );

      // // Fade out the gratitude text
      tl.to(
        gratitudeRef.current,
        {
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "start"
      );

      // // Fade in the gratitude form
      tl.to(
        gratitudeFormRef.current,
        {
          opacity: 1,
          duration: 1,
          zIndex: 50,
          ease: "power3.out",
        },
        "start"
      );

      // Store the timeline in a ref so we can access it later
      // animationRef.current = tl;

      // Create the reverse timeline by reversing the forward one

      reverseTl.to(
        leafRef.current,

        {
          x: -40,
          y: -285,
          rotation: 1,
          scale: 1.5,
          opacity: 1,
          ease: "power3.out",
          duration: 1,
        },
        "rev1"
      );

      reverseTl.to(
        birdRotationRef.current,
        {
          x: 0,
          y: Math.PI / -0.7,
          z: 0,
          ease: "power2.inOut",
          onUpdate: () => {
            setBirdRotation([
              birdRotationRef.current.x,
              birdRotationRef.current.y,
              birdRotationRef.current.z,
            ]);
          },
        },
        "<"
      );
      // reverseTl.to(
      //   birdPositionRef.current,
      //   {
      //     x: 0,
      //     y: 0,
      //     z: 0,
      //     duration: 1,
      //     ease: "power2.inOut",
      //     onUpdate: () => {
      //       setBirdPosition([
      //         birdPositionRef.current.x,
      //         birdPositionRef.current.y,
      //         birdPositionRef.current.z,
      //       ]);
      //     },
      //   },
      //   "rev1"
      // );
      reverseTl.to(
        birdWrapper.current,
        {
          y: -290,
        },
        "rev1"
      );

      reverseTl.to(
        gratitudeFormRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "rev1"
      );

      reverseTl.to(
        birdLeafWrapper.current,
        {
          x: 0,
          y: "-2vw",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "rev2"
      );

      reverseTl.to(
        gratitudeRef.current,
        {
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "rev2"
      );

      reverseTl.to(
        treeRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          transformOrigin: "center center",
          ease: "power2.out",
        },
        "rev2"
      );

      reverseTl.to(leafRef.current, {
        scale: 0.6,
        y: "2vw",
        opacity: 1,
        ease: "power1.out",
      });

      reverseTl.to(
        svgRef.current,
        {
          opacity: 0,
          ease: "power1.out",
        },
        "rev2"
      );

      reverseTl.to(
        birdRotationRef.current,
        {
          x: 0,
          y: Math.PI / -1.8,
          z: 0,
          duration: 1,
          ease: "power2.inOut",
          onUpdate: () => {
            setBirdRotation([
              birdRotationRef.current.x,
              birdRotationRef.current.y,
              birdRotationRef.current.z,
            ]);
          },
        },
        "end"
      );
      reverseTl.to(
        birdWrapper.current,
        {
          x: "-100px",
          y: "-290px",
        },
        "end"
      );
    });

    // Store both timelines in refs
    animationRef.current = {
      forward: tl,
      reverse: reverseTl,
    };
  }, []);

  const handleAddLeafClick = () => {
    if (!animationRef.current) return;

    const { forward } = animationRef.current;

    forward.restart().timeScale(0.3);
    setIsAnimating(true);
    forward.then(() => setIsAnimating(false));
  };

  const reverseAnimation = () => {
    if (!animationRef.current?.reverse) return;

    setIsAnimating(true);

    // Reset the bird and leaf to their initial positions
    // gsap.set(leafRef.current, {
    //   x: 0,
    //   y: 0,
    //   rotation: 0,
    //   scale: 1,
    //   opacity: 1,
    // });

    // setBirdPosition([-2, 1.3, 1.2]);
    // setBirdRotation([0, Math.PI / -1.5, 0]);

    // Play the reverse animation
    animationRef.current.reverse
      .restart()
      .timeScale(0.3)
      .then(() => {
        setIsAnimating(false);
      });
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // you can call API here

    reverseAnimation();
  };

  return (
    <div className="relative h-screen overflow-hidden" ref={containerRef}>
      <div className="relative w-full sm:w-[425px] lg:w-full h-full mx-auto max-lg:flex max-lg:justify-center max-lg:text-center  ">
        <div
          ref={birdLeafWrapper}
          className="absolute flex  justify-center items-center z-[2]  w-full h-full"
        >
          {/* 3D Bird */}
          <div
            className=" max-lg:absolute w-full h-full lg:w-full lg:h-full max-lg:flex justify-center items-center "
            ref={birdWrapper}
          >
            <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
              {/* <axesHelper args={[5]} /> 
              <gridHelper
                args={[30, 30]}
                position={[0, -1, 0]}
                rotation={[0, 0, 0]}
              /> */}
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} />
              <Suspense fallback={null}>
                <BirdModel
                  url="/models/bird.glb"
                  rotationRef={birdRotationRef}
                  positionRef={birdPositionRef}
                />
              </Suspense>
              {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
            </Canvas>
          </div>

          {/* Leaf */}
          <div ref={leafRef} className="absolute z-[2]">
            <Image
              src="/images/gratitude/leaf.svg"
              width={118}
              height={80}
              alt="leaf"
              className=" size-6 lg:h-[1vw] lg:w-[1vw] max-w-full"
            />
          </div>
        </div>

        <div className="flex max-lg:flex-col justify-evenly  items-center h-full w-full">
          <div className="relative w-full lg:w-[58.3vw]">
            <div className="relative flex justify-center gratitudetreewrap">
              <div
                ref={treeRef}
                className="relative overflow-visible tree  pt-[15vw]"
              >
                <Image
                  src="/images/gratitude/tree.png"
                  width={487}
                  height={761}
                  alt="tree"
                  className="w-[282.64px] h-[441.21px] lg:h-[39.948vw] lg:w-[25.365vw] max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-[90%] lg:w-[41.6vw] max-lg:mb-4">
            <div className="lg:ml-[3vw] relative z-10 flex items-center max-lg:justify-center h-full max-lg:w-full">
              <div
                className="opacity-1 gratitudetext max-lg:w-full"
                ref={gratitudeRef}
              >
                <div className="headwrap">
                  <h3 className="heading leading-[1.2] seasons capitalize text-[#5E2A29]">
                    Gratitude tree
                  </h3>
                  <p className="text-[14px] mb-4 lg:mb-[1vw] md:text-[20px] lg:text-[1.3vw] text-[#5E2A29]">
                    Every leaf on this tree is a message of love, devotion, or
                    prayer
                  </p>
                  <div className="btnwrapper ctabtns flex  max-lg:justify-evenly gap-4 lg:gap-[1vw] max-lg:w-full">
                    <Button
                      name="Add Your Leaf"
                      fill
                      onClick={handleAddLeafClick}
                      disabled={isAnimating}
                    />
                    <Button name="Read Messages" />
                  </div>
                </div>
              </div>
              <div
                className=" max-lg:hidden absolute  lg:top-0 opacity-0 gratitudeform"
                ref={gratitudeFormRef}
              >
                <div className="headwrap">
                  <h3 className="text-[25px] lg:text-[1.979vw] leading-[1.4] seasons text-[#5E2A29]">
                    What would you like to offer <br /> gurudev?
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative my-4 lg:my-[1.6vw] w-full mt-[]">
                      <div
                        className="absolute inset-0 -z-10 before:content-[''] after:content-['']
                      before:absolute before:left-0 before:top-0 before:h-[1px] before:w-[4%] before:bg-[#5E2A29]
                      after:absolute after:right-0 after:top-0 after:h-[1px] after:w-[34%] after:bg-[#5E2A29]"
                      ></div>
                      <textarea
                        id="message"
                        rows="5"
                        className="w-full px-2 pt-2 lg:px-[0.6vw] lg:pt-[0.8vw] bg-transparent border border-[#5E2A29] resize-none focus:outline-none focus:ring-0 focus:ring-[#5E2A29] border-t-0"
                        placeholder=""
                        {...register("message", {
                          required: "Message is required",
                        })}
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute mx-[0.7vw] text-[14px] lg:text-[0.8vw] text-[#322F35] transition-all -top-[0.7vw] left-3"
                      >
                        Take a moment , speak from your heart
                      </label>
                      {errors.message && (
                        <p className="mt-[5px] lg:mt-[0.2vw] text-[12px] lg:text-[0.7vw] text-red-500">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="btnwrapper ctabtns">
                      <Button name="Offer Your Leaf" fill />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" lg:hidden absolute translate-y-[80%]  lg:top-0 opacity-0 gratitudeform"
          ref={gratitudeFormRef}
        >
          <div className="headwrap">
            <h3 className="text-[25px] lg:text-[1.979vw] leading-[1.4] seasons text-[#5E2A29]">
              What would you like to offer <br /> gurudev?
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative my-4 lg:my-[1.6vw] w-full mt-[]">
                <div
                  className="absolute inset-0 -z-10 before:content-[''] after:content-['']
                      before:absolute before:left-0 before:top-0 before:h-[1px] before:w-[4%] before:bg-[#5E2A29]
                      after:absolute after:right-0 after:top-0 after:h-[1px] after:w-[34%] after:bg-[#5E2A29]"
                ></div>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-2 pt-2 lg:px-[0.6vw] lg:pt-[0.8vw] bg-transparent border border-[#5E2A29] resize-none focus:outline-none focus:ring-0 focus:ring-[#5E2A29] border-t-0"
                  placeholder=""
                  {...register("message", {
                    required: "Message is required",
                  })}
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute mx-[0.7vw] text-[14px] lg:text-[0.8vw] text-[#322F35] transition-all -top-[0.7vw] left-3"
                >
                  Take a moment , speak from your heart
                </label>
                {errors.message && (
                  <p className="mt-[5px] lg:mt-[0.2vw] text-[12px] lg:text-[0.7vw] text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="btnwrapper ctabtns">
                <Button name="Offer Your Leaf" fill />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom effect */}
      <div
        className="absolute bottom-0 left-0 w-1/2 -z-1 bottomeffect max-lg:hidden"
        ref={svgRef}
      >
        <svg
          width="1043"
          height="1022"
          viewBox="0 0 1043 1022"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <rect
            x="-876"
            width="1919"
            height="1070"
            fill="url(#paint0_linear_1201_8432)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1201_8432"
              x1="83.5"
              y1="0"
              x2="83.7499"
              y2="678.947"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D9D9D9" stopOpacity="0" />
              <stop offset="1" stopColor="#F3F2DD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Gratitudetree;
