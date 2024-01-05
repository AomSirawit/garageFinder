import React from "react";
import Swal from "sweetalert2";

function Section4() {
  const sendButton = () =>{
    Swal.fire({
      title: "ข้อความถูกส่งสำเร็จ!",
      text: "กรุณารอเจ้าหน้าที่ตอบกลับภายใน 24ชม.",
      icon: "success"
    });
  }
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-bold mb-4">Contact</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            FirstName
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Surname
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading" />
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={sendButton}>
          Submit
        </button>
      </div>
      
    </section>
  );
}
export default Section4;
