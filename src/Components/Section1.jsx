import React from "react";
import maintenance from "../images/maintenance.png"

function Section1() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-black justify-between flex ">
        <div className="mt-32 text-3xl mx-52 flex flex-col items-center">
          <h1 className="text-5xl font-bold">ยินดีต้อนรับสู่<span className='text-blue-500 font-extrabold p-3'>GarageFinder</span></h1>
          <p className="mt-3">ค้นหาร้านซ่อมรถใกล้คุณในจังหวัดพชรบูรณ์ง่ายๆแค่ปลายนิ้ว</p>
            <button className="mt-3 p-2 text-base w-64 bg-blue-500 rounded-md hover:bg-blue-700 text-white">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={maintenance} />
        </div>
      </div>
    </section>
  );
}

export default Section1;
