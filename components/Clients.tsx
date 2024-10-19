import Image, { StaticImageData } from "next/image"
import img1 from "@/public/images/logoipsum-264.svg"
import img2 from "@/public/images/logoipsum-286.svg"
import img3 from "@/public/images/logoipsum-330.svg"
import img4 from "@/public/images/logoipsum-325.svg"



export const Clients = () => {
  return (
   <div className="mx-auto w-10/12 py-10">
     <div className="flex flex-wrap md:flex-row justify-center items-center gap-5 md:gap-10">
         <Image src={img1} height={41} width={170} className="w-20 h-10" alt="" />
         <Image src={img2} height={40} width={218} className="w-20 h-10" alt="" />
         <Image src={img3} height={40} width={187} className="w-20 h-10" alt="" />
         <Image src={img4} height={40} width={220} className="w-20 h-10" alt="" />
    </div>
   </div>
  )
}
