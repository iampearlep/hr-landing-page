import { CiFlag1 } from "react-icons/ci";
import { LuTarget } from "react-icons/lu";

export const About = () => {
  return (
    <div className="mx-auto w-10/12 md:px-6 py-10">
       <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
       <div className="md:col-start-1 md:col-end-3 bg-blue-50 px-4 rounded-xl">
       <h3 className="font-semibold pt-6 pb-3">Our Mission and Vision</h3>
       <p>Redefining industry standards through consultation, our innovative approach integrates cutting-edge technology with expert insights, driving transformative change and setting new benchmarks for excellence.</p>
          </div>
         <div className="md:col-start-3 md:col-end-3 md:row-start-1 md:row-end-3 bg-blue-50 px-4  rounded-xl">
         <h3 className="font-semibold pt-6 pb-3">About us</h3>
            <p>Our journey began with a simple yet ambitious goal: to provide service beyond compare. Over the years, we have evolved and grown, expanding our offerings to meet the diverse needs of our clients. From tailored solutions to comprehensive consultations, we leverage our extensive knowledge and experience to drive transformative change and help our clients succeed in today's dynamic business environment.</p>
       
            </div>
            <div className="bg-blue-50 px-4 py-4 place-content-center rounded-xl">
               <div className="flex flex-row gap-x-1 items-center">
                <LuTarget className="text-blue-500" />
               <h3 className="font-semibold">Vision</h3>
               </div>
               <p>To become a premier organization dedicated to enhancing both personal and professional capacities of individuals and businesses, fostering efficiency, heightened productivity, and innovation.</p>
            </div>
            <div className="bg-blue-50 px-4 py-4 place-content-center rounded-xl">
                <div className="flex flex-row gap-x-1 items-center">
                    <CiFlag1 className="text-blue-500" />
                    <h3 className="font-semibold">Mission</h3>
                </div>
                <p>Our mission is to cultivate an empowering atmosphere for skill acquisition and capacity enhancement that heralds a holistic growth and development for individuals and organizations.</p>
            </div>
       </div>
        {/* <div className="grid grid-cols-2 gap-6 place-content-center items-center">
          
        </div> */}
    </div>
  )
}
