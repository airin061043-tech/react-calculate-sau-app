import calculate from './../assets/calculate.png'
import CardMenu from '../components/CardMenu'
import bmi from './../assets/bmi.png'
import bmr from './../assets/bmr.png'
import car from './../assets/car.png'
import Footer from './../components/Footer'
import {Link} from "react-router"


export default function Home() {
  return (
    <>
    {/*ส่วนการแสดงรูป */}
    <div className='flex justify-center mt-30'>
      <img src={calculate} alt="Calculate" className='w-30' />
      </div>

      {/*ส่วนการแสดงชื่อแอป */}
      <div className='flex flex-col items-center mt-8'>
        <p className='font-kanit text-3xl font-bold text-blue-700'>เครื่องมือคำนวณออนไลน์</p>
        <p className='font-itim text-xl text-blue-500'>เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง</p>
      </div>

      {/*ส่วนการแสดงการ์ดเมนู */}
      <div className='flex justify-center mt-15 gap-5'>
        <Link to="/bmi">
          <CardMenu showTitle="BMI (ดัชนีมวลกาย)" showPic={bmi} showDetail="คำนวณค่าน้ำหนักของคุณว่าเหมาะกับส่วนสูงหรือไม่"/>
        </Link>

        <Link to="/bmr">
          <CardMenu showTitle="MBR (อัตราเผาผลาญ)" showPic={bmr} showDetail="คำนวณอัตราเผาผลาญพลังงานของคุณ"/>
        </Link>

        <Link to="/car">
          <CardMenu showTitle="การผ่อนชำระรถยนต์)" showPic={car} showDetail="คำนวณการผ่อนชำระรถยนต์ต่อเดือน"/>
        </Link>
      </div>

      <Footer />
    </>
  );
}