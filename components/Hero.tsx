"use client"
import Image from "next/image"
import heroImg from "@/public/images/pexels-photo-7691748.png"
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <div className="py-10 md:py-14 mx-auto w-11/12 md:w-10/12">
      <div className="flex flex-col md:flex-row gap-x-10 gap-y-10 justify-center px-6">
        <div className="w-full md:w-1/2 flex flex-col py-4 md:py-14 gap-y-5">
        <h1 className="text-3xl md:text-4xl w-full md:w-11/12 leading-tight md:leading-tight font-semibold">Empowering Organizations and Individuals with
         <span className="text-blue-300">
                <Typewriter
                  options={{
                    strings: ["In-Demand Skills.","Transferable Skills.", "Marketing Skills."],
                    delay: 125,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
         </h1>
        <p> Unlock a world of marketable, transferable skills to foster self-sustenance and organizational excellence.</p>
        <button className="bg-blue-200 px-2 py-2 rounded-full w-2/5 md:w-[25%]">Start Now</button>
        </div>
        <div className="w-full md:w-1/2">
        <Image src={heroImg} height={533} width={800} className="rounded-3xl" alt="" />
        </div>
      </div>
    </div>
  )
}
