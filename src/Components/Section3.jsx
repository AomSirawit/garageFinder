// src/App.js
import React from 'react';
import '../App.css';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    review: 'เป็นเว็บที่สะดวกดีครับสามารถใช้งานง่าย',
    rating: 4,
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'โชคดีครับที่มีเว็บนี้สะดวกสบายมากค่ะ',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mark Sun',
    review: 'ใช้ดีครับ',
    rating: 5,
  },
  {
    id: 4,
    name: 'Typoon',
    review: 'ดีจริงๆ',
    rating: 5,
  },
  {
    id: 5,
    name: 'Nano Umo',
    review: 'อร่อยดีครับ',
    rating: 4,
  },
  {
    id: 6,
    name: 'Nong P Eiei',
    review: 'ใช้ง่าย',
    rating: 3,
  },

];

function Section3(){
  return (
    <section id="reviews" className="min-h-screen flex flex-col justify-center items-center">
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{review.name}</h2>
            <p className="mb-2">{review.review}</p>
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1">{review.rating}/5</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Section3;
