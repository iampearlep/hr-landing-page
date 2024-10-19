import { LuBriefcase } from "react-icons/lu";
import { FaUsers, FaUsersGear, FaVideo } from "react-icons/fa6";
import { BiCalendarEvent } from "react-icons/bi";
export const Services = () => {
  return (
    <div className="mx-auto w-10/12 md:px-6 py-10">
        <div className="flex flex-col gap-y-8 py-5">
          <div>
          <h2 className="font-semibold text-2xl">Our Services</h2>
          <p className="">Explore our diverse offerings and experience unparalleled excellence from tailored solutions to personalized consultations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-100 px-4 py-4 place-content-center rounded-xl">
              <div className="flex flex-row gap-x-2 items-center">
              <LuBriefcase className="text-blue-500 " />
              <h3 className="font-semibold">Programs/Projects Management</h3>
              </div>
              <p className="">Partner with us for seamless project execution.</p>
            </div>
            <div className="bg-slate-100 px-4 py-4 place-content-center rounded-xl">
              <div className="flex flex-row gap-x-2 items-center">
              <FaUsers className="text-blue-500" />
              <h3 className="font-semibold">Capacity Building</h3>
              </div>
              <p className="">Nurture talent and skills with our capacity building services.</p>
            </div>
            <div className="bg-slate-100 px-4 py-4 place-content-center rounded-xl">
              <div className="flex flex-row gap-x-2 items-center">
              <FaUsersGear  className="text-blue-500" />
              <h3 className="font-semibold">Consultancy Services</h3>
              </div>
              <p className="">Elevate your strategy with our consultancy services.</p>
            </div>
            <div className="bg-slate-100 px-4 py-4 place-content-center rounded-xl">
                <div className="flex flex-row gap-x-2 items-center">
                <BiCalendarEvent className="text-blue-500" />
                <h3 className="font-semibold">Event Host/Management</h3>
                </div>
              <p className="">Let us handle the details while you enjoy the moment.</p>
            </div>
            <div className="bg-slate-100 px-4 py-4 place-content-center rounded-xl">
                <div className="flex flex-row gap-x-2 items-center">
                <FaUsers className="text-blue-500" />
                <h3 className="font-semibold">Community Development</h3>
                </div>
              <p className="">Championing development where it matters most.</p>
            </div>
            <div className="bg-slate-100 px-4 py-4 place-content-center rounded-xl">
                <div className="flex flex-row gap-x-2 items-center">
                <FaVideo className="text-blue-500" />
                <h3 className="font-semibold">Content Development</h3>
                </div>
              <p className="">Unleash your creativity and transform ideas into impactful stories.</p>
            </div>
          </div>
        </div>
    </div>
  )
}
