import React from "react";
import customer from "../images/customer-satisfaction.png";
import cross from "../images/cross-platform.png";
import gmaps from "../images/google-maps.png";

const featuresData = [
  {
    id: 1,
    image: gmaps,
    title: "มีความแม่นยำสูง",
    description:
      "ผู้ใช้สามารถค้นหาร้านซ่อมรถต่างๆ ได้โดยใช้ Google Maps API ซึ่งช่วยให้การค้นหาข้อมูลตำแหน่งมีประสิทธิภาพและง่ายขึ้น",
  },
  {
    id: 2,
    image: customer,
    title: "ช่วยในการตัดสินใจ",
    description:
      "เว็บของเรามีระบบรีวิวที่สามารถช่วยให้ตัดสินใจในการเลือกใช้บริการได้ง่ายขึ้น",
  },
  {
    id: 3,
    image: cross,
    title: "ใช้ได้ทั้ง 2 แพลตฟอร์ม",
    description:
      "เว็บของเรามีการทำ Design ให้เป็น Responsive Design เพื่อให้สะดวกในการใช้ทั้งคอมพิวเตอร์และโทรศัพท์",
  },
];
function Section2() {
  return (
    <section
      id="features"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-black text-5xl mb-8 md:mb-24 font-bold">
        ทำไมต้องใช้<span className="text-blue-500">GarageFinder ?</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0 hover:scale-105 ease-out duration-300"
          >
            <img src={feature.image} className="w-full object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h2>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section2;
