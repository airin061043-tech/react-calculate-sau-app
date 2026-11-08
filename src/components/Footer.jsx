import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="flex flex-col items-center mt-20 mb-20">
        <p className="font-itim text-gray-600">
            © 2026 React App. All rights reserved.
        </p>
 
        <p className="font-itim text-gray-600">
            Created by 6952D10018 Airin Dev Soft.
        </p>

        <div className="flex justify-center gap-5 mt-3">
         <FaFacebook />
         <AiFillInstagram />
         <RiTwitterXFill />

        </div>
    </div>
  )
}
 