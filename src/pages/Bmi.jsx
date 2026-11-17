import bmi from "./../assets/bmi.png";
import { Link } from "react-router";
import Footer from "./../components/Footer";

export default function Bmi() {
  return (
    <>
      <div
        className="w-[65%] border border-gray-200 shadow-xl mt-20 rounded-2xl
                      mx-auto flex flex-col items-center p-10"
      >
        {/* แสดงชื่อการคำนวณภาษาไทย-อังกฤษ */}
        <div className="flex flex-col items-center gap-2 mb-5">
          <p className="font-kanit font-bold text-2xl">BMI Calculator</p>
          <p className="font-kanit text-sm text-gray-400">คำนวณ BMI</p>
        </div>

        {/* แสดงรูป */}
        <div>
          <img src={bmi} alt="รูป" className="w-25" />
        </div>

        {/* แสดงส่วนของ form เพื่อให้ผู้ใช้ป้อนหรือเลือกหรือคลิก */}
        <div className="w-full">
          <form className="flex flex-col">
            <label className="font-kanit font-bold">
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              className="border border-gray-500 p-2 rounded-lg"
            />

            <label className="font-kanit font-bold mt-3">
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              className="border border-gray-500 p-2 rounded-lg"
            />

            <div className="flex mt-5 gap-5">
              <button className="bg-blue-500 text-white p-2 rounded-lg w-full font-kanit cursor-pointer">
                คำนวณ BMI
              </button>
            </div>
            <div className="flex mt-5 gap-5">
              <button className="bg-gray-300 p-2 rounded-lg w-full font-kanit cursor-pointer">
                รีเซ็ต
              </button>
            </div>
          </form>
        </div>
        <div className="w-full mt-5 flex gap-5 justify-center">
          <p className="font-kanit font-bold text-lg">ค่า BMI ที่คำนวณได้:</p>
          <p className="font-kanit font-bold text-lg text-blue-500">0.00</p>
        </div>

        <Link
          to="/"
          className="w-full mt-5 p-3 bg-gray-300 text-center rounded-lg font-kanit font-bold"
        >
          กลับไปที่หน้าหลัก
        </Link>
      </div>
      <Footer />
    </>
  );
}